import {Component, OnInit} from '@angular/core';
import {WordService} from "../../core/services/word.service";
import {GetWordsResponse, WordType} from "../../core/models/sentence.models";

@Component({
  selector: 'app-sentence-builder',
  templateUrl: './sentence-builder.component.html',
  styleUrls: ['./sentence-builder.component.css']
})
export class SentenceBuilderComponent implements OnInit {
  wordsData: WordType[] = [];
  wordTypes: string[] = [];
  currentSentence: string[] = [];
  allSentences: string[] = [];
  dataLoaded: boolean = false;

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
    this.getWords();
  }

  addWord($event: string) {
    this.currentSentence.push($event)
  }

  removeWord(): void {
    this.currentSentence.pop();
  }

  removeAllWords(): void {
    this.currentSentence = [];
  }

  getWords(): void {
    this.wordService.getWords().subscribe((response: GetWordsResponse) => {
        if (response) {
          this.wordsData = response.wordTypes;
          this.wordsData.forEach((wordType: WordType) => {
            this.wordTypes.push(wordType.description);
            this.dataLoaded = true;
          });
        }
      }
    );
  }

  postSentence(): boolean {
    if (this.currentSentence.length == 0) {
      return false;
    }

    this.wordService.postSentence(this.currentSentence.join(' '))
      .subscribe(response => {
        return response.saveSuccessful;
      })
    return false;
  }

  getAllSentences(): void {
    this.wordService.getSentences().subscribe(response => {
      if (response) {
        this.allSentences = response.sentences
      }
    })
  }
}
