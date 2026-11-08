import { differenceInYears } from 'date-fns';
import { Home } from '@/components/home';
import { getAllPosts } from '@/lib/blog';
import { BIRTH_DATE } from '@/lib/site';

/** The age is rendered server-side, so re-render daily to keep it accurate. */
export const revalidate = 86400;

export default function Page() {
  const age = differenceInYears(new Date(), new Date(BIRTH_DATE));

  return <Home posts={getAllPosts()} age={age} />;
}
