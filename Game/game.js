var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList == "animate"){return} //so that it doesnt keep on adding if the user clicks multiple times
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300); //we want to remove because we wont be able to add the same class twice so we need to remove it first 
    //we wait 300ms since thats how long the animation takes
}