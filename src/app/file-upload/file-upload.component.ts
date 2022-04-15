import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget | null;
}
@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  

  ngOnInit(): void {
  }
  

  
  
  constructor(private fileUploadService: FileUploadService) { }
  fileToUpload: File ;
  handleFileInput(event: Event) {
      //this.fileToUpload = event.target.files[0] as HTMLInputElement;
      
      const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
      this.fileToUpload= fileList[0];
      this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
        // do something, if upload success
        });
    }
  }
  uploadFileToActivity() {
    //if(this.fileToUpload = null) return
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      });
  }
  
}
