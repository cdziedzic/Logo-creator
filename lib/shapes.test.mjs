import Triangle from './shapes.mjs'
import Circle from './shapes.mjs'
import Square from './shapes.mjs'

describe('initialize triangle color', () => {
    it('should render the Triangle with the proper color', () => {
        const shapeColor = 'blue'; 
        const text = 'Some text';
        const textColor = 'white'; 

        const logo = new Triangle (text, shapeColor, textColor, `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`);
        expect(logo.shapeColor).toBe(shapeColor);
    });
});

describe('initialize triangle color', () => {
    it('should render the Square with the proper color', () => {
    const shapeColor = 'blue'; 
    const text = 'CPD'; 
    const textColor = 'white';

    const logo = new Square (text, shapeColor, textColor, `<rect x="75" y="27" width="150" height="150" fill="${shapeColor}" />`);
    expect(logo.shapeColor).toBe(shapeColor);
});
});


describe('initialize triangle color', () => {
    it('should render the Triangle with the proper color', () => {
        const shapeColor = 'blue';
        const text = 'Some text'; 
        const textColor = 'white'; 

        const logo = new Circle (text, shapeColor, textColor, `<circle cx="150" cy="107" r="80" fill="${shapeColor}"/>`);
        expect(logo.shapeColor).toBe(shapeColor);
    });
});
