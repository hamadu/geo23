const { Point, Vector, Line, Polygon } = require('./dist/index')

console.log(Point)
console.log(new Point(2,3))

const a = new Point(2, 3)
const b = new Point(-4, 6)
const c = new Point(5, -1)
const vec1 = new Vector(a, b)
const vec2 = new Vector(a, c)

console.log(vec1)
console.log(vec2)
console.log(vec1.cross(vec2))
console.log("==")
console.log(Line.make(a, b))

console.log("==")

const line1 = new Line(0, 0, 10, 10)
const line2 = new Line(10, 0, 0, 10)
const line3 = new Line(0, 11, 10, 10.5)

console.log(line1.intersects(line2))
console.log(line1.intersects(line3))

console.log("==")
const poly1 = new Polygon([1,2,3],[4,5,6])
console.log(poly1.points())
console.log("==")
console.log("==")
