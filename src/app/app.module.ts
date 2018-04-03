import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighscoreComponent } from './highscore/highscore.component';
import { HighscoreEntryComponent } from './highscore-entry/highscore-entry.component';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HighscoreComponent,
    HighscoreEntryComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
