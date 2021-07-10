class Form {

    constructor() {
      this.button = createButton('Play');
     // this.title = createElement('h2');
    }
    hide(){
      this.button.hide();
     // this.title.hide();
    }
  
    display(){
      background(fbac);
     // this.title.html("KingDom Run");
     // this.title.position(displayWidth/2 - 50, 0);
      this.button.position(displayWidth/2 + 30, displayHeight/1.8);
      
      this.button.mousePressed(()=>{
        this.button.hide();
        gameState = 1;
      });
    }
  }
  