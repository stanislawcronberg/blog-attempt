import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-muted-foreground">
          A minimalist space for thoughts and ideas.
        </p>
        <div>
          <Button asChild size="lg">
            <Link to="/blog">
              Read Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 grid gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
            <div className="space-y-4">
              {/* This will be populated dynamically */}
              <p className="text-muted-foreground">No posts yet.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}