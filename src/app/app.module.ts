import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeaserComponent } from './teaser/teaser.component';
import { FiltersComponent } from './filters/filters.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeaserComponent,
    FiltersComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
