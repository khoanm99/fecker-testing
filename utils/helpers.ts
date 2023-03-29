import { NextApiRequest, NextApiResponse } from 'next';

export const setTextLimit = (str: string, length: number): string => {
  if (str.length > length) {
    str = str.substring(0, length) + '...';
  }
  return str;
};

export const scrollToTarget = (id: string, fixed: boolean) => {
  const targetEl = document.querySelector(`#${id}`) as HTMLElement | null;

  if (targetEl != null) {
    if (!fixed) {
      window.scrollTo({
        top: targetEl.offsetTop,
        behavior: 'smooth'
      });
    } else {
      const _header = document.querySelector(`#header`) as HTMLElement | null;
      let _top =
        targetEl.offsetTop - (_header ? _header.offsetHeight - 110 : 0);

      window.scrollTo({
        top: _top,
        behavior: 'smooth'
      });
    }
  }
};

export const trimHttpLink = (link: string) => {
  let newLink = link.replace('http://', '').replace('https://', '');
  if (newLink.slice(-1) == '/') {
    newLink = newLink.slice(0, -1);
  }
  return newLink;
};

export const isValidHttpUrl = (url: string) => {
  let _url;
  try {
    _url = new URL(url);
  } catch (_) {
    return false;
  }
  return _url.protocol === 'http:' || _url.protocol === 'https:';
};

export const validateGoogleRecaptcha = (
  req: NextApiRequest,
  res: NextApiResponse,
  callback: any
) => {
  const body = JSON.parse(req?.body);
  return fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${body.gReCaptchaToken}`
  })
    .then(reCaptchaRes => reCaptchaRes.json())
    .then(reCaptchaRes => {
      console.log(
        reCaptchaRes,
        'Response from Google reCatpcha verification API'
      );
      if (reCaptchaRes?.score > 0.5) {
        callback();
      } else {
        res.status(500).json({
          status: 'failure',
          message: 'Google ReCaptcha Failure'
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
};
export const getRevalidationTTL = () => {
  return process.env.NODE_ENV === 'production' ? 40 : 20;
};
