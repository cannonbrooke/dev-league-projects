var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Animal = (function () {
    function Animal(name, eyes) {
        this._name = name;
        this._eyes = eyes;
    }
    Animal.prototype.move = function (meters) {
        console.log(this._name + ' moved ' + meters + ' feet');
    };
    Object.defineProperty(Animal.prototype, "eyes", {
        get: function () {
            return this._eyes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
})();
var Spider = (function (_super) {
    __extends(Spider, _super);
    function Spider(name) {
        _super.call(this, name, 8);
    }
    Spider.prototype.spinWeb = function () {
        console.log(this.name + " used String Shot.");
    };
    return Spider;
})(Animal);
var Bat = (function (_super) {
    __extends(Bat, _super);
    function Bat(name) {
        _super.call(this, name, 2);
    }
    Bat.prototype.move = function (meters) {
        _super.prototype.move.call(this, meters);
        console.log(this.name + ' used Supersonic');
    };
    return Bat;
})(Animal);
var charolette = new Spider('Charolette');
var zubat = new Bat('EEEEK');
zubat.move(10);
charolette.move(5);
charolette.spinWeb();
