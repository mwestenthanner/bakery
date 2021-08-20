import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeaserComponent } from './teaser/teaser.component';
import { FiltersComponent } from './filters/filters.component';
import { ListComponent } from './list/list.component';
import { TeaserItemComponent } from './teaser/teaser-item/teaser-item.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeaserComponent,
    FiltersComponent,
    ListComponent,
    TeaserItemComponent,
    ListItemComponent,
    FooterComponent,
    DetailsComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
