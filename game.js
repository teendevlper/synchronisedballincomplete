class Game{
    constructor(){

    }
getgameState(){
    var gmstateref = database.ref('gameState');
    gmstateref.on("value", function(data){
         gamestate = data.val();

         
     } );
    
}


}