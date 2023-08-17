export default class Shape {
    constructor(text, shapeColor, textColor) {
    this.text = text
    this.shapeColor = shapeColor
    this.textColor = textColor
    }
    render() {}
}

export class Triangle extends Shape {
    constructor(text, shapeColor, textColor, svgCode) {
    super(text, shapeColor, textColor)
    svgCode = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

export class Square extends Shape {
    constructor(text, shapeColor, textColor, svgCode) {
    super(text, shapeColor, textColor)
    svgCode = `<rect x="75" y="20" width="150" height="150" fill="${this.textColor}">`
    }
}

export class Circle extends Shape {
    constructor(text, shapeColor, textColor, svgCode) {
    super(text, shapeColor, textColor)
    svgCode = `<circle cx="150" cy="100" r="80" fill="${this.textColor}" />`
    }
}


let template = `
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="White" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <polygon points="150, 18 244, 182 56, 182" fill="blue" />

  <!-- <rect x="75" y="20" width="150" height="150" fill="orange"> -->

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>

</svg>



`