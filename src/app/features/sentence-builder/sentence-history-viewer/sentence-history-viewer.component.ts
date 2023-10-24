import {Component, Input} from '@angular/core';

@Component({
  selector: 'sentence-history-viewer',
  templateUrl: './sentence-history-viewer.component.html',
  styleUrls: ['./sentence-history-viewer.component.css']
})
export class SentenceHistoryViewerComponent {
  @Input('sentences') sentences: string[] = []
}
