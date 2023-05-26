import Head from "next/head";

import HomeModule from '@/common/modules/home/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <main>
        <HomeModule />
      </main>
    </>
  );
}
