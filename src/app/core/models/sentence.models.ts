export interface WordType {
  description: string;
  words: string[];
}

export interface GetWordsResponse {
  wordTypes: WordType[];
}

export interface GetSentencesResponse {
  sentences: string[];
}

export interface PostSentenceResponse {
  saveSuccessful: boolean;
}

