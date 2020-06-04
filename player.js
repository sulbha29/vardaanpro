class Player {
constructor(){
  this.name = null;  
  this.email = null;
  this.password = null;
}
static getPlayerInfo() {
    var readteinfo = database.ref('PlayerName');
    readteinfo.on("value" ,(data)=>{
        signDetails=data.val();
    })
}
update(){
    var playerDetails = "player/signDetails"    
    database.ref(playerDetails).set({
        Name:this.name,
        Email:this.email,
        Password:this.password
    

    })
}
}