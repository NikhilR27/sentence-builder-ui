import {Component, Input} from '@angular/core';

@Component({
  selector: 'sentence-viewer',
  templateUrl: './sentence-viewer.component.html',
  styleUrls: ['./sentence-viewer.component.css']
})
export class SentenceViewerComponent {
  @Input('currentSentence') currentSentence: string[] = [];
}
