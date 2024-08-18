export class Circle {
    name;
    area;
    radius;
    calculateArea() {
        throw new Error("Method not valid");
    }
    constructor(name, area, radius) {
        this.name = name;
        this.area = area;
        this.radius = radius;
    }
}
