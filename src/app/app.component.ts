import { Component, ViewChild, Renderer2, ElementRef, ViewChildren, QueryList, SimpleChanges, Query, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { debounceTime, startWith, distinctUntilChanged } from 'rxjs/operators'
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  login(){
    alert("login")
  }
  signUp(){
    alert('sighUp')
  }

}
