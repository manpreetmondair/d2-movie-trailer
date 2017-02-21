// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie{

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(nameOfMovie, youTubeID) {
        

        // 3. Call the parent constructor function using the super function
           super( );
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = nameOfMovie
        this.id = youTubeID

        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument
var trailer = new Trailer('Trolls', 'xyjm5VQ11TQ');   
var trailer = new Trailer('The Boss Baby', 'O2Bsw3lrhvs'); 
var trailer = new Trailer('Despicable Me', '6DBi41reeF0'); 
var trailer = new Trailer('Sing', 'Q1JTjLiV3ls'); 

$(document).ready(function(){
$("button").sparkle();
});