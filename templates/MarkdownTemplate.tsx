import Container from '@/components/container';
import Heading from '@/atoms/typo/heading';
import { ImpressumSection, Maybe } from '@/graphql/generated';
import Markdown from '@/atoms/markdown';

interface Props {
  title?: string;
  content?: string;
}

const MarkdownTemplate = ({ title, content }: Props) => {
  return (
    <div className={'mt-[100px] pb-[60px]'}>
      {title && (
        <Container id={title ?? ''} layout={'grid'}>
          <Heading
            size={`h1`}
            renderAs={`h1`}
            title={title}
            className={`z-10 max-w-[195px] lg:max-w-[870px]`}
          />
          {content && (
            <Markdown
              content={content}
              className={`mt-[40px] w-full space-y-0 lg:mt-[80px] lg:ml-[150px] lg:max-w-[770px] lg:text-[20px] xl:ml-[250px] 3xl:max-w-[60%] [&>a.underline]:underline`}
            />
          )}
        </Container>
      )}
    </div>
  );
};
export default MarkdownTemplate;
