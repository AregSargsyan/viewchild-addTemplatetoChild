import { Component, OnInit, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {

  @Input() templateRef: TemplateRef<any>



}
