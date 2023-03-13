import { Button, Spinner } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Page() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return <p>Signed in as {session.user?.email}</p>;
  }

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <Link href="/api/auth/signin">
      <Button leftIcon={<FaGithub />}>Github</Button>
    </Link>
  );
}
