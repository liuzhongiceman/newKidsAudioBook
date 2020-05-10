import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudiosListComponent } from './components/audios-list/audios-list.component';
import { AudioDetailsComponent } from './components/audio-details/audio-details.component';
import { AddAudioComponent } from './components/add-audio/add-audio.component';

const routes: Routes = [
  { path: '', redirectTo: 'audiosBook', pathMatch: 'full' },
  { path: 'audiosBook', component: AudiosListComponent },
  { path: 'audiosBook/:id', component: AudioDetailsComponent },
  { path: 'add', component: AddAudioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
