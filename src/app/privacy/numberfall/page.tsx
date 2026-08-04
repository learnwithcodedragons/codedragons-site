import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Numberfall Privacy Policy",
    description: "How Numberfall protects your privacy and handles local game data.",
};

export default function NumberfallPrivacyPolicy() {
    return (
        <main className={styles.page}>
            <article className={styles.policy}>
                <header>
                    <p className={styles.eyebrow}>Privacy policy</p>
                    <h1>Numberfall</h1>
                    <p className={styles.updated}>Effective 4 August 2026</p>
                </header>

                <section>
                    <h2>The short version</h2>
                    <p>
                        Numberfall is an offline game. Numberfall does not collect,
                        transmit, share, or sell your personal data or device data.
                    </p>
                </section>

                <section>
                    <h2>Information stored on your device</h2>
                    <p>
                        Game progress, high scores, settings, and preferences are stored
                        locally on your device so the game can work. CodeDragons does not
                        receive or have access to this information.
                    </p>
                </section>

                <section>
                    <h2>Accounts, advertising, and analytics</h2>
                    <p>
                        Numberfall does not require an account and does not include
                        advertising, analytics, or tracking services.
                    </p>
                </section>

                <section>
                    <h2>Sharing and selling data</h2>
                    <p>
                        Numberfall does not share or sell personal data because it does
                        not collect any. App stores may process information independently
                        when you download or update the game; their own privacy policies
                        apply to that activity.
                    </p>
                </section>

                <section>
                    <h2>Retention and deletion</h2>
                    <p>
                        CodeDragons does not retain Numberfall user data on its servers.
                        You can remove locally stored game data using your device&apos;s app
                        data controls or by deleting the app.
                    </p>
                </section>

                <section>
                    <h2>Children&apos;s privacy</h2>
                    <p>
                        Numberfall does not knowingly collect personal data from children
                        or any other players.
                    </p>
                </section>

                <section>
                    <h2>Changes to this policy</h2>
                    <p>
                        If Numberfall&apos;s data practices change, this policy will be
                        updated before the new practices take effect. The effective date
                        above will also be updated.
                    </p>
                </section>

                <section>
                    <h2>Contact</h2>
                    <p>
                        Numberfall is developed by CodeDragons. For privacy questions,
                        please use the developer contact details shown on Numberfall&apos;s
                        official app store listing.
                    </p>
                </section>
            </article>
        </main>
    );
}
