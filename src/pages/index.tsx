import AOS from "aos";
import { useEffect } from "react";
import Navbar from "../../components/organisms/Navbar";
import MainBanner from "../../components/organisms/MainBanner";
import TransactionStep from "../../components/organisms/TransactionStep";
import FeaturedGame from "../../components/organisms/FeaturedGame";
import Reached from "../../components/organisms/Reached";
import Story from "../../components/organisms/Story";
import Footer from "../../components/organisms/Footer";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>StroreGG - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu
          players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="StroreGG - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu
          players menjadi pemenang sejati"
        />
        <meta property="og:img" content="" />
        <meta property="og:url" content="" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
