const inquirer = require('inquirer');
const fs = require('fs')
const { Triangle, Circle, Square} = require('./shapes')


function initialize() {
    getInfo();
}


function getInfo() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'acronym',
            message: "Reduce your company's name to a three letter acronym."
        },
        {
            type: 'input',
            name: 'textColor',
            message: "What color would you like the text to be?"
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: "What background shape do you prefer?",
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: "What color do you want your shape to be?"
        }
    ])
    .then(answers => {
        answers.shape.forEach(shape => {
            switch (shape) {
                case "Triangle":
                    const renderedTriangle = new Triangle
                     renderedTriangle.text = answers.acronym;
                     renderedTriangle.color = answers.shapeColor;
                     renderedTriangle.textColor = answers.textColor;
                     renderedTriangle.type = answers.shape;

                     let triangleContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="${renderedTriangle.color}" />
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${renderedTriangle.textColor}">${renderedTriangle.text}</text>
                </svg>`

                function writeTriangle() {
                    fs.writeFile("Your-Logo.html", triangleContent, (err) => {
                      if (err) {
                          console.error(err);
                          return;
                      }
                      console.log("File has been written successfully");
                    })
                  }
                  writeTriangle();
                    console.log(renderedTriangle, triangleContent);
                    break;

                case "Circle":
                    const renderedCicle = new Circle
                     renderedCicle.text = answers.acronym;
                     renderedCicle.color = answers.shapeColor;
                     renderedCicle.textColor = answers.textColor;
                     renderedCicle.type = answers.shape;

                     let circleContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                     <circle cx="150" cy="100" r="80" fill="${renderedCicle.color}" />
                   
                     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${renderedCicle.textColor}">${renderedCicle.text}</text>
                   
                   </svg>`

                   function writeCircle() {
                    fs.writeFile("Your-Logo.html", circleContent, (err) => {
                      if (err) {
                          console.error(err);
                          return;
                      }
                      console.log("File has been written successfully");
                    })
                  }
                  writeCircle();

                    console.log(renderedCicle, circleContent); 
                    break;

                case "Square":
                const renderedSquare = new Square
                      renderedSquare.text = answers.acronym;
                      renderedSquare.color = answers.shapeColor;
                      renderedSquare.textColor = answers.textColor;
                      renderedSquare.type = answers.shape;

                      let squareContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                      <rect x="90" y="40" width="120" height="120" fill="${renderedSquare.color}" />
                    
                      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${renderedSquare.textColor}">${renderedSquare.text}</text>
                    
                    </svg>`

                    function writeSquare() {
                        fs.writeFile("Your-Logo.html", squareContent, (err) => {
                          if (err) {
                              console.error(err);
                              return;
                          }
                          console.log("File has been written successfully");
                        })
                      }
                      writeSquare();

                    console.log(renderedSquare, squareContent);
                    break;

            }
        })
    })
};


// reference();
// function reference(){
//     const myShape = new Shape('taco', 'banana', 'garbage water')

//     console.log(myShape.color);
//     myShape.setColor("red");
//     console.log(myShape.color);

//     const myTriangle = new Triangle('type', 'text', 'color', 'textColor')

//     console.log(myTriangle.color)
//     myTriangle.setColor('green')
//     console.log(myTriangle.color)
    
//     console.log(myTriangle.render())
// }






initialize();

