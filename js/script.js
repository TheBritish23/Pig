var translation = function(sentence){
  var newsentence = sentence.split('')
  var pig = ["-ay"]
  for(x=0; x < newsentence.length; x++){
    pig.forEach(function(letter){
     if(newsentence[x] === letter){
       newsentence[x]= "-ay";
     };
   });
 }
console.log(newsentence)
return newsentence;
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
