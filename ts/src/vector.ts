import { Point } from './point';

export class Vector {
  public dx: number;
  public dy: number;

  constructor(from: Point, to: Point) {
   this.dx = to.x - from.x;
   this.dy = to.y - from.y;
  }

  public cross(another: Vector): number {
    return this.dx * another.dy - this.dy * another.dx;
  }

  public dot(another: Vector): number {
    return this.dx * another.dx + this.dy * another.dy;
  }
}
