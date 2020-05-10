import { Component, OnInit } from '@angular/core';
import { AudiosBookService } from 'src/app/services/audiosBook.service';

@Component({
  selector: 'app-audios-list',
  templateUrl: './audios-list.component.html',
  styleUrls: ['./audios-list.component.css']
})
export class AudiosListComponent implements OnInit {

  audioBooks: any;
  currentAudioBook = null;
  currentIndex = -1;
  title = '';

  constructor(private audiosBookService: AudiosBookService) { }

  ngOnInit() {
    this.retrieveAudioBooks();
  }

  retrieveAudioBooks() {
    this.audiosBookService.getAll()
      .subscribe(
        data => {
          this.audioBooks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // refreshList() {
  //   this.retrieveAudioBooks();
  //   this.currentAudioBook = null;
  //   this.currentIndex = -1;
  // }

  setActiveAudioBook(tutorial, index) {
    this.currentAudioBook = tutorial;
    this.currentIndex = index;
  }

  searchTitle() {
    this.audiosBookService.findByTitle(this.title)
      .subscribe(
        data => {
          this.audioBooks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
