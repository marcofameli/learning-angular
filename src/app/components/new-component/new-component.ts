import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.html',
  styleUrl: './new-component.scss'
})
export class NewComponent {
  public name = "Rogerinho";
}
