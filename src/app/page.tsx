import styles from "./page.module.css";
import Nav from "./nav/nav";
import Image from "next/image";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <main>
        <div className={styles.main}>
          <div className={styles.title}>
            Murder Death Kill
          </div>
        </div>
        <div className={styles.gameDetailsContainer}>
          <div className={styles.gameDetails}>
            <h2 className={styles.gameDetailsTitle}>
              Help Brydon rescue his brother before it's too late...
            </h2>
            <p className={styles.detailsText}>
              In a town full deviant's and criminals you're brother has been kidnaped and it is up to you to rescue him before it's too late!
            </p>
          </div>
          <div>
            <iframe src="https://itch.io/embed-upload/9623781?color=333333" allowfullscreen="" width="1000" height="660"></iframe>
          </div>
        </div>
        <div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
