import styles from "./page.module.css";

const steps = [
  ["01", "Start with a number", "Choose any number tile that opens a promising path."],
  ["02", "Build an expression", "Drag through neighbouring operators and numbers, including diagonally."],
  ["03", "Hit the target", "Clear the path, score points, and watch fresh tiles tumble in."],
];

const features = [
  ["×4", "Chase the combo", "Longer, smarter solves can earn more and keep your streak growing."],
  ["1–5", "Choose your challenge", "Pick Easy, Normal, or Hard and play for 1, 2, 3, or 5 minutes."],
  ["60", "Come back daily", "Take on a fresh 60-second Daily Challenge without an account or connection."],
  ["Aa", "Play your way", "Adjust music, sound, haptics, contrast, and motion to suit you."],
];

const tiles = ["9", "+", "6", "÷", "3", "×", "2", "−", "4"];

export default function Home() {
  return (
    <main>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <div>
            <p className={styles.eyebrow}>Fast · Clever · Satisfying</p>
            <h1 id="hero-title">Make the numbers fall</h1>
            <p className={styles.heroText}>Link neighbouring numbers and operators, solve the target, and keep your combo alive in a vibrant arithmetic puzzle game.</p>
            <div className={styles.actions}>
              <span className={styles.storeStatus}>Coming soon on Google Play</span>
              <a className={styles.textLink} href="#how-it-plays">See how it plays</a>
            </div>
            <p className={styles.proof}>No account. No connection. Just one more solve.</p>
          </div>
          <div className={styles.preview} aria-label="Numberfall expression preview">
            <span className={styles.targetLabel}>Target</span>
            <strong className={styles.target}>30</strong>
            <div className={styles.tileGrid} aria-hidden="true">
              {tiles.map((tile, index) => (
                <span className={index % 2 === 0 ? styles.numberTile : styles.operatorTile} key={`${tile}-${index}`}>{tile}</span>
              ))}
            </div>
            <p className={styles.expression}>9 + 6 × 2 = 30</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="how-it-plays" aria-labelledby="how-heading">
        <header className={styles.sectionHeading}>
          <p className={styles.eyebrow}>How it plays</p>
          <h2 id="how-heading">One swipe. One target. Endless possibilities.</h2>
        </header>
        <div className={styles.steps}>
          {steps.map(([number, title, body]) => (
            <article className={styles.step} key={number}>
              <span>{number}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.featureSection}`} id="features" aria-labelledby="features-heading">
        <header className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Find your flow</p>
          <h2 id="features-heading">Quick to learn. Clever enough to keep.</h2>
        </header>
        <div className={styles.features}>
          {features.map(([symbol, title, body], index) => (
            <article className={styles.featureCard} key={title}>
              <span className={index % 2 === 0 ? styles.numberBadge : styles.operatorBadge} aria-hidden="true">{symbol}</span>
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.daily} id="daily" aria-labelledby="daily-heading">
        <div>
          <p className={styles.eyebrow}>A fresh challenge every day</p>
          <h2 id="daily-heading">Sixty seconds. Same challenge. Your best route.</h2>
          <p>The Daily Challenge is ready wherever you are. Replay the day&apos;s sequence, refine your path, and chase your own high score—all offline.</p>
        </div>
        <div className={styles.timer} aria-label="Sixty second Daily Challenge"><strong>60</strong><span>seconds</span></div>
      </section>

      <section className={styles.accessibility} id="accessibility" aria-labelledby="accessibility-heading">
        <div className={styles.accessibilityMark} aria-hidden="true">9</div>
        <div>
          <p className={styles.eyebrow}>Designed to stay readable</p>
          <h2 id="accessibility-heading">Play in a way that feels right.</h2>
          <p>Shape-distinct tiles, high-contrast and reduced-motion settings, optional haptics, and independent audio controls support more ways to play.</p>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="cta-heading">
        <p className={styles.eyebrow}>Ready to make your move?</p>
        <h2 id="cta-heading">A quick puzzle break can become your next high-score obsession.</h2>
        <span className={styles.storeStatus}>Coming soon on Google Play</span>
      </section>
    </main>
  );
}
