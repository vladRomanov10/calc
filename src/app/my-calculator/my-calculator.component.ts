import { Component } from '@angular/core';

interface CalcGroup {
  first: CalcVar
  second: CalcVar
  operation: CalcOperations
}

interface CalcVar {
  value: number
  modificator: CalcModifiers
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/'
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cas = 'cas',
  square = 'square'
}

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.css'
})
export class MyCalculatorComponent {
  public calcOperations = CalcOperations

  public calcModifiers = CalcModifiers

  public result?: number

  public calc() {
    switch (this.operation) {
      case '+':
        this.result = this.first + this.second
        break

      case '-':
        this.result = this.first - this.second
        break

      case '*':
        this.result = this.first * this.second
        break

      case '/':
        this.result = this.first / this.second
        break
    }
  }

}
