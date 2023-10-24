import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SentenceBuilderComponent} from './features/sentence-builder/sentence-builder.component';
import {SentenceViewerComponent} from './features/sentence-builder/sentence-viewer/sentence-viewer.component';
import {FormsModule} from "@angular/forms";
import {WordBuilderComponent} from "./features/sentence-builder/word-builder/word-builder.component";

@NgModule({
  declarations: [
    AppComponent,
    SentenceBuilderComponent,
    SentenceViewerComponent,
    WordBuilderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
