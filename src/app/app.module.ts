import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RecordingListComponent } from './components/recording-list/recording-list.component';
import { AudioRecorderComponent } from './components/audio-recorder/audio-recorder.component';
import { AddAudioRecorderQuizComponent } from './components/add-audio-recorder-quiz/add-audio-recorder-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    AddQuestionComponent,
    QuestionListComponent,
    NavbarComponent,
    HomeComponent,
    RecordingListComponent,
    AudioRecorderComponent,
    AddAudioRecorderQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
