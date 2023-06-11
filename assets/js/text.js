$(document).ready(function() {
    var changingWord = $("#changingWord");
  
    var words = ["Creces", "Vendes", "Despegas", "Imaginas"];
    var currentIndex = 0;
  
    function changeWord() {
      changingWord.fadeOut(500, function() {
        $(this).text(words[currentIndex]).fadeIn(500);
        currentIndex = (currentIndex + 1) % words.length;
      });
    }
  
    setInterval(changeWord, 2000);
  });
  