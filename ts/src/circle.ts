import { Point } from './point';

export class Circle {
  public x: number;
  public y: number;
  public r: number;

  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  public area(): number {
    return this.r * this.r * Math.PI;
  }

  public static make(p1: Point, r: number): Circle {
    return new Circle(p1.x, p1.y, r);
  }
}
