import Image from 'next/image';

const HeroImage = ({ image }: any) => {
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
