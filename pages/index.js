import Head from "next/head";
import Hero from "../components/Hero";
import MainLayout from "../components/MainLayout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Mr.Robot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <MainLayout />
    </div>
  );
}
