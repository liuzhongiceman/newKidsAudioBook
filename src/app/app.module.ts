import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAudioComponent } from './components/add-audio/add-audio.component';
import { AudioDetailsComponent } from './components/audio-details/audio-details.component';
import { AudiosListComponent } from './components/audios-list/audios-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAudioComponent,
    AudioDetailsComponent,
    AudiosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
