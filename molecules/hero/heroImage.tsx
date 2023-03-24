import { UploadFile } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import Image from 'next/image';

const HeroImage = ({ image }: { image: Maybe<UploadFile> }) => {
  return (
    <>
      {image && image.url && (
        <div className={`relative h-screen w-full`}>
          <Image
            src={image.url}
            alt={image.alternativeText ?? ''}
            fill
            className={`object-cover object-center`}
          />
        </div>
      )}
    </>
  );
};

export default HeroImage;
