import NavigationSvg from '@/atoms/svg/navigation';
import Text from '@/atoms/typo/text';
import clsx from 'clsx';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props {
  type?: 'link';
  cls?: string;
  className?: string;
  title?: string;
  url: string;
  navigate?: 'next' | 'prev';
}

const TextWithNavigate = ({
  type = 'link',
  className = '',
  title = '',
  url,
  navigate = 'next'
}: Props) => {
  switch (type) {
    case 'link':
      return (
        <>
          <Link
            href={url ?? '#'}
            title={title}
            className={twMerge(
              clsx(
                `flex items-center justify-start gap-5 transition-transform duration-300 lg:justify-center`,
                {
                  'flex-row-reverse': navigate == 'prev'
                },
                className
              )
            )}
          >
            {title && renderContentWithNavigator({ title, navigate })}
          </Link>
        </>
      );
  }
};

export default TextWithNavigate;

const renderContentWithNavigator = ({
  title,
  navigate = 'next'
}: {
  title: string;
  navigate: 'next' | 'prev';
}) => {
  return (
    <>
      <Text
        content={title}
        className={`w-full font-bold lg:font-[16px]`}
        renderAs={`div`}
      />
      <NavigationSvg
        className={`flex !h-12 !w-12 flex-[0_0_48px] ${
          navigate == 'next' ? `rotate-180` : ``
        }`}
      />
    </>
  );
};
