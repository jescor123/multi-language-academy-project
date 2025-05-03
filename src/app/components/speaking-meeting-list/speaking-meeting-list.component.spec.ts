import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingMeetingListComponent } from './speaking-meeting-list.component';

describe('SpeakingMeetingListComponent', () => {
  let component: SpeakingMeetingListComponent;
  let fixture: ComponentFixture<SpeakingMeetingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakingMeetingListComponent]
    });
    fixture = TestBed.createComponent(SpeakingMeetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
