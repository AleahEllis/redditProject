$(function(){
  
  $.get('https://www.reddit.com/r/aww/.json', function(somethingElse){
    var title = somethingElse.data.children[0].data.title;
    
    var dogStory = $("<h1></h1>").text(title);

    
    var url = somethingElse.data.children[0].data.thumbnail;
    console.log(url);
    var dogImage = $("<img />").attr("src", url);
          $('body').append([dogStory, dogImage]);
  });
  
});