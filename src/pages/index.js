import Tiptap from "@/components/TipTap";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>TipTap | Maitra Khatri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 style={{ margin: "2rem" }}>Playing around with TipTap</h1>
      <Tiptap />
    </>
  );
}
