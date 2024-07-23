import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const iconDictionary: { [key: string]: string } = {
  github: 'github-mark.svg',
  pl: 'pl.svg',
  gb: 'gb.svg',
};

@NgModule({ 
  declarations: [],
  imports: [CommonModule],
  providers: [provideHttpClient(withInterceptorsFromDi())] 
})
export class IconSvgModuleModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    for (const key in iconDictionary) {
      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `../assets/icons/${iconDictionary[key]}`
        )
      );
    }
  }
}
