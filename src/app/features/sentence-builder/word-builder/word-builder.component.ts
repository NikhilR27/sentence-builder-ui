import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WordType} from "../../../core/models/sentence.models";

@Component({
  selector: 'word-builder',
  templateUrl: './word-builder.component.html',
  styleUrls: ['./word-builder.component.css']
})
export class WordBuilderComponent implements OnInit {
  @Input('wordTypes') wordTypes: string[] = []
  @Input('words') words: WordType[] = [];

  @Output() addedWordEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeWordEvent: EventEmitter<any> = new EventEmitter();
  @Output() removeAllWordsEvent: EventEmitter<any> = new EventEmitter();
  @Output() postSentence: EventEmitter<any> = new EventEmitter();

  filteredWords: string[] = [];
  selectedWord: string = '';

  ngOnInit(): void {
    // Use the first type as the default
    this.filteredWords = this.filterWords(this.wordTypes[0]);
    this.selectedWord = this.filteredWords[0];
  }

  onWordTypeSelected($event: Event) {
    const selectedType = ($event.target as HTMLInputElement).value;
    this.filteredWords = this.filterWords(selectedType);
    this.selectedWord = this.filteredWords[0];
  }

  private filterWords(selectedType: string) {
    const filteredWordTypes = this.words.find(word => word.description === selectedType);
    return filteredWordTypes ? filteredWordTypes.words : [];
  }

  private emitAddWordEvent(word: string) {
    this.addedWordEvent.emit(word);
  }

  addWord(): void {
    this.emitAddWordEvent(this.selectedWord)
  }

  removeWord(): void {
    this.removeWordEvent.emit();
  }

  removeAllWords(): void {
    this.removeAllWordsEvent.emit();
  }

  postWord(): void {
    this.postSentence.emit()
  }
}
