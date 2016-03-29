$(document).ready(function() {

$("#sentenceReplace form").submit(function(event) {
  event.preventDefault();

  var sentence = $("#sentenceToSolve").val();
  var i=0, sentenceLength=sentence.length;
  for(i; i < sentenceLength; i++) {
    sentence = sentence.replace(/[a,e,i,o,u]/ig,"-");

    // sentence =sentence.replace ("a", "-").replace("e", "-").replace("i", "-").replace("o", "-").replace("u", "-").replace("A", "-").replace("E", "-").replace("I", "-").replace("O", "-").replace("U", "-");

  }
    $(".form-group").addClass("hide");
   $("#result").text(sentence);
  });



});
