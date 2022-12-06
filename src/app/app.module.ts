import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipe } from './pipes/safePipe.pipe';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterTitleComponent } from './components/router-title/router-title.component';
import { AboutComponent } from './pages/about/about.component';
import { CheatsheetComponent } from './pages/cheatsheet/cheatsheet.component';
import { CursedComponent } from './pages/cursed/cursed.component';
import { GhostItemComponent } from './pages/ghost-item/ghost-item.component';
import { GhostsComponent } from './pages/ghosts/ghosts.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheatsheetComponent,
    CursedComponent,
    AboutComponent,
    RouterTitleComponent,
    GhostsComponent,
    GhostItemComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
