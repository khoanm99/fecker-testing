import Text from '@/atoms/typo/text';
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
    <div className={`w-[255px] bg-white p-7 lg:space-y-8`}>
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
