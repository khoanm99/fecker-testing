import { IPostType } from '@/types';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  post: IPostType;
  contentCls?: string;
};

const Article = ({ post, contentCls }: Props) => {
  return (
    <>
      {post.excerpt && (
        <div className="prose-p:font-medium mb-6 text-3xl lg:indent-24">
          {post.excerpt}
        </div>
      )}

      <article className={clsx('article', contentCls)}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ a: LinkRenderer }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </>
  );
};

function LinkRenderer(props: any) {
  return (
    <a
      href={props.href}
      target={props.href.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}

export default Article;
