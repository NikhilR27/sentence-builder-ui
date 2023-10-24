import { ComponentFixture, TestBed } from '@angular/core/testing';
import {WordBuilderComponent} from "./word-builder.component";

describe('WordPickerComponent', () => {
  let component: WordBuilderComponent;
  let fixture: ComponentFixture<WordBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordBuilderComponent]
    });
    fixture = TestBed.createComponent(WordBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
