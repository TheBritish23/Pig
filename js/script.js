var translation = function(sentence){
  var newsentence = sentence.split('')
  var pig = ["-ay"]
  for(x=0; x < newsentence.length; x++){
    pig.forEach(function(letter){
     if(newsentence[x] === letter){


// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();


    var words = $('#words').val()
