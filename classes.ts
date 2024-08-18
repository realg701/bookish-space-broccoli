import { Shape } from "./interfaces.js";

export class Circle implements Shape {
  name: string;
  area: number;
  radius: number;
  calculateArea(): void {
    throw new Error("Method not valid");
  }

  constructor(name: string, area: number, radius: number) {
    this.name = name;
    this.area = area;
    this.radius = radius;
  }
}
