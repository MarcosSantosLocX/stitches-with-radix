import Head from "next/head";

import Examples from '@/common/modules/examples/examples';

export default function Home() {
  return (
    <>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <main>
        <Examples />
      </main>
    </>
  );
}
