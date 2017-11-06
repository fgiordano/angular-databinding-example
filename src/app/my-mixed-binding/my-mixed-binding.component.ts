import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-mixed-binding',
  templateUrl: './my-mixed-binding.component.html',
  styleUrls: ['./my-mixed-binding.component.css']
})


  export class MyMixedBindingComponent {
      isInputDisabled: boolean = false;

      onKey(value) {
              console.log(`Input value: ${value}`);
          }

      toggleInput() {
          this.isInputDisabled = !this.isInputDisabled;
      }
  }
