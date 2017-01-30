import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GiphyComponent } from './giphy/giphy.component';
import { GiphyService } from './giphy/giphy.service';
import { GiphySearchModule } from './giphy/giphy-search/giphy-search.module';
import { AppWelcomeModule } from './app-welcome/app-welcome.module';
import { FormsModule } from '@angular/forms';
import { GiphySearchAutoModule } from './giphy/giphy-search/giphy-search-auto/giphy-search-auto.module';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppWelcomeModule,
    GiphySearchModule,
    GiphySearchAutoModule,
    AppRoutingModule,
  ],
  providers: [ GiphyService ],
  exports: [ FormsModule ],

  bootstrap: [ AppComponent ]
})
export class AppModule {
}
