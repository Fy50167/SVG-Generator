const {Triangle, Circle, Square} = require('./shapes.js');

describe('Shapes', () => {  
    it('should return a triangle svg', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.generateShape()).toEqual(
            `<svg width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg' fill = '${shape.shapeColor}'>
        <polygon points="150, 18 244, 182 56, 182"/>
        <text font-size = 'large' x="50%" y ="55%" dominant-baseline="middle" text-anchor="middle" fill = 'undefined'>undefined</text>
        </svg>`
        );
    });

    it('should return a circle svg', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.generateShape()).toEqual(
            `<svg width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg' fill = '${shape.shapeColor}'>
        <circle cx = '150' cy = '100' r = '100'/>
        <text font-size = 'large' x="50%" y ="50%" dominant-baseline="middle" text-anchor="middle" fill = 'undefined'>undefined</text>
        </svg>`
        );
    });

    it('should return a square svg', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.generateShape()).toEqual(
            `<svg width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg' fill = '${shape.shapeColor}'>
        <rect width="200" height="200" x = '50'/>
        <text font-size = 'large' x="50%" y ="50%" dominant-baseline="middle" text-anchor="middle" fill = 'undefined'>undefined</text>
        </svg>`
        );
    })

  });

