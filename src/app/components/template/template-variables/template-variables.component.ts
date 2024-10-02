import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {NewComponent} from "../../new-component/new-component";

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.css'
})
export class TemplateVariablesComponent implements AfterViewInit {

  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;

  @ViewChild(NewComponent) public childComponent!: NewComponent;
  ngAfterViewInit() {
    console.log(this.nameInput.nativeElement.value)
    console.log(this.nameH2.nativeElement.innerText)
    console.log(this.childComponent.name)
 }

}
