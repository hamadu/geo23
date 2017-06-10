import * as mocha from "mocha";
import * as assert from "assert"
import { Line } from "../src/line"
import { Point } from "../src/point"

describe('constructor', function () {
  const line = new Line(0, 10, 20, 30)

  it('from point', function () {
    assert.deepEqual(line.from(), new Point(0, 10))
  })

  it('to point', function () {
    assert.deepEqual(line.to(), new Point(20, 30))
  })
})
