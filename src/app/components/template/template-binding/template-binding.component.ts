import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.css'
})
export class TemplateBindingComponent {
  public name = "Roger";
  public age = 32;
  public isDisable = true;

  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: any) {
    return console.log(event);
  }


  public onMouseMove (event: any) {
    return console.log (event)
  }





}
