
$( document ).ready(function() {
	

	$(".deck-display").hover(
		
		function(){
			$(this).find("h1")
								.dequeue()
								.stop()
								.animate({
									top: "0",
									opacity: "1"
								  }, 600);
			
		}	,
		function(){
			
			$(this).find("h1")
								.animate({
									top: "-25",
									opacity: "0"
								  }, 600 ,
			  function(){
				$(this).find("h1").dequeue();	
			  } 
		  );
		}
	);
	$(".deck-display").hover(
		
		function(){
			$(this).find("h3")
								.dequeue()
								.stop()
								.animate({
									
									opacity: "1"
								  }, 600);
			
		}	,
		function(){
			
			$(this).find("h3")
								.animate({
									
									opacity: "0"
								  }, 600 ,
			  function(){
				$(this).find("h3").dequeue();	
			  } 
		  );
		}
	);

});
