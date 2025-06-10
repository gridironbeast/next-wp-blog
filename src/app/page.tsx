import Hero from '@/components/Hero';
import SocialIcons from '@/components/social-icons';
import Categories from '@/components/Categories';
import LatestPosts from '@/components/latest-post';
import Link from 'next/link';
import { getCategories, getAllPosts } from '@/lib/queries';

export default async function Home() {
  const categories = await getCategories();
  const { posts } = await getAllPosts();
  return (
    <section>
      <Hero />
      <SocialIcons />
      <Categories categories={categories} />
      <LatestPosts posts={posts} />
      <div className="text-center">
        <Link href={'/blog'} className="hover:underline text-gray-900 py-5 block rounded-md">
          View More
        </Link>
      </div>
    </section>
  );
}
