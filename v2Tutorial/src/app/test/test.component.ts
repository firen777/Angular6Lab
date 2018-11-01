import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p class="text-success">Hello {{name}}</p>
  <p class="text-danger">{{2+2+6}}</p>
  <p [class]="successClass" [class]="specialClass">{{name.toUpperCase}}</p>
  <p [class.text-danger]="hasError">{{name.toUpperCase()}}</p>
  <p [ngClass]="messageClasses">no assignment e.g. a = 2+2 </p>
  <p>no global var e.g. window.location.href</p>
  <p>through component class: {{location}}</p><br>
  <p>
    property binding vs interpolation: interpolation only work on string<br>
    <input type="text" value="Default" [id]="testId"><br>
    cannot un-disable if using interpolation:<br>
    <input type="text" value="Default" [disabled]="inputDisabled"><br>
    alternative syntax<br>
    <input type="text" value="Default" bind-disabled="inputDisabled"><br>
  </p>

  <p><button (click)="incrementClick($event)">Greet</button>{{incrementNum}}</p>
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public name = 'asdfqwerty';
  public location = window.location.href;

  public testId = `someId`;
  public inputDisabled = true;

  //class binding
  public successClass = "text-success";
  public specialClass = "text-special";
  public dangerClass = "text-danger";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }

  //EventBinding
  public incrementNum = 1;
  incrementClick(event){
    this.incrementNum++;
    console.log(event);
    
  }

  constructor() { }

  ngOnInit() {
    
  }

}
