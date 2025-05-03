import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  submitted: boolean = false;
  submitted2: boolean = false;
  submitted3: boolean = false;
  languages: any = [];
  form: FormGroup;  
  form2: FormGroup;
  form3: FormGroup;
  answers: any = [];
  score: any;
  ImagePath: any = [];
  dataList: any = [];
  radioButtonValuesList: any = [];
  fileInfos?: Observable<any>;
  
  constructor(private languageService : LanguageService, private formBuilder : FormBuilder,
     private uploadFileService: UploadFileService) {    
    this.form = this.formBuilder.group({
      answer1:[''],
      answer2:[''],
      answer3:[''],
      answer4:[''],
      answer5:[''],
      answer6:[''],
      answer7:[''],
      answer8:[''],
      answer9:[''],
      answer10:['']
    }); 
    this.form2 = this.formBuilder.group({
      dropDown1:[''],
      dropDown2:[''],
      dropDown3:[''],
      dropDown4:[''],
      dropDown5:[''],
    }); 
    this.form3 = this.formBuilder.group({
      option1:[''],
      option2:[''],
      option3:[''],
      option4:[''],
      option5:['']
    });
  }

  ngOnInit(): void {
    this.retrieveAllLanguages();  
    this.fileInfos = this.uploadFileService.getFiles();  
  }

  async retrieveAllLanguages() {
    this.languageService.getAll().subscribe((data : any) => 
      {
        if (data != null && data.body != null) {
           var resultData = data.body;
           if (resultData) {
              console.log(resultData);
              this.languages = resultData;

              this.answers[0] = this.languages[0].questionDTOList[0].answer;
              this.answers[1] = this.languages[0].questionDTOList[1].answer;
              this.answers[2] = this.languages[0].questionDTOList[2].answer;
              this.answers[3] = this.languages[0].questionDTOList[3].answer;
              this.answers[4] = this.languages[0].questionDTOList[4].answer;  

              this.answers[5] = this.languages[0].questionDTOList[5].answer;
              this.answers[6] = this.languages[0].questionDTOList[6].answer;
              this.answers[7] = this.languages[0].questionDTOList[7].answer;
              this.answers[8] = this.languages[0].questionDTOList[8].answer;
              this.answers[9] = this.languages[0].questionDTOList[9].answer;
              
              this.answers[10] = this.languages[0].questionDTOList[15].answer;
              this.answers[11] = this.languages[0].questionDTOList[16].answer;
              this.answers[12] = this.languages[0].questionDTOList[17].answer;
              this.answers[13] = this.languages[0].questionDTOList[18].answer;
              this.answers[14] = this.languages[0].questionDTOList[19].answer;

              this.dataList = this.languages[0].comboBoxOptionDTOList;        
              this.radioButtonValuesList = this.languages[0].checkBoxOptionDTOList;     
               
           }
         }
      },
      (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
               this.languages = [];
             }
          }
        }
      });
  }

  submitForm() {
    let counter = 0;
    this.submitted = true;
    this.score = 0;
    /* do some logig here to evaluate answers */
    const staments = this.form.getRawValue();    
    if (staments.answer1.toLowerCase() == this.answers[0].toLowerCase() && staments.answer1 != "") {
        this.ImagePath[0] = '/assets/images/right.jpg';
        counter += 2;
    } else {
        this.ImagePath[0] = '/assets/images/wrong.jpg';
    }
    if (staments.answer2.toLowerCase() == this.answers[1].toLowerCase() && staments.answer2 != "") {
      this.ImagePath[1] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[1] = '/assets/images/wrong.jpg';
    }
    if (staments.answer3.toLowerCase() == this.answers[2].toLowerCase() && staments.answer3 != "") {
      this.ImagePath[2] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[2] = '/assets/images/wrong.jpg';
    }
    if (staments.answer4.toLowerCase() == this.answers[3].toLowerCase() && staments.answer4 != "") {
      this.ImagePath[3] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[3] = '/assets/images/wrong.jpg';
    }
    if (staments.answer5.toLowerCase() == this.answers[4].toLowerCase() && staments.answer5 != "") {
      this.ImagePath[4] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[4] = '/assets/images/wrong.jpg';
    }           
    if (staments.answer6.toLowerCase() == this.answers[5].toLowerCase() && staments.answer6 != "") {
      this.ImagePath[10] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[10] = '/assets/images/wrong.jpg';
    }
    if (staments.answer7.toLowerCase() == this.answers[6].toLowerCase() && staments.answer7 != "") {
      this.ImagePath[11] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[11] = '/assets/images/wrong.jpg';
    }
    if (staments.answer8.toLowerCase() == this.answers[7].toLowerCase() && staments.answer8 != "") {
      this.ImagePath[12] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[12] = '/assets/images/wrong.jpg';
    }
    if (staments.answer9.toLowerCase() == this.answers[8].toLowerCase() && staments.answer9 != "") {
      this.ImagePath[13] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[13] = '/assets/images/wrong.jpg';
    }
    if (staments.answer10.toLowerCase() == this.answers[9].toLowerCase() && staments.answer10 != "") {
      this.ImagePath[14] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[14] = '/assets/images/wrong.jpg';
    }
    this.score = counter;    
  }  

  submitForm2() {
    let counter = 0;
    this.submitted2 = true;
    this.score = 0;
    /* do some logig here to evaluate answers */
    const staments = this.form2.getRawValue();    
    if (staments.dropDown1.toLowerCase() == this.answers[5].toLowerCase()) {
        this.ImagePath[5] = '/assets/images/right.jpg';
        counter += 2;
    } else {
        this.ImagePath[5] = '/assets/images/wrong.jpg';
    }  
    if (staments.dropDown2.toLowerCase() == this.answers[6].toLowerCase()) {
      this.ImagePath[6] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[6] = '/assets/images/wrong.jpg';
    }  
    if (staments.dropDown3.toLowerCase() == this.answers[7].toLowerCase()) {
      this.ImagePath[7] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[7] = '/assets/images/wrong.jpg';
    } 
    if (staments.dropDown4.toLowerCase() == this.answers[8].toLowerCase()) {
      this.ImagePath[8] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[8] = '/assets/images/wrong.jpg';
    }
    if (staments.dropDown5.toLowerCase() == this.answers[9].toLowerCase()) {
      this.ImagePath[9] = '/assets/images/right.jpg';
      counter += 2;
    } else {
      this.ImagePath[9] = '/assets/images/wrong.jpg';
    }        
    this.score = counter;    
  }  


  submitForm3() {
    let counter = 0;
    this.submitted3 = true;
    this.score = 0;
    /* do some logig here to evaluate answers */
    const staments = this.form3.getRawValue(); 
    if (staments.option1.toLowerCase() == this.answers[10].toLowerCase()) {
      this.ImagePath[10] = '/assets/images/right.jpg';
      counter += 2;
    } else { 
      this.ImagePath[10] = '/assets/images/wrong.jpg';
    }  
    if (staments.option2.toLowerCase() == this.answers[11].toLowerCase()) {
      this.ImagePath[11] = '/assets/images/right.jpg';
    counter += 2;
    } else {
      this.ImagePath[11] = '/assets/images/wrong.jpg';
    }  
    if (staments.option3.toLowerCase() == this.answers[12].toLowerCase()) {
      this.ImagePath[12] = '/assets/images/right.jpg';
    counter += 2;
    } else {
      this.ImagePath[12] = '/assets/images/wrong.jpg';
    }
    if (staments.option4.toLowerCase() == this.answers[13].toLowerCase()) {
      this.ImagePath[13] = '/assets/images/right.jpg';
    counter += 2;
    } else {
      this.ImagePath[13] = '/assets/images/wrong.jpg';
    }
    if (staments.option5.toLowerCase() == this.answers[14].toLowerCase()) {
      this.ImagePath[14] = '/assets/images/right.jpg';
    counter += 2;
    } else {
      this.ImagePath[14] = '/assets/images/wrong.jpg';
    }
    this.score = counter;
  }

  cleanOtherComponents() {
    this.submitted = false;  
  }

  cleanOtherComponents2() {
    this.submitted2 = false;  
  }

  cleanOtherComponents3() {
    this.submitted3 = false;  
  }

  filterComboBoxValues(comboBoxOptionDTOList: any[], idAnswer: any): any[] {
    return comboBoxOptionDTOList.filter(combo => combo.idQuestion == idAnswer);
  }

  filterRadioButtonValues(radioButtonValuesList: any[], id: any): any[] {
    return radioButtonValuesList.filter(radio => radio.idQuestion == id);
  }

  radioChangeHandler(event: any) {

  }

}
