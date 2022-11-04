import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public language: string = 'en';
  public showLangModal: boolean = false;

  theme: Theme = 'light-theme';

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.initTheme();
  }

  initTheme() {
    this.renderer.addClass(this.document.body, this.theme)
  }

  swapTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme' ?
        (this.theme = 'dark-theme') :
        (this.theme = 'light-theme')
    );
  }


  changeLanguage(key: string) {
    this.language = key;
    this.translate.use(key);
  }

  openLanguageModal() {
    this.showLangModal = !this.showLangModal;
  }

}

export type Theme = 'light-theme' | 'dark-theme';