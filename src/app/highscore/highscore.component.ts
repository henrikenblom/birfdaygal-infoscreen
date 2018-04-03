import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {HighScoreEntry, PlayerStats} from '../declarations';

declare var Module: any;

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html'
})
export class HighscoreComponent implements OnInit {

  scoreList: HighScoreEntry[] = [];

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.fetchMusicQuizScores();
  }

  private fetchMusicQuizScores(): Promise<any> {
    return this.db.collection('musicquiz')
      .doc('scoreboard')
      .collection<PlayerStats>('stats', ref =>
        ref.orderBy('points', 'desc'))
      .snapshotChanges()
      .forEach(data => {
        this.scoreList = [];
        let position = 1;
        for (const statsDocument of data) {
          const stats = statsDocument.payload.doc.data() as PlayerStats;
          this.scoreList.push({points: stats.points, guestId: statsDocument.payload.doc.id, position: position});
          if (position++ === 6) {
            break;
          }
        }
      });
  }

}
