import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagesComponent } from './components/languages/languages.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { HomeComponent } from './components/home/home.component';
import { RecordingListComponent } from './components/recording-list/recording-list.component';
import { AudioRecorderComponent } from './components/audio-recorder/audio-recorder.component';
import { AddAudioRecorderQuizComponent } from './components/add-audio-recorder-quiz/add-audio-recorder-quiz.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { AddReadingImageComponent } from './components/add-reading-image/add-reading-image.component';
import { SpeakingMeetingListComponent } from './components/speaking-meeting-list/speaking-meeting-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'addQuestion', component: AddQuestionComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'recordings', component: RecordingListComponent },
  { path: 'recordAudio', component: AudioRecorderComponent },
  { path: 'addRecordAudioQuiz', component: AddAudioRecorderQuizComponent },
  { path: 'addReadingImage', component: AddReadingImageComponent },  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'signup', component: SignupComponent, data: { animation: 'signup' } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'speakingClubMeetings', component: SpeakingMeetingListComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
