import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {

  languages: any = [];
  form: FormGroup;  
  comboBoxOptionDTOList: any = [];
  checkBoxOptionDTOList: any = [];
  categoryDTOList: any = [];
  
  constructor(private languageService : LanguageService, private formBuilder : FormBuilder) {    
    this.form = this.formBuilder.group({}); 
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
              this.comboBoxOptionDTOList = resultData[0].comboBoxOptionDTOList;  
              this.checkBoxOptionDTOList = resultData[0].checkBoxOptionDTOList;
              this.categoryDTOList = resultData[0].categoryDTOList;                              
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

  // get ids from combobox tables

  getIdByPosition(idAnswer: any, pos: number): any {
    var arr = this.comboBoxOptionDTOList.filter((combo: { idQuestion: any; }) => combo.idQuestion == idAnswer);
    return arr[pos].id;
  }

  getAnswer(idAnswer: any, pos: number): any {
    var arr = this.comboBoxOptionDTOList.filter((combo: { idQuestion: any; }) => combo.idQuestion == idAnswer);
    return arr[pos].description;
  }

  getIdByPositionCheckBoxOption(idAnswer: any, pos: number): any {
    var arr = this.checkBoxOptionDTOList.filter((combo: { idQuestion: any; }) => combo.idQuestion == idAnswer);
    return arr[pos].id;
  }

  getAnswerCheckBoxOption(idAnswer: any, pos: number): any {
    var arr = this.checkBoxOptionDTOList.filter((combo: { idQuestion: any; }) => combo.idQuestion == idAnswer);
    return arr[pos].description;
  }

  getCategoryDescription(idCategory: any): any {
    var arr = this.categoryDTOList.filter((combo: { id: any; }) => combo.id == idCategory);
    return arr[0].name;
  }

  
 
}
