let w = window.document.getElementById('sketch1').clientWidth;
let h = window.document.getElementById('sketch1').clientHeight;
let offset = 20;
let x = 1000;

let sketch1 = function(p) {
    p.setup = function(){
      p.createCanvas(w, h);      
    }

    p.draw = function() {
        p.background(255);

        p.stroke('red');
        p.strokeWeight(10);

  p.push();
  p.translate(w/2, h/2);
  p.rotate( p.radians( p.frameCount * 0.5) );

  for(let i = 0; i < w*5; i += offset){
    p.line(i-x, -x, i-x, x);
  }
  p.pop();

  p.push();
  p.translate(w/2, h/2);
  p.rotate( p.radians( p.frameCount * -0.25) );

  for(let i = 0; i < w; i += offset){
    p.line(i-x, -x, i-x, x);
  }
  p.pop();
}
    }




    let sketch2 = function(p) {
    p.setup = function(){
        p.createCanvas(w, h);      
      }
  
      p.draw = function() {
          p.background(255);
  
          p.stroke('red');
          p.strokeWeight(10);
  
    //p.push();
    //p.translate(w/2, h/2);
    //p.rotate( p.radians( p.frameCount * 0.5) );
  
    for(let i = 0; i < w*5; i += offset){
      p.line(i-x, -x, i-x, x);
    }
    //p.pop();
  
    p.push();
    p.translate(800+(p.frameCount * +0.25), 0);
    //p.rotate( p.radians( p.frameCount * -0.25) );
  
    for(let i = 0; i < w; i += offset){
      
        p.line(i-x, -x, i-x+200, x);
    }
    p.pop();
  }
      }
  

  new p5(sketch1, window.document.getElementById('sketch1'));
  new p5(sketch2, window.document.getElementById('sketch2'));

  


  