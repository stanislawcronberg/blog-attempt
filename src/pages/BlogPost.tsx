import { useParams } from 'react-router-dom';
import { posts } from '@/lib/posts';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto prose prose-invert">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time className="text-muted-foreground">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
      </header>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-invert max-w-none"
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}