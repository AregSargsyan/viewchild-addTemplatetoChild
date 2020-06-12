import { Component, OnInit, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { Comp3Component } from '../comp3/comp3.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() templateRef: TemplateRef<any>


  components = [Comp1Component, Comp2Component, Comp3Component];
  currentComponent = null;

  render() {
    let zro = 0;
    let mek = 0;
    let erku = 0;
    for (let i = 0; i < 10000000; i++) {
      let random = this.randomIntFromInterval(0, 2)
      this.currentComponent = this.components[random]
      if (random == 0) {
        zro++
      }
      else if (random == 1) {
        mek++
      }
      else erku++
    }

    console.log("zro  :  " + zro*100/10000000)
    console.log("mek  :  " + mek*100/10000000)
    console.log("erku  :  " + erku*100/10000000)

  }

  private randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



}
