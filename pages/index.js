import Head from "next/head";
import PlayControls from "../components/PlayControls";
import BikeGuy from "../components/BikeGuy";
import Playlist from "../components/Playlist";
import styles from "../styles/Home.module.css";
import GithubCorner from "react-github-corner";

export default function Home() {
  const repoUrl = "https://github.com/leopaul29/nextjs-music-player";
  return (
    <div>
      <Head>
        <title>Music Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={styles.main}>
        <GithubCorner
          href={repoUrl}
          bannerColor="#000"
          octoColor="#fff"
          size={80}
          direction="right"
          svgStyle={{ mixBlendMode: "darken" }}
          target="_blank"
          rel="noreferrer"
        />
        <BikeGuy />
        <Playlist />
        <PlayControls />
      </main>
    </div>
  );
}
