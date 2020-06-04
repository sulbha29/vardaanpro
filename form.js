class Form  {
    constructor()
 {
   /* this.name = createInput("Enter Your Name")
    this.email = createInput("Enter Your Email")
    this.password = createInput("Enter Your Password")
    this.confirmation = createInput("Confirm Your Password")
    this.SignUp = createButton("Sign Up Now")
    */
 }
 display(){
        var title = createElement("h2")
        title.html("INTERGALACTIC WARS")
        title.position(400,50);
        var name = createInput("Enter Your Name");
        name.position(350,150)
        var email = createInput("Enter Your Email")
        email.position(350,200);
        var password = createInput("Enter your password");
        password.position(350,250)
      var confirmation = createInput("Confirm your password");
      confirmation.position(350,300);
      var signupbutton = createButton("Sign Up Now")
       signupbutton.position(350, 400)
        signupbutton.mousePressed(function(){
          name.hide();
          email.hide();
          password.hide();
          confirmation.hide();
          signupbutton.hide();                        
        var greeting = createElement('h2');
        greeting.html("Successfully signedup");
        greeting.position(200,200);
        });
      }
    }
 













































