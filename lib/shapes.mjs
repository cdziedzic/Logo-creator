export default class Shape {
    constructor(text, shapeColor, textColor) {
    this.text = text
    this.shapeColor = shapeColor
    this.textColor = textColor
    }
    render() {
        
    }
}

export class Triangle extends Shape {
    constructor(text, shapeColor, textColor, svgCode) {
    super(text, shapeColor, textColor)
    this.svgCode = ""
    
    // svgCode = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

export class Square extends Shape {
    constructor(text, shapeColor, textColor, svgCode) {
    super(text, shapeColor, textColor)
    this.svgCode = ''
    
    }
}

export class Circle extends Shape {
    constructor(text, shapeColor, textColor, svgCode) {
    super(text, shapeColor, textColor)
    this.svgCode = ''
    // svgCode = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}
