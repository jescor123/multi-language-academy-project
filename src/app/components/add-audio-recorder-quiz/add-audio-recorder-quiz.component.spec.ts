import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAudioRecorderQuizComponent } from './add-audio-recorder-quiz.component';

describe('AddAudioRecorderQuizComponent', () => {
  let component: AddAudioRecorderQuizComponent;
  let fixture: ComponentFixture<AddAudioRecorderQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAudioRecorderQuizComponent]
    });
    fixture = TestBed.createComponent(AddAudioRecorderQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
