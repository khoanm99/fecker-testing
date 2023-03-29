import Heading from '@/atoms/typo/heading';
import PrimaryButton from '@/atoms/button';
import Link from 'next/link';

const Template404 = () => {
  return (
    <div
      className={
        'flex w-full content-center items-center py-[110px] max-lg:pb-10'
      }
    >
      <div className={'mx-auto w-full max-w-[600px] text-center'}>
        <Heading
          className={'pb-3 max-lg:text-[120px]'}
          size={`h1`}
          renderAs={`h1`}
          title={`404`}
        />
        <Heading
          className={'pb-3 lg:text-[30px]'}
          size={`h3`}
          renderAs={`h2`}
          title={`Diese Seite wurde nicht gefunden!`}
        />
        <Heading
          className={'font-extralight'}
          size={`h5`}
          renderAs={`h3`}
          title={`Die gesuchte Seite konnte nicht gefunden werden. Sie wurde möglicherweise entfernt, umbenannt oder existierte von vornherein nicht.`}
        />
        <Link href={'/'} title={`Zurück zu home`}>
          <PrimaryButton className={'mt-5'} title={`Zurück zu home`} />
        </Link>
      </div>
    </div>
  );
};
export default Template404;
