type Props = {
  name: string;
  errors: any;
};
const MessageError = ({ name, errors }: Props) => {
  return (
    <>
      {errors && errors[name] && (
        <p className={'px-5 pt-1 text-[14px] font-extralight text-[#ff0000]'}>
          {errors[name]?.message == null || errors[name]?.message == ''
            ? 'Das ist ein Pflichtfeld.'
            : errors[name]?.message}
        </p>
      )}
    </>
  );
};
export default MessageError;
