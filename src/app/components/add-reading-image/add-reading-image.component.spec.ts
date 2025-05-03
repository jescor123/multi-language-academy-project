import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReadingImageComponent } from './add-reading-image.component';

describe('AddReadingImageComponent', () => {
  let component: AddReadingImageComponent;
  let fixture: ComponentFixture<AddReadingImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReadingImageComponent]
    });
    fixture = TestBed.createComponent(AddReadingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
