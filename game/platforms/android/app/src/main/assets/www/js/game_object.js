class GameObject{

    constructor(img, x, y, timeout){
        this.img = new Image();
        this.img.src = img;
        this.x=x;
        this.y=y;
        this.vx=0;
        this.vy=0;
        this.timeout =timeout;

        this.isColliding = false;
    }

    update(){
        /*
        this.x+=this.vx;
        this.y+=this.vy;
        setTimeout(this.update,this.timeout);
        */
        console.log("GameObject update");
    }

    draw(ctx){
        //ctx.drawImage(this.img, this.x, this.y);
    }
    
}