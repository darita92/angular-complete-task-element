import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CompleteTaskComponent } from './complete-task/complete-task.component';

@NgModule({
  declarations: [
    CompleteTaskComponent
  ],
  entryComponents: [
    CompleteTaskComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  //bootstrap: [CompleteTaskComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(CompleteTaskComponent, { injector: this.injector });
    customElements.define('complete-task', el);
  }
  ngDoBootstrap() {}
}
