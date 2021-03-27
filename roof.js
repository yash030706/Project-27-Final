class Roof{
	constructor(x,y,w,h){
		var options={
			isStatic:true			
		}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display(){
			
		var RoofPos=this.body.position;		

		push()
		translate(RoofPos.x, RoofPos.y);
		rectMode(CENTER)
		strokeWeight(4);
		fill(255,255,0)
		rect(0,0,this.w, this.h);
		pop()
			
	}

}