import { Point } from './point';
import { Vector } from './vector';

export class Rect {
  public x1: number;
  public y1: number;
  public x2: number;
  public y2: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = Math.min(x1, x2);
    this.y1 = Math.min(y1, y2);
    this.x2 = Math.max(x1, x2);
    this.y2 = Math.max(y1, y2);
  }

  public topLeft(): Point {
    return new Point(this.x1, this.y1);
  }

  public bottomRight(): Point {
    return new Point(this.x2, this.y2);
  }

  public width(): number {
    return this.x2 - this.x1;
  }

  public height(): number {
    return this.y2 - this.y1;
  }

  public area(): number {
    return this.width() * this.height();
  }

  public static make(p1: Point, p2: Point): Rect {
    return new Rect(p1.x, p1.y, p2.x, p2.y);
  }
}
