import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FileDetails } from 'src/app/models/file-details.model';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/services/language.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-add-reading-image',
  templateUrl: './add-reading-image.component.html',
  styleUrls: ['./add-reading-image.component.css']
})
export class AddReadingImageComponent {

  question: Question = {
    id: 0,
    idCategory: 0,
    description1: '',
    answer: '',
    description2: '',
    urlFileName: ''
  };
  submitted = false;
  checkBoxOptionDTOList: any = [];  
  answer2?: string;
  answer3?: string;
  answer4?: string;
  idComboFirst?: any; 
  idComboSecond?: any; 
  idComboThird?: any;
  idComboFourth?: any;

  fileInfos?: Observable<any>;
  file!: File;
  fileDetails!: FileDetails;
  fileUris: Array<string> = [];

  constructor(private languageService: LanguageService, private route: ActivatedRoute,
    private uploadFileService: UploadFileService) {}

  ngOnInit(): void {      
     this.fileInfos = this.uploadFileService.getFiles();
  }

  selectFile(event: any) {
    this.file = event.target.files.item(0);
  }

  saveData() {
   if (this.file != null)  {

    this.uploadFileService.uploadFromBrowser(this.file).subscribe({
      next: (data) => {
        this.fileDetails = data;
        this.fileUris.push(this.fileDetails.fileUri);     
        alert("File Uploaded and data saved Successfully");  
      },
      error: (e) => {
        console.log(e);
      }
    });

   } else {

      alert("File is not present, sorry!");

   }
   
  }  

}
