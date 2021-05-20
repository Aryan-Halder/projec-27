class Bob {

    constructor(x,y){

        var options  = {

                friction : 0,
                density : 0.8,
                restitution:1

        }

        this.body  = Bodies.circle(x,450,25, options)
        World.add(world,this.body)
        this.radius  = 25

    }

    display(){
        push()
        fill(254,0,255)
        circle(this.body.position.x, this.body.position.y,this.radius*2)
        pop()
    }

}