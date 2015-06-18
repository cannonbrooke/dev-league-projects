class Animal {
  private _name: string;
  private _eyes: number;

  constructor(name: string, eyes: number) {
    this._name = name;
    this._eyes = eyes;
  }

  move(meters: number) {
    console.log(this._name + ' moved ' + meters + ' feet');
  }

  get eyes() {
    return this._eyes;
  }

  get name() {
    return this._name;
  }
}

class Spider extends Animal {
  constructor(name: string) {
    super(name, 8);
  }

  spinWeb() {
    console.log(this.name + " used String Shot.");
  }

}

class Bat extends Animal {
  constructor(name: string) {
    super(name, 2);
  }

  move(meters: number) {
    super.move(meters);
    console.log(this.name + ' used Supersonic');
  }
}

var charolette = new Spider('Charolette');
var zubat = new Bat('EEEEK');

zubat.move(10);
charolette.move(5);
charolette.spinWeb();