
let cosinusGraph = function(sketch)
{
    sketch.setup = function() {
        let canvas = sketch.createCanvas(1000, 300); 
        canvas.position(820, 258, 'fixed');        
        
      }


      sketch.draw = function() {
        
        sketch.background(255);
        sketch.translate(150, 150);

        sketch.stroke('black');
        sketch.line(1000, 0, -1000, 0);
        sketch.line(0, 1000, 0, -1000)


        /*
        cosinus.forEach(coordinate => {
            if(coordinate.y * 1/3 > 300)
              {
                let index = cosinus.indexOf(coordinate);
                cosinus.splice(index, 1);
              }
            
            sketch.stroke('red');
            sketch.strokeWeight(4);
            coordinate.y++; 
            sketch.point(coordinate.y * 1/3, coordinate.x * 1/3);
        });
        */


        
        /*
        sinus.forEach(coordinate => {
    
          if(coordinate.x * 1/3 > 300)
            {
              let index = sinus.indexOf(coordinate);
              sinus.splice(index, 1);
            }
    
        
          sketch.stroke(42, 250, 60);
          sketch.strokeWeight(4);
          coordinate.x++; 
          sketch.point(coordinate.x * 1/3, coordinate.y * 1/3);
      });
      */

        for(let i = 0; i < cosinus.length; i++)
        {
          if(cosinus[i].y > 900)
          {
            cosinus.splice(i, 1);
          }


          sketch.stroke('red');
          sketch.strokeWeight(4);
          cosinus[i].y++;

          if(cosinus[i+1])
          {
            sketch.line(cosinus[i].y, cosinus[i].x * 1/3, cosinus[i+1].y, cosinus[i+1].x * 1/3);
          }
         
        }

        for(let i = 0; i < sinus.length; i++)
        {
          if(sinus[i].x > 900)
          {
            sinus.splice(i, 1);
          }

          sketch.stroke(42, 250, 60);
          sketch.strokeWeight(4);
          sinus[i].x++; 

          if(sinus[i+1])
          {
            sketch.line(sinus[i].x, sinus[i].y * 1/3, sinus[i+1].x, sinus[i+1].y * 1/3);
          }
        }



      sketch.stroke(42, 250, 60);
      sketch.strokeWeight(2);
      sketch.textSize(20);
      sketch.fill(0);
      sketch.text('sin(α)', -75 , sinus[sinus.length - 1].y * 1/3);


      sketch.stroke('red');
      sketch.strokeWeight(2);
      sketch.textSize(20);
      sketch.fill(0);
      sketch.text('cos(α)', -75, cosinus[cosinus.length - 1].x * 1/3);
      
      sketch.strokeWeight(1);

      }
}

new p5(cosinusGraph);