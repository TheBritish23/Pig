var translation = function(sentence){
  var vowels = ["a","e","i","o","u"]
  var splitstring = sentence.split("")
  var pig = ["way"]
  for(x=0; x < splitstring.length; x++){
  var newWord = splitstring.slice(x, splitstring.length) + splitstring.slice(0,x) + "ay"
    vowels.forEach(function(letter){
      console.log(letter)
     if(splitstring[0] === letter){
       splitstring.push("way");
       x = splitstring.length
     };
   });
    output = splitstring.join("")+"way"
 }
console.log(splitstring)
return splitstring;
}


// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var pig = parseInt($("input#year").val());



    var words = $('#words').val()

    var splitstring = translation(words)

    $('#output').append(splitstring)

    $("#display").append(x);
})


  });
