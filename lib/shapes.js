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

    setColor(color) {
        this.shapeColor = color;
    }

    generateShape() {
        this.element = `<svg width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg' fill = '${this.shapeColor}'>
        <polygon points="150, 18 244, 182 56, 182"/>
        <text font-size = 'large' x="50%" y ="55%" dominant-baseline="middle" text-anchor="middle" fill = '${this.textColor}'>${this.letters}</text>
        </svg>`;
        return this.element
    }
    
}

class Circle extends Shape {
    constructor(letters, textColor, shapeColor) {
        super(letters, textColor, shapeColor);
    }

    setColor(color) {
        this.shapeColor = color;
    }

    generateShape() {
        this.element = `<svg width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg' fill = '${this.shapeColor}'>
        <circle cx = '150' cy = '100' r = '100'/>
        <text font-size = 'large' x="50%" y ="50%" dominant-baseline="middle" text-anchor="middle" fill = '${this.textColor}'>${this.letters}</text>
        </svg>`;
        return this.element
    }
}

class Square extends Shape {
    constructor(letters, textColor, shapeColor) {
        super(letters, textColor, shapeColor);
    }

    setColor(color) {
        this.shapeColor = color;
    }

    generateShape() {
        this.element = `<svg width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg' fill = '${this.shapeColor}'>
        <rect width="200" height="200" x = '50'/>
        <text font-size = 'large' x="50%" y ="50%" dominant-baseline="middle" text-anchor="middle" fill = '${this.textColor}'>${this.letters}</text>
        </svg>`;
        return this.element
    }
}

module.exports = {Triangle, Circle, Square};