class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea()
    {
        return this.width*this.height;
    }
}

const rectangle1 = new Rectangle(4, 5);
console.log(rectangle1.getArea()); 