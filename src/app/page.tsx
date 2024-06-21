import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          Raft Rush
        </div>
      </div>
      <div className={styles.gameDetailsContainer}>
        <div className={styles.gameDetails}>
          <h2 className={styles.gameDetailsTitle}>
            How long can you survive the rapids?
          </h2>
          <p className={styles.detailsText}>
            Dive into the exhilarating world of Raft Rush! This heart-pounding rafting adventure challenges you to navigate treacherous rapids and survive for as long as you can. Do you have what it takes to ride the waves and dominate the leaderboard?!!
          </p>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
