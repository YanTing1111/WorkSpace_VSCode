function Parent(name) {
    this.name = name;
}
let p = new Parent("yy");
console.log(Parent.prototype);
console.log(p.__proto__);
console.log(p.__proto__ == Parent.prototype);
console.log(Parent.__proto__);