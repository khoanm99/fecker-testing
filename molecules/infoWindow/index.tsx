import Text from '@/atoms/typo/text';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const InfoWindow = ({
  content,
  phone,
  email,
  className
}: {
  content?: string;
  phone?: string;
  email?: string;
  className?: string;
}) => {
  return (
    <div className={twMerge(`w-[255px] space-y-8 bg-white p-7`, className)}>
      {content && (
        <Text
          size={`bodyTextSmall`}
          content={content}
          className={`text-[16px]`}
        />
      )}
      <div>
        {phone && (
          <Link href={`tel:${phone}`} title={`Tel: ${phone}`}>
            <Text
              size={`bodyTextSmall`}
              content={`Tel. ${phone}`}
              className={`text-[16px]`}
            />
          </Link>
        )}
        {email && (
          <Link href={`mailto:${email}`} title={`mailto:${email}`}>
            <Text
              size={`bodyTextSmall`}
              content={email}
              className={`text-[16px]`}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default InfoWindow;
