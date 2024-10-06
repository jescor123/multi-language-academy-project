import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComboBoxOption } from 'src/app/models/combo-box-option.model';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  question: Question = {
    id: 0,
    idCategory: 0,
    description1: '',
    answer: '',
    description2: ''
  }; 
  submitted = false;
  comboBoxOptionDTOList: any = [];  
  answer2?: string;
  answer3?: string;
  idComboFirst?: any; 
  idComboSecond?: any; 
  idComboThird?: any;
  
  constructor(private languageService: LanguageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((paramMap) => {
      this.question.id = paramMap.get('id');
      this.question.idCategory = paramMap.get('idCategory');
      this.question.description1 = paramMap.get('description1') ?? '';
      this.question.answer = paramMap.get('answer') ?? '';
      this.question.description2 = paramMap.get('description2') ?? '';
      this.answer2 = paramMap.get('answer2') ?? '';      
      this.answer3 = paramMap.get('answer3') ?? '';    
      this.idComboFirst = paramMap.get('idComboFirst') ?? 0;
      this.idComboSecond = paramMap.get('idComboSecond') ?? 0;
      this.idComboThird = paramMap.get('idComboThird') ?? 0;
    });    
  }

  saveQuestion(): void {

    var combo1 = new ComboBoxOption();
    combo1.id = this.idComboFirst;
    combo1.idCategory = this.question.idCategory;
    combo1.idQuestion = this.question.id;
    combo1.description = this.question.answer;

    var combo2 = new ComboBoxOption();
    combo2.id = this.idComboSecond;
    combo2.idCategory = this.question.idCategory;
    combo2.idQuestion = this.question.id;
    combo2.description = this.answer2;
    
    var combo3 = new ComboBoxOption();
    combo3.id = this.idComboThird;
    combo3.idCategory = this.question.idCategory;
    combo3.idQuestion = this.question.id;
    combo3.description = this.answer3;

    this.comboBoxOptionDTOList.push(combo1);
    this.comboBoxOptionDTOList.push(combo2);
    this.comboBoxOptionDTOList.push(combo3);
    
    const questionDTO = {
      id: this.question.id,
      idCategory: this.question.idCategory,
      description1: this.question.description1,
      answer: this.question.answer,
      description2: this.question.description2,
      comboBoxOptionDTOSet : this.comboBoxOptionDTOList
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
  
}
