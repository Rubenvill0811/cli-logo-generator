const {Shape, Triangle, Circle, Square} = require('./shapes');


describe('Triangle', () => {
    test("Should render SVG for a triangle", ()=>{
        const testedVal = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="bisque" />
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text>
      
      </svg>`

      const testTriangle = new Triangle
      testTriangle.text = "SVG"
      testTriangle.textColor = "#3a0467"
      testTriangle.color = "bisque"
      const finalTriangle = testTriangle.render();

      expect(finalTriangle).toEqual(testedVal);
    })
}









)