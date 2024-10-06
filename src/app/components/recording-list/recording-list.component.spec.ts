import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingListComponent } from './recording-list.component';

describe('RecordingListComponent', () => {
  let component: RecordingListComponent;
  let fixture: ComponentFixture<RecordingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordingListComponent]
    });
    fixture = TestBed.createComponent(RecordingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
