import * as mocha from "mocha";
import * as assert from "assert"
import { Polygon } from "../src/polygon"
import { Point } from "../src/point"
import { Line } from "../src/line"

describe('constructor', () => {
  const polygon = new Polygon([0, 20, 0], [0, 0, 20])

  it('has 3 points', () => {
    assert.deepEqual(polygon.points(), [
      new Point(0, 0),
      new Point(20, 0),
      new Point(0, 20)
    ])
  })

  it('has 3 lines', () => {
    assert.deepEqual(polygon.lines(), [
      new Line(0, 0, 20, 0),
      new Line(20, 0, 0, 20),
      new Line(0, 20, 0, 0)
    ])
  })
})

describe('area', () => {
  it('point area', () => {
    assert.equal(new Polygon([0], [100]).area(), 0)
  })

  it('line area', () => {
    assert.equal(new Polygon([0, 100], [100, 200]).area(), 0)
  })

  it('triangle area', () => {
    const triangle = new Polygon([25, -10, 10], [20, -10, -20])
    assert.equal(triangle.area(), 475)

    const pts = triangle.points()
    assert.equal(Polygon.triangleArea(pts[0], pts[1], pts[2]), 475)
  })

  it('pentagon area', () => {
    const pentagon = new Polygon([0, 30, 35, 25, -10], [0, 0, 10, 40, 10])
    assert.equal(pentagon.area(), 1050)
  })
})
