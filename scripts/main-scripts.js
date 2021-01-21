
$( document ).ready(function() {
	
	$(".deck-display").hover(
		//On Enter Hover callback
		function(){
			$(this).find("h1")
								.dequeue()
								.stop()
								.animate({
									top: "0",
									opacity: "1"
								  }, 600);
			
		}	,//<-Tambien recibe otro parametro que es la funcion que se llama
			 //cuando SALGO del hover
		//On Exit Hover
		function(){
			//On exit hover queremos ANIMAR a este elemento para que retorne
			//a la posicion orignal
			$(this).find("h1")
								.animate({
									top: "-25",
									opacity: "0"
								  }, 600 ,/*<--La funcion ANIMATE() recibe (despues de la cantidad
																			de segundos, una funcion a
																			llamarse cuando TERMINE la animacion)
				Esta funcion se llama LUEGO de que volvamos, por animacion, al punto top y el alfa iniciales*/
			  function(){
				$(this).find("h1").dequeue();	//Saca al elemento de la lista
			  } 
		  );
		}
	);
});
