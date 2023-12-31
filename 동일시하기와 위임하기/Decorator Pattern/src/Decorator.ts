import { Coffee } from "./Coffee";

export abstract class Decorator extends Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    super();
    this.coffee = coffee;
  }

  brewing() {
    this.coffee.brewing();
  }
}
