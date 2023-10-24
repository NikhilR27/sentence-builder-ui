import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PostSentenceResponse, GetWordsResponse, GetSentencesResponse} from "../models/sentence.models";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private apiUrl = "http://localhost:5242/api"

  constructor(private http: HttpClient) {
  }

  getWords(): Observable<GetWordsResponse> {
    return this.http.get<GetWordsResponse>(`${this.apiUrl}/word`);
  }

  getSentences(): Observable<GetSentencesResponse> {
    return this.http.get<GetSentencesResponse>(`${this.apiUrl}/sentence`)
  }

  postSentence(sentence: string): Observable<PostSentenceResponse> {
    return this.http.post<PostSentenceResponse>(`${this.apiUrl}/sentence`, {
      sentence: sentence
    });
  }
}
