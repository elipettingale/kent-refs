import Tweet from "@/components/common/Tweet";
import styles from "./index.module.css";

interface Props {}

export default function LatestTweets({}: Props) {
  return (
    <div className={styles.Wrapper}>
      <Tweet link="#" theme="grey" date="2nd September, 2023">
        <p>
          Have you thought about picking up the whistle and becoming a rugby
          referee? Or just wanting to increase your knowledge around the laws or
          the game?
        </p>
        <p>
          Kent Referees Society are hosting their first course for this season
          and you can book your place here
        </p>
      </Tweet>
      <Tweet link="#" theme="blue" date="2nd September, 2023">
        <p>To All Members: Sunday 03/09/2023</p>
        <p>Please see below for our conference agenda.</p>
        <p>
          Conference will kick off from 10:00am sharp, tea and coffee will be
          available from 09:30am
        </p>
        <p>
          Location: Sutton Valence School <br></br>
          North Street, Sutton Valence, Kent, ME17 3HL
        </p>
        <p>Special Guest George Selwood</p>
      </Tweet>
      <Tweet link="#" theme="grey" date="2nd September, 2023">
        <p>Places still available</p>
        <p>
          Kent Referee’s Society is running another Introduction to Referee
          Course which was very popular last year. It is delivered over two
          evenings scheduled for Monday 16th October and Monday 30th October at
          Aylesford Bulls RFC. Contact - admin@kentrefs.co.uk
        </p>
      </Tweet>
    </div>
  );
}
