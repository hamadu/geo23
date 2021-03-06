import * as mocha from "mocha";
import * as assert from "assert"
import { Line } from "../src/line"
import { Point } from "../src/point"
import { Vector } from "../src/vector"

describe('from/to point', () => {
  const line = new Line(0, 10, 20, 30)

  it('from point', () => {
    assert.deepEqual(line.from(), new Point(0, 10))
  })

  it('to point', () => {
    assert.deepEqual(line.to(), new Point(20, 30))
  })
})

describe('make line from two points', () => {
  const line = Line.make(new Point(0, 10), new Point(20, 30))

  it('point', () => {
    assert.equal(line.x1, 0)
    assert.equal(line.y1, 10)
    assert.equal(line.x2, 20)
    assert.equal(line.y2, 30)
  })
})

describe('make vector', () => {
  const line = new Line(0, 10, -20, 40)

  it('vector', () => {
    assert.deepEqual(line.vector(), { dx: -20, dy: 30 })
  })
})

describe('examine intersects', () => {
  const line0   = new Line(0, 0, 100, 100)
  const line00  = new Line(110, 110, 200, 200)
  const line000 = new Line(100, 100, 110, 110)
  const line1  = new Line(0, 100, 100, 0)
  const line11 = new Line(0, 100, 49, 51)

  it('cross line', () => {
    assert.equal(line0.intersects(line1), true)
    assert.equal(line1.intersects(line0), true)
  })

  it('overlapping line', () => {
    assert.equal(line1.intersects(line11), true)
    assert.equal(line11.intersects(line1), true)
  })

  it('no cross line', () => {
    assert.equal(line0.intersects(line11), false)
    assert.equal(line11.intersects(line0), false)
  })

  it('parallel lines', () => {
    assert.equal(line0.intersects(line00), false)
    assert.equal(line00.intersects(line0), false)
  })

  it('exactly touching', () => {
    assert.equal(line0.intersects(line000), false)
    assert.equal(line000.intersects(line0), false)
  })
})
