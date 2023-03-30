// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.type) {
    return res.redirect(`/404`);
  }
  switch (req?.query?.type) {
    case 'project':
      res.setPreviewData({});
      return res.redirect(`/projekte/${req?.query?.slug || ''}`);
    // case 'home-section':
    //   res.setPreviewData({});
    //   return res.redirect(`/`);
    // case 'contact-section':
    //   res.setPreviewData({});
    //   return res.redirect(`/kontakt`);
    // case 'fassaden-section':
    //   res.setPreviewData({});
    //   return res.redirect(`/fassaden`);
    // case 'immobilien-section':
    //   res.setPreviewData({});
    //   return res.redirect(`/immobilien`);
    // case 'innovation-section':
    //   res.setPreviewData({});
    //   return res.redirect(`/innovationen`);
    // case 'project-section':
    //   res.setPreviewData({});
    //   return res.redirect(`/projekte`);
    // case 'reference-section':
    //   res.setPreviewData({});
    //   return res.redirect(`/referenzen`);
    // case 'rent-sell-section':
    //   res.setPreviewData({});
    //   return res.redirect(`/vermieten-verkaufen`);
    // case 'team-section':
    //   res.setPreviewData({});
    //   return res.redirect(`/firma`);
    default:
      return res.redirect(`/`);
  }
};

export default handler;
