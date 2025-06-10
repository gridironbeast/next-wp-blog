import React from 'react';
import { getPostsBySlug } from '@/lib/queries';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await getPostsBySlug((await params).slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post?.title,
    openGraph: {
      images: ['/open-graph.jpg', ...previousImages],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPostsBySlug((await params).slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  const formattedDate = new Date(post.date);
  const date = formattedDate.toLocaleString('de-DE', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title }}></h1>
      <div>
        Published on <b>{date}</b> by {post?.author?.node?.name}
      </div>
      <div className="article" dangerouslySetInnerHTML={{ __html: post?.content }}></div>
    </div>
  );
}
