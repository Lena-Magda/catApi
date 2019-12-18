import { DataService } from './data.service';
import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheckApiKey]'
})
export class CheckApiKeyDirective implements OnInit {
  @Input("appCheckApiKey") appCheckApiKey: any;

  constructor(private authService:DataService,
              private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              ) { }

  private key = localStorage.getItem('apiKey');

  public ngOnInit() {
    //Sprawdźczy czy w local storage jest poprawny klucz
    if (this.key) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      console.log('Jest poprawny klucz')
    } else {
      this.viewContainer.clear();
      console.log('Niepoprawny klucz')
    }

  }
}


