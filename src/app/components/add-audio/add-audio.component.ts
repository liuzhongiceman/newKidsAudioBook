import { Component, OnInit } from '@angular/core';
import { AudiosBookService } from 'src/app/services/audiosBook.service';

@Component({
  selector: 'app-add-audio',
  templateUrl: './add-audio.component.html',
  styleUrls: ['./add-audio.component.css']
})
export class AddAudioComponent implements OnInit {
  audioBook = {
    title: '',
    description: '',
    author: '',
    imagePath: '',
    audioPath: ''
  };
  submitted = false;
  uploadedFile: File;

  constructor(
    private audiosBookService: AudiosBookService
    ) {}

  ngOnInit() {
  }

  fileChange(element) {
    this.uploadedFile = element.target.file;
  }
  
  upload() {
    console.log('audioBook', this.audioBook);
    this.audiosBookService.uploadImage(this.audioBook.audioPath, this.audioBook.imagePath)
    // this.audiosBookService.uploadImage(this.uploadedFile)
    //   .subscribe(
    //     response => {
    //       console.log('response', response);
    //     // this.audioBook.imagePath = response;
    //   }, error => {
    //     console.log(error);
    //   }
    //   );
  }
  
  // saveAudioBook() {
  //   const data = {
  //     title: this.audioBook.title,
  //     description: this.audioBook.description,
  //     author: this.audioBook.author,
  //     imagePath: this.audioBook.imagePath,
  //     audioPath: this.audioBook.audioPath
  //   };

  //   this.audiosBookService.create(data)
  //     .subscribe(
  //     response => {
  //       console.log(response);
  //       this.submitted = true;
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  newAudioBook() {
    this.submitted = false;
    this.audioBook = {
      title: '',
      description: '',
      author: '',
      imagePath: '',
      audioPath: ''
    };
  }

}
