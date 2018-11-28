class Animal {
    constructor(name) {
        this.name = name;
        this.type = "动物";
    }

    says(say) {
        console.log(this.type + "[" + this.name + "]" + "说" + say);
    }
}

let dog = new Animal("狗狗");
dog.says("汪汪汪");

class Bird extends Animal{
    constructor(name) {
        super(name);
        this.type = "小鸟";
    }
}

let pig = new Bird("鸽子");
pig.says("我是一只小鸟");