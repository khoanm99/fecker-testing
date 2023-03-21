import Text from '@/atoms/Typo/text';
import Link from 'next/link';

const InfoWindow = ({
  content,
  phone,
  email
}: {
  content?: string;
  phone?: string;
  email?: string;
}) => {
  return (
    <div
      className={`absolute w-[255px] bg-white p-7 lg:left-[calc(50%_+_38px)] lg:top-[calc(50%_-_25px)] lg:space-y-8`}
    >
      {content && <Text size={`bodyTextSmall`} content={content} />}
      <div>
        {phone && (
          <Link href={`tel:${phone}`} title={`Tel: ${phone}`}>
            <Text size={`bodyTextSmall`} content={`Tel. ${phone}`} />
          </Link>
        )}
        {email && (
          <Link href={`mailto:${email}`} title={`mailto:${email}`}>
            <Text size={`bodyTextSmall`} content={email} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default InfoWindow;
