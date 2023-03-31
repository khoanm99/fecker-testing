import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { twMerge } from 'tailwind-merge';

const Markdown = ({
  content,
  className
}: {
  content: string;
  className?: string;
}) => {
  return (
    <ReactMarkdown
      className={twMerge('custom-markdown', className)}
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
