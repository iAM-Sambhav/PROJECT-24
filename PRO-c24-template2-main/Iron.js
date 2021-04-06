class Iron {

    constructor (x, y ,){

    
    var options = {
        'density':0.8,
        'friction': 3,
        'restitution':30
      }
this.body = Bodies.rectangle(x,y,50,50,options)
this.width = 170;
this.height = 70;
World.add(world, this.body);

    }

    display(){
        var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("yellow");
			rect(0, 0, this.width, this.height);

			pop()
      };
    };
    

