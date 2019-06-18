var translation = function(sentence){
  var splitstring = sentence.split('')
  var pig = ["-way"]
  for(x=0; x < splitstring.length; x++){
    vowels.forEach(function(letter){
     if(splitstring[x] === letter){
       splitstring[x]= "-way";
     };
   });
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

    var newsentence = translation(words)

    $('#output').append(newsentence)

    $("#display").append(x);
})


  });
