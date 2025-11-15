import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { ServerTime } from "./_components/ServerTime";
import { ClientTime } from "./_components/ClientTime";
import { CounterTime } from "./_components/CounterTimer";
import { RevalidateButton } from "./_components/RevalidateButton";

export default async function Home(props: {
  params: Promise<{ slug: string[] }>;
}) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Testing</h1>
          <h2>Time For Server Render</h2>
          <ServerTime />
          <h2>Client Render Time</h2>
          <ClientTime />
          <h2>Cache dead in</h2>
          <CounterTime />
          <br />
          <RevalidateButton />
        </div>
      </main>
    </div>
  );
}
