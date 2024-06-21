import styles from "./page.module.css";

export default function Page() {
    return (
        <div className={styles.container}>
            <h1>Raft Rush Privacy Policy</h1>
            <p className={styles.text}>
                Effective Date: 02 June 2024
            </p>
            <ol className={styles.numberedList}>
                <li>Welcome to Raft Rush! We are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy explains how we collect, use, and safeguard your information when you use our video game, Raft Rush. By using Raft Rush, you agree to the terms outlined in this Privacy Policy.</li>
                <li>We collect your game score if you choose to upload it to track and compare high scores with other players. Additionally, we collect IP addresses, advertising IDs, and approximate locations for advertising purposes.</li>
                <li>To facilitate score tracking, we create an anonymous account for you. This account does not require any personal information and is used solely to associate your high score with your gameplay.</li>
                <li>The collected data (your game score) is used exclusively for tracking your high score within the game and displaying it on leaderboards if you choose to upload it.</li>
                <li>Data is shared with Unity for displaying the leaderboard and for advertising. For more information on how Unity uses your data, please see their  <a className={styles.links} href="https://unity3d.com/legal/privacy-policy">privacy policy</a>.</li>
                <li>We take reasonable measures to protect your data from unauthorized access, disclosure, alteration, or destruction. While no online service can guarantee complete security, we strive to use commercially acceptable means to protect your data.</li>
                <li>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and within the game. You are advised to review this Privacy Policy periodically for any changes.</li>
                <li>You can request that your data is deleted <a className={styles.links} href="https://codedragons.co.uk/privacy/delete-my-data">here</a>.</li>

            </ol>
            <p className={styles.text}>
                Thank you for playing Raft Rush!
            </p>
        </div>
    );
}