import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

 
  constructor(private http: HttpClient) { }
  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'http://localhost:7000/';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    
    return this.http.post("http://localhost:7000/", formData)
      
      
}
}
