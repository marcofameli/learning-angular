import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
// Componentes
import {NewComponent} from "./components/new-component/new-component";
import {TemplateBindingComponent} from "./components/template/template-binding/template-binding.component";
import {TemplateVariablesComponent} from "./components/template/template-variables/template-variables.component";
import {
  TemplateControlFlowComponent
} from "./components/template/template-control-flow/template-control-flow.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NewComponent, TemplateBindingComponent,
    TemplateVariablesComponent, TemplateControlFlowComponent],
  template:
    `<!--'<router-outlet></router-outlet>' -->\
    <h1>Curso de Angular</h1>
<!--    <app-new-component/>-->
<!--    <app-template-binding/>-->
<!--    <app-template-variables/>-->
    <app-template-control-flow/>
  `
})
export class AppComponent {
  title = 'angular1';
}

