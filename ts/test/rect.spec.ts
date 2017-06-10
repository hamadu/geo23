import * as mocha from "mocha";
import * as assert from "assert"
import { Rect } from "../src/rect"
import { Point } from "../src/point"
import { Vector } from "../src/vector"

describe('constructor', () => {
  const rect = new Rect(0, 10, 20, 30)

  it('topLeft point', () => {
    assert.deepEqual(rect.topLeft(), new Point(0, 10))
  })

  it('bottomRight point', () => {
    assert.deepEqual(rect.bottomRight(), new Point(20, 30))
  })
})

describe('make rect from two points', () => {
  const line = Rect.make(new Point(30, 0), new Point(10, 20))

  it('point', () => {
    assert.equal(line.x1, 10)
    assert.equal(line.y1, 0)
    assert.equal(line.x2, 30)
    assert.equal(line.y2, 20)
  })
})

describe('area', () => {
  const rect = new Rect(0, 10, -3, 30)

  it('computes area', () => {
    assert.equal(rect.area(), 60)
  })
})
