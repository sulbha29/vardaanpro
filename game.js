
    class Game{
        constructor(){}
        getState(){
           var gamestaterefer = database.ref('gamestate');
           gamestaterefer.on("value",function(data){
               gamestate = data.val();
           })
    
        }
        update(state){
            database.ref('/').update({
               gamestate:state 
            })
        }
        start(){
        if(gamestate === 0 ){
            form = new Form();
            form.display();
        }
        }
    }