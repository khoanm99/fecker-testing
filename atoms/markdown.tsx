import ReactMarkdown from 'react-markdown';

const Markdown = ({ content }: { content: string }) => {
  return <ReactMarkdown className="custom-markdown">{content}</ReactMarkdown>;
};

export default Markdown;
