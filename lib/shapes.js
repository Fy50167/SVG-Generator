class Shape {
    constructor(letters, textColor, shapeColor) {
        this.letters = letters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {
    constructor(letters, textColor, shapeColor){
        super(letters, textColor, shapeColor);
    }

    generateShape() {
        this.element = `<svg width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg' fill = '${this.shapeColor}'>
        <polygon points="150, 18 244, 182 56, 182"/>
        <text font-size = 'large' x="50%" y ="55%" dominant-baseline="middle" text-anchor="middle" fill = '${this.textColor}'>${this.letters}</text>
        </svg>`;
        return this.element
    }
    
}

module.exports = Triangle;