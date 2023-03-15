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
      className={`absolute w-[255px] bg-white lg:left-[calc(50%_+_30px)] lg:top-[calc(50%_-_25px)] lg:space-y-8 lg:p-7`}
    >
      {content && <Text size={`textSmall`} content={content} />}
      <div>
        {phone && (
          <Link href={`tel:${phone}`} title={`Tel: ${phone}`}>
            <Text size={`textSmall`} content={`Tel. ${phone}`} />
          </Link>
        )}
        {email && (
          <Link href={`mailto:${email}`} title={`mailto:${email}`}>
            <Text size={`textSmall`} content={email} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default InfoWindow;
