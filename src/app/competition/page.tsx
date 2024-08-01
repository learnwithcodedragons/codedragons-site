import styles from "./page.module.css";

export default function Page() {
    return (
        <div className={styles.container}>
            <h1>Raft Rush Competition</h1>
            <p className={styles.text}>
                End Date: Midnight (GMT) on 31st August 2024
            </p>
            <p className={styles.text}>
            Whoever tops the RaftRush leaderboard at the end of August wins a $25 gift card. To claim your voucher, submit your User ID via the website form. The winner will be announced on our Facebook page on September 1, 2024.
            </p>
            <h2>Terms and Conditions</h2>
            <ol className={styles.numberedList}>
                <li>The winner must submit their User ID and email address through the form on this page by November 1, 2024.</li>
                <li>Participants suspected of cheating will be disqualified.</li>
                <li>All decisions made by the competition organizers are final.</li>
                <li>The use of any third-party software or modifications that provide an unfair advantage is prohibited.</li>
                <li>Participants must adhere to the games code of conduct and community guidelines.</li>
                <li>Any disputes or issues must be reported to the organizers within 24 hours of the competitions end.</li>
            </ol>
            <p>
                Good luck and have fun playing Raft Rush!
            </p>
        </div>
    );
}