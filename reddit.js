$(document).ready(function(){
	



 $.get('https://www.reddit.com/r/aww/.json', function(theInfo){
 	var children=theInfo.data.children
    
	$(children).each(function(i, post){

		 var title = post.data.title;
    
    	var firstStory = $("<h1></h1>").text(title);

    
   			 var url = post.data.thumbnail;
   // console.log(url);

    var firstImage = $("<img />").attr("src", url);
    var col= $('<div class="col-xs-12 col-md-8"></div>');
    var row= $('<div class="row"></div>');
          
      col.append([firstStory, firstImage]);
      row.append(col);
      $('#tiles').append(row);
          
          // $(#"col-xs-12 col-md-8").append([firstStory, firstImage])




   
 	
 	
		
// console.log(post.data.title)


	});



	// 		for(var i=0; i<=10; i++){
	// 			theInfo.push(i);
	// 			$("#tiles").append(function(){
	// 				return "<div class='bordbox'>" + i + "</div>";
	// 			})
	// 		}

	// 	// $("div.available").click(function(){
	// 	// $(this).toggleClass("reserved");

	// });


	});




  
});
