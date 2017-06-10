import { Point } from './point';
import { Line } from './line';
import { Vector } from './vector';

export class Polygon {
  public x: number[];
  public y: number[];

  constructor(x: number[], y: number[]) {
    this.x = x;
    this.y = y;
  }

  public area(): number {
    const n = this.x.length;
    if (n <= 2) {
      return 0;
    }
    const points = this.points();
    let area = Polygon.triangleArea(points[0], points[1], points[2]);
    for (let x = 3 ; x < n ; x++) {
      area += Polygon.triangleArea(points[0], points[x-1], points[x]);
    }
    return area;
  }

  public points(): Point[] {
    const n = this.x.length;
    return this.x.map((x, idx) => new Point(x, this.y[idx]));
  }

  public lines(): Line[] {
    const n = this.x.length;
    const points = this.points();
    let lines: Line[] = [];
    for (var i = 0 ; i < n ; i++) {
      lines.push(Line.make(points[i], points[(i+1)%n]));
    }
    return lines;
  }

  public static triangleArea(p1: Point, p2: Point, p3: Point): number {
    const v1 = new Vector(p1, p2);
    const v2 = new Vector(p1, p3);
    return Math.abs(v1.cross(v2)) * 0.5;
  }
}
