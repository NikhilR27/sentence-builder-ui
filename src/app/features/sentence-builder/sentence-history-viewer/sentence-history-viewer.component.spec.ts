import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceHistoryViewerComponent } from './sentence-history-viewer.component';

describe('SentenceHistoryViewerComponent', () => {
  let component: SentenceHistoryViewerComponent;
  let fixture: ComponentFixture<SentenceHistoryViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceHistoryViewerComponent]
    });
    fixture = TestBed.createComponent(SentenceHistoryViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
