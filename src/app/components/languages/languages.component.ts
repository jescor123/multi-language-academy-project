import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  submitted: boolean = false;
  submitted2: boolean = false;
  languages: any = [];
  form: FormGroup;  
  form2: FormGroup;
  answers: any = [];
  score: any;
  ImagePath: any = [];
  dataList: any = [];
  
  constructor(private languageService : LanguageService, private formBuilder : FormBuilder) {    
    this.form = this.formBuilder.group({
      answer1:[''],
      answer2:[''],
      answer3:[''],
      answer4:[''],
      answer5:['']
    }); 
    this.form2 = this.formBuilder.group({
      dropDown1:[''],
      dropDown2:[''],
      dropDown3:[''],
      dropDown4:[''],
      dropDown5:[''],
    }); 
  }

  ngOnInit(): void {
    this.retrieveAllLanguages();  
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
              this.answers[5] = this.languages[0].questionDTOList[10].answer;
              this.answers[6] = this.languages[0].questionDTOList[11].answer;
              this.answers[7] = this.languages[0].questionDTOList[12].answer;
              this.answers[8] = this.languages[0].questionDTOList[13].answer;
              this.answers[9] = this.languages[0].questionDTOList[14].answer;
              this.dataList = this.languages[0].comboBoxOptionDTOList;              
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

  cleanOtherComponents() {
    this.submitted = false;  
  }

  cleanOtherComponents2() {
    this.submitted2 = false;  
  }

  filterComboBoxValues(comboBoxOptionDTOList: any[], idAnswer: any): any[] {
    return comboBoxOptionDTOList.filter(combo => combo.idQuestion == idAnswer);
  }

}
