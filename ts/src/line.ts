import { Point } from './point';
import { Vector } from './vector';

export class Line {
  public x1: number;
  public y1: number;
  public x2: number;
  public y2: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  public from(): Point {
    return new Point(this.x1, this.y1);
  }

  public to(): Point {
    return new Point(this.x2, this.y2);
  }

  public vector(): Vector {
    return new Vector(this.from(), this.to());
  }

  public crossPosition(p: Point): number {
    return this.vector().cross(new Vector(this.from(), p));
  }

  public intersects(another: Line): boolean {
    const one = this.crossPosition(another.from()) * this.crossPosition(another.to());
    const two = another.crossPosition(this.from()) * another.crossPosition(this.to());

    return one < 0 && two < 0;
  }

  public static make(p1: Point, p2: Point): Line {
    return new Line(p1.x, p1.y, p2.x, p2.y);
  }
}
