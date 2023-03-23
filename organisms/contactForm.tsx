import Input from '@/atoms/input';
import Text from '@/atoms/typo/text';
import PrimaryButton from '@/atoms/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSubmit from '@/hooks/useSubmit';
import InputError from '@/atoms/inputError';
import { useState } from 'react';
import clsx from 'clsx';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = ({
  className,
  locate
}: {
  className?: string;
  locate?: string;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>();
  const submit = useSubmit();
  const [loading, setLoading] = useState<boolean>(false);
  const [resultSend, setResultSend] = useState<boolean | null>(null);
  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoading(true);
    try {
      const result = await submit(data);
      if (result?.success) {
        setResultSend(true);
        setTimeout(() => {
          reset();
          setResultSend(null);
          setLoading(false);
        }, 4000);
      } else {
        setLoading(false);
        setResultSend(false);
      }
    } catch (error) {
      setLoading(false);
      setResultSend(false);
    }
  };

  return (
    <form
      className={`${className} pb-[30px]`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-[14px]">
        <Input
          placeholder={`Vorname Name`}
          {...register('name', { required: true })}
          disabled={loading}
        />
        <InputError name={'name'} errors={errors} />
      </div>
      <div className="mb-[14px]">
        <Input
          placeholder={`Email`}
          type={'email'}
          aria-invalid={errors.email ? 'true' : 'false'}
          disabled={loading}
          {...register('email', { required: true })}
        />
        <InputError name={'email'} errors={errors} />
      </div>
      <div className="mb-[14px]">
        <Input
          placeholder={`Nachricht`}
          {...register('message', { required: true })}
          disabled={loading}
        />
        <InputError name={'message'} errors={errors} />
      </div>
      <div
        className={`lg:pt-[30px] lg:pb-[20px] ${
          locate === 'menu'
            ? 'xl:flex xl:justify-between'
            : 'lg:flex lg:justify-between '
        }`}
      >
        <Text
          content={`Mit dem Senden akzeptieren Sie die Datenschutzerklärung`}
          className={`py-[10px] lg:py-[0px] ${
            locate === 'menu' ? '' : 'lg:w-[50%]'
          }`}
          size={`bodyTextSmall`}
        />
        <div>
          <PrimaryButton
            title="Senden"
            type={'submit'}
            loading={loading}
            className={`my-[20px] ${
              locate === 'menu' ? 'lg:mb-[0] xl:mt-[0]' : 'lg:m-[0px]'
            }`}
          />
          {resultSend !== null && (
            <p
              className={clsx(
                'text-[14px] lg:mt-2 lg:text-center',
                resultSend ? 'text-primary' : 'text-[red]'
              )}
            >
              {resultSend ? 'Email erfolgreich senden' : 'E-Mail senden fehl'}
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
