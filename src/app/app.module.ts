import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
import { MainComponent } from './views/main/main.component';
import { TagComponent } from './views/tag/tag.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'recipes', component: ListComponent },
  { path: 'recipes/:title', component: DetailsComponent },
  { path: 'tags/:tag', component: TagComponent },
]

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
    DropdownDirective,
    MainComponent,
    TagComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
