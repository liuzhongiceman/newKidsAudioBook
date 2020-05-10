import { Component, OnInit } from '@angular/core';
import { AudiosBookService } from 'src/app/services/audiosBook.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-audio-details',
  templateUrl: './audio-details.component.html',
  styleUrls: ['./audio-details.component.css']
})
export class AudioDetailsComponent implements OnInit {
  currentAudioBook = null;
  message = '';

  constructor(
    private audiosBookService: AudiosBookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getAudioBook(this.route.snapshot.paramMap.get('id'));
  }

  getAudioBook(id) {
    this.audiosBookService.get(id)
      .subscribe(
        data => {
          this.currentAudioBook = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAudioBook() {
    this.audiosBookService.update(this.currentAudioBook.id, this.currentAudioBook)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAudioBook() {
    this.audiosBookService.delete(this.currentAudioBook.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/audiosBook']);
        },
        error => {
          console.log(error);
        });
  }
}
