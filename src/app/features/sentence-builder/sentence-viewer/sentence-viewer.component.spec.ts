import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceViewerComponent } from './sentence-viewer.component';

describe('SentenceViewerComponent', () => {
  let component: SentenceViewerComponent;
  let fixture: ComponentFixture<SentenceViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceViewerComponent]
    });
    fixture = TestBed.createComponent(SentenceViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
