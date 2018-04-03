import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Guest, HighScoreEntry} from '../declarations';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-highscore-entry',
  templateUrl: './highscore-entry.component.html'
})
export class HighscoreEntryComponent implements AfterViewInit {

  MAX_RANDOM_IMAGE_INDEX = 9;
  @Input()
  entryData: HighScoreEntry;
  guest: Guest;
  randomImageIndex = this.randomizeIndex(9);

  constructor(private db: AngularFirestore) {
  }

  ngAfterViewInit() {
    this.fetchGuest();
  }

  private randomizeIndex(maxIndex: number) {
    return Math.floor(Math.random() * (maxIndex - 1 + 1)) + 1;
  }

  private fetchGuest() {
    this.db.collection('guests').doc<Guest>(this.entryData.guestId).valueChanges()
      .forEach(guest => {
        this.guest = guest;
      });
  }

}
