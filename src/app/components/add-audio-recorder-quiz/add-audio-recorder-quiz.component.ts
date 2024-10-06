import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckBoxOption } from 'src/app/models/check-box-option.model';
import { FileDetails } from 'src/app/models/file-details.model';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/services/language.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-add-audio-recorder-quiz',
  templateUrl: './add-audio-recorder-quiz.component.html',
  styleUrls: ['./add-audio-recorder-quiz.component.css']
})
export class AddAudioRecorderQuizComponent implements OnInit {

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

  constructor(private languageService: LanguageService, private route: ActivatedRoute, private uploadFileService: UploadFileService) {}

  ngOnInit(): void {
      this.route.queryParamMap.subscribe((paramMap) => {
        this.question.id = paramMap.get('id');
        this.question.idCategory = paramMap.get('idCategory');
        this.question.description1 = paramMap.get('description1') ?? '';
        this.question.answer = paramMap.get('answer') ?? '';
        this.question.description2 = paramMap.get('description2') ?? ''; 
        this.question.urlFileName = paramMap.get('urlFileName') ?? '';
        this.answer2 = paramMap.get('answer2') ?? '';      
        this.answer3 = paramMap.get('answer3') ?? '';
        this.answer4 = paramMap.get('answer4') ?? '';
        this.idComboFirst = paramMap.get('idComboFirst') ?? 0;
        this.idComboSecond = paramMap.get('idComboSecond') ?? 0;
        this.idComboThird = paramMap.get('idComboThird') ?? 0;
        this.idComboFourth = paramMap.get('idComboFourth') ?? 0;        
      });    
     this.fileInfos = this.uploadFileService.getFiles();
  }

  saveQuestion(): void {

    var combo1 = new CheckBoxOption();
    combo1.id = this.idComboFirst;
    combo1.idCategory = this.question.idCategory;
    combo1.idQuestion = this.question.id;
    combo1.description = this.question.answer;

    var combo2 = new CheckBoxOption();
    combo2.id = this.idComboSecond;
    combo2.idCategory = this.question.idCategory;
    combo2.idQuestion = this.question.id;
    combo2.description = this.answer2;
    
    var combo3 = new CheckBoxOption();
    combo3.id = this.idComboThird;
    combo3.idCategory = this.question.idCategory;
    combo3.idQuestion = this.question.id;
    combo3.description = this.answer3;

    var combo4 = new CheckBoxOption();
    combo4.id = this.idComboFourth;
    combo4.idCategory = this.question.idCategory;
    combo4.idQuestion = this.question.id;
    combo4.description = this.answer4;

    this.checkBoxOptionDTOList.push(combo1);
    this.checkBoxOptionDTOList.push(combo2);
    this.checkBoxOptionDTOList.push(combo3);
    this.checkBoxOptionDTOList.push(combo4);

    const questionDTO = {
      id: this.question.id,
      idCategory: this.question.idCategory,
      description1: this.question.description1,
      answer: this.question.answer,
      description2: this.question.description2,
      urlFileName: this.file.name,
      checkBoxOptionDTOSet : this.checkBoxOptionDTOList
    };

    this.languageService.create(questionDTO).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });

    this.submitted = true;
    
  }

  getListOfQuestions(): void {
    location.href = "/questions";
  }

  selectFile(event: any) {
    this.file = event.target.files.item(0);
  }

  uploadFromBrowser() {
    this.uploadFileService.uploadFromBrowser(this.file).subscribe({
      next: (data) => {
        this.fileDetails = data;
        this.fileUris.push(this.fileDetails.fileUri);
        alert("File Uploaded Successfully")   
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

}
