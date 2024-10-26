interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello, World!',
    date: '2024-03-20',
    excerpt: 'Welcome to my first blog post.',
    content: `
# Hello, World!

Welcome to my first blog post. This is a sample post to demonstrate the markdown support.

## Features

- Markdown support
- Code highlighting
- Dark theme
- Responsive design

\`\`\`typescript
function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
}
\`\`\`

### Lists

1. First item
2. Second item
3. Third item

### Blockquotes

> This is a blockquote.
> It can span multiple lines.

### Links and Images

[Visit our GitHub](https://github.com)

![Sample Image](https://images.unsplash.com/photo-1516259762381-22954d7d3ad2)
    `,
  },
];