import { Component } from '@angular/core';
import {AsyncPipe, CommonModule, NgFor} from "@angular/common";
import {Observable, delay, of} from "rxjs";

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule,NgFor,AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.css'
})
export class TemplateControlFlowComponent {
  public isTrue = true;

  public loadingData$: Observable <string[]> = of ([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000))

  public trackByFn(index: number) {
    return index;
  }

}
