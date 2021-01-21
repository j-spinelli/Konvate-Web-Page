
$( document ).ready(function() {
	
	$(".deck-display").hover(
		function(){
			$(".deck-display").find("h1")
								.dequeue()
								.stop()
								.animate({
									top: "0",
									opacity: "1"
								  }, 600);
			
		},
		function(){
			$(".deck-display").find("h1")
								.animate({
									top: "-25",
									opacity: "0"
								  }, 600 ,
		  function(){
			$(".deck-display").find("h1").dequeue();
		  } );
		}
	);

	/*
	ESTA FUNCION QUEDA DEPRECADA POR CAUSAR PROBLEMAS
	CON PITOS 
	
	.mouseover(
		function() {
			if(!animatingFadeIn){
				animatingFadeIn = true;
				$(".deck-display").find("h1")
									.animate({
										top: "0",
										opacity: "1"
									  }, 600, 
									  function(){
										animatingFadeIn = false; 
									  } );
			}
		}
	).mouseout(
		function() {
			if(!animatingFadeOut){
				animatingFadeOut = true;
				$(".deck-display").find("h1")
									.animate({
										top: "-25",
										opacity: "0"
									  }, 600 ,
									  function(){
										animatingFadeOut = false; 
									  } );
			}
		}
	);

	*/ 
});
