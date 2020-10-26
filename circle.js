let angle = 0; 
let degree = 0; 
let radians = 0; 
let diameter = 0; 
let sinus = [];
let cosinus = [];

let sliderDiameter; 
let sliderAngleStep; 


let circle = function(sketch) 
{

sketch.setup = function() {
  sketch.createCanvas(800, 800); 
  
  sliderDiameter = sketch.createSlider(100, 800, 300, 1); 
  sliderDiameter.style('width', '300px'); 
  
  sliderAngleStep = sketch.createSlider(0.1, 5, 1, 0.1);
  
 
}

sketch.draw = function() {
  sketch.background(255);
  sketch.translate(400, 400);

  sketch.stroke('black');
  sketch.line(1000, 0, -1000, 0);
  sketch.line(0, 1000, 0, -1000)

  for(let i = -400; i < 400; i += 15)
  {
    sketch.line(400 + i, 5, 400 + i,  -5);
    sketch.line(5, 400 + i, -5, 400 + i);
  }

  for(let i = -400; i < 400; i += 15)
  {
    sketch.line(-1 * (400 + i), 5, -1 * (400 + i),  -5);
    sketch.line(5, -1 * (400 + i), -5, -1 * (400 + i));
  }


  
  if(degree < 360)
    {
      degree += sliderAngleStep.value();
    }
  else {
    degree = 0; 
  }
  
  diameter = sliderDiameter.value(); 

  radians = degreeToRadians(degree);
  angle = radians; 
  
  sketch.textSize(20);
  sketch.fill(0);
  sketch.text('Diameter: ' + diameter , -390, -360)
  sketch.text('Angle per Tick: ' + sliderAngleStep.value(), -390, -320);
  sketch.text('α: ' + degree.toFixed(0) + '° / ' + radians.toFixed(2) + 'π', -390, -280)

  
  sketch.noFill();
  sketch.circle(0,0,diameter);
  sketch.arc(0, 0, diameter / 5, diameter / 5, 0, angle, sketch.PIE); 
  
  let x = getX(diameter / 2, angle);
  let y = getY(diameter / 2, angle);
  
  sinus.push(sketch.createVector(0, y)); 
  cosinus.push(sketch.createVector(x, 0));

  /*
  sinus.forEach(coordinate => {
    
      if(coordinate.x > 400)
        {
          let index = sinus.indexOf(coordinate);
          sinus.splice(index, 1);
        }q
      
      stroke(42, 250, 60);
      strokeWeight(4);
      coordinate.x++; 
      point(coordinate.x, coordinate.y);
  });
     
  
  cosinus.forEach(coordinate => {
      if(coordinate.y > 400)
        {
          let index = cosinus.indexOf(coordinate);
          cosinus.splice(index, 1);
        }
      
      stroke('red');
      strokeWeight(4);
      coordinate.y++; 
      point(coordinate.x, coordinate.y);
  });
  */

  
  sketch.strokeWeight(2);
  sketch.stroke(2, 202, 237);
  sketch.line(0,0, x, y);
  
  sketch.stroke('black');
  sketch.strokeWeight(1);
  sketch.line(x, 0, x, y);
  sketch.line(0, y, x, y);
  
  sketch.strokeWeight(10);
  sketch.stroke(255, 213, 0);
  sketch.point(x,y);
  
  sketch.stroke('red');
  sketch.strokeWeight(2);
  sketch.textSize(20);
  sketch.fill(0);
  sketch.text('cos(α) = ' + x.toFixed(0), x - 10, 20);
  sketch.stroke('red');
  sketch.strokeWeight(2);
  sketch.line(0,0, x, 0);
  sketch.strokeWeight(10);
  sketch.point(x, 0);

  sketch.stroke(42, 250, 60);
  sketch.strokeWeight(2);
  sketch.textSize(20);
  sketch.fill(0);
  sketch.text('sin(α) = ' + -1 * y.toFixed(0), 10, y);
  sketch.stroke(42, 250, 60);
  sketch.strokeWeight(2);
  sketch.line(0,0,0,y);
  sketch.strokeWeight(10);
  sketch.point(0, y);
  
  sketch.stroke('black');
  sketch.strokeWeight(1);
 
  
}

}

new p5(circle);

function getX(radius, angle)
{  
 
  return (radius * Math.cos(angle) + 0)
}

function getY(radius, angle)
{
  
  return (radius * Math.sin(angle) + 0);
}

function degreeToRadians(degree)
{
  return ((degree * 3.14159265359) / 180);
}