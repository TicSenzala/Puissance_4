(function($) {
	$.fn.puissance = function(x, y, color1, color2)
	{
		$(".game").append("<div class='player'>!!! Cliquez pour commencer a jouer !!!</div>");
		$(".game").append("<button id='replay' class='btn btn-danger col-12 float-right p-5 text-uppercase font-weight-bold' style='border-radius:10px;'>Reset</button>")

		for (j = 1 ; j <= y; j++) {
			$(".game").css({"background-color":"blue", "padding":"10px", "border-radius": "10px", "margin-top":"10px", "text-align":"center"}).append("<br>");
			var i=1;
			while(i <= x) {
				$(".game").append("<div class='item' data-positionx='"+i+"' data-positiony='"+j+"' data-check='OK' style='width:150px; height: 150px; background-color: white; border-radius:100%; margin: 20px;'></div>");
				i++;
			}
		}

		$(".elem").hide();

	// ajout des id pour les cercles
	var k=1;
	$("div.item").each(function(index, value){
		$(value).attr("id", k);
		k++;
	});

	var joueur = 0;

	var arr = [];
	var i = 1;
	while (i <= x) 
	{
		arr.push(""+ y +"");	
		i++;
	}

  // change color
  function changeColor()
  {

  	if(x < 4 || y < 4)
  	{
  		alert("Vous ne pouvez pas selectionner une valeur inferieur à 4");
  		location.reload();
  	}
  	if(x > 9 || y > 9)
  	{
  		alert("Vous ne pouvez pas selectionner une valeur superieur à 9");
  		location.reload();
  	}
  	if($.isNumeric(x) == false || $.isNumeric(y) == false)
  	{
  		alert("Vous devez rentrer une valeur numerique");
  	}

  	if(color1 == "")
  	{
  		color1 = "blue";
  	}
  	if(color2 == "")
  	{
  		color2 = "yellow";
  	}
  	if(color1 == color2)
  	{
  		alert("Vous ne pouvez pas selectionner la même couleur, si vous n'en avez pas choisi, choisissez en une !");
  		location.reload();
  	}
  }
  changeColor();


	// fonction qui trouve les cases vide
	function colorPion(){
		$(".item").click(function(){
			var posx = $(this).data("positionx");
			var posy = arr[posx-1];
			if((joueur % 2)== 0)
			{
				$("[data-positionx='"+ posx +"'][data-positiony='"+ posy +"']").css({"background-color": color1, "position":"relative", "bottom":2000}).addClass("A").animate({
					top: 0
				}, 600);
				$(".player").html("Tour: Player 2").css({"color": color1, "display":"inline-block", "padding": "20px", "border-radius":"10px"});
				setInterval(function(){
					horizontalWins(posx, posy, "A");
					verticalWin(posx, posy, "A");
					diagonalWin(posx, posy, "A");
				}, 200);

			}	
			else if((joueur % 2) != 0 )
			{
				$("[data-positiony='"+ posy +"'][data-positionx='"+ posx +"']").css({"background-color": color2, "position": "relative", "bottom": 2000}).addClass("O").animate({
					top: 0
				}, 550);
				$(".player").html("Tour: Player 1").css("color", color2);
				setInterval(function(){
					horizontalWins(posx, posy, "O");
					verticalWin(posx, posy, "O");
					diagonalWin(posx, posy, "O");
				}, 200);
			}
			if(y > 0)
			{				
				arr[posx-1]--;
			}
			joueur++;

		});
	}
	colorPion();



	function horizontalWins(xpos, ypos, player)
	{
	// Win the game !!
	// "check win to the right"
	var pos1 = xpos+1;
	var pos2 = xpos+2;
	var pos3 = xpos+3;		
	if($("[data-positiony='"+ ypos +"'][data-positionx='"+ xpos +"']").hasClass(player)
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos1 +"']").hasClass(player) 
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos2 +"']").hasClass(player) 
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos3 +"']").hasClass(player))
	{
		if(player == "A")
		{
			alert("Félicitation !! Joueur 1 gagne !");	
		}

		if(player == "O")
		{
			alert("Félicitation !! Joueur 2 gagne !");	
		}
		location.reload();
	}
	// "check win to the left"
	var pos1 = xpos-1;
	var pos2 = xpos-2;
	var pos3 = xpos-3; 
	if($("[data-positiony='"+ ypos +"'][data-positionx='"+ xpos +"']").hasClass(player)
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos1 +"']").hasClass(player) 
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos2 +"']").hasClass(player) 
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos3 +"']").hasClass(player))
	{
		if(player == "A")
		{
			alert("Félicitation !! Joueur 1 gagne !");	
		}
		if(player == "O")
		{
			alert("Félicitation !! Joueur 2 gagne !");	

		}
		location.reload();
	}

	// chack win to middleLeft
	var pos1 = xpos-1;
	var pos2 = xpos+1;
	var pos3 = xpos+2; 
	if($("[data-positiony='"+ ypos +"'][data-positionx='"+ xpos +"']").hasClass(player)
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos1 +"']").hasClass(player) 
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos2 +"']").hasClass(player) 
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos3 +"']").hasClass(player))
	{
		if(player == "A")
		{
			alert("Félicitation !! Joueur 1 gagne !");	
		}
		if(player == "O")
		{

			alert("Félicitation !! Joueur 2 gagne !");	
		}
		location.reload();
	}

	// chack win to middleLeft
	var pos1 = xpos-2;
	var pos2 = xpos-1;
	var pos3 = xpos+1; 
	if($("[data-positiony='"+ ypos +"'][data-positionx='"+ xpos +"']").hasClass(player)
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos1 +"']").hasClass(player) 
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos2 +"']").hasClass(player) 
		&& $("[data-positiony='"+ ypos +"'][data-positionx='"+ pos3 +"']").hasClass(player))
	{
		if(player == "A")
		{			
			alert("Félicitation !! Joueur 1 gagne !");	
		}
		if(player == "O")
		{

			alert("Félicitation !! Joueur 2 gagne !");	
		}
		location.reload();
	}
}

// wins to verticale !!
function verticalWin(xpos, ypos, player)
{
	var pos1 = ypos+1;
	var pos2 = ypos+2;
	var pos3 = ypos+3; 
	if($("[data-positiony='"+ ypos +"'][data-positionx='"+ xpos +"']").hasClass(player)
		&& $("[data-positiony='"+ pos1 +"'][data-positionx='"+ xpos +"']").hasClass(player) 
		&& $("[data-positiony='"+ pos2 +"'][data-positionx='"+ xpos +"']").hasClass(player) 
		&& $("[data-positiony='"+ pos3 +"'][data-positionx='"+ xpos +"']").hasClass(player))
	{
		if(player == "A")
		{

			alert("Félicitation !! Joueur 1 gagne !");	

		}
		if(player == "O")
		{
			alert("Félicitation !! Joueur 2 gagne !");	
		}
		location.reload();
	}

}

// win to diagonal
function diagonalWin(xpos, ypos, player)
{
	var posor1 = ypos+1;
	var posor2 = ypos+2;
	var posor3 = ypos+3; 
	var posab1 = xpos-1;
	var posab2 = xpos-2;
	var posab3 = xpos-3; 
	if($("[data-positiony='"+ ypos +"'][data-positionx='"+ xpos +"']").hasClass(player)
		&& $("[data-positiony='"+ posor1 +"'][data-positionx='"+ posab1 +"']").hasClass(player) 
		&& $("[data-positiony='"+ posor2 +"'][data-positionx='"+ posab2 +"']").hasClass(player) 
		&& $("[data-positiony='"+ posor3 +"'][data-positionx='"+ posab3 +"']").hasClass(player))
	{
		if(player == "A")
		{
			alert("Félicitation !! Joueur 1 gagne !");	
		}
		if(player == "O")
		{
			alert("Félicitation !! Joueur 2 gagne !");	
		}
		location.reload();
	}

	var posor1 = ypos+1;
	var posor2 = ypos+2;
	var posor3 = ypos+3; 
	var posab1 = xpos+1;
	var posab2 = xpos+2;
	var posab3 = xpos+	3; 
	if($("[data-positiony='"+ ypos +"'][data-positionx='"+ xpos +"']").hasClass(player)
		&& $("[data-positiony='"+ posor1 +"'][data-positionx='"+ posab1 +"']").hasClass(player) 
		&& $("[data-positiony='"+ posor2 +"'][data-positionx='"+ posab2 +"']").hasClass(player) 
		&& $("[data-positiony='"+ posor3 +"'][data-positionx='"+ posab3 +"']").hasClass(player))
	{
		if(player == "A")
		{
			alert("Félicitation !! Joueur 1 gagne !");	
		}
		if(player == "O")
		{
			alert("Félicitation !! Joueur 2 gagne !");	
		}
		location.reload();
	}

	var posor1 = ypos-1;
	var posor2 = ypos+1;
	var posor3 = ypos+2; 
	var posab1 = xpos+1;
	var posab2 = xpos-1;
	var posab3 = xpos-2; 
	if($("[data-positiony='"+ ypos +"'][data-positionx='"+ xpos +"']").hasClass(player)
		&& $("[data-positiony='"+ posor1 +"'][data-positionx='"+ posab1 +"']").hasClass(player) 
		&& $("[data-positiony='"+ posor2 +"'][data-positionx='"+ posab2 +"']").hasClass(player) 
		&& $("[data-positiony='"+ posor3 +"'][data-positionx='"+ posab3 +"']").hasClass(player))
	{
		if(player == "A")
		{
			alert("Félicitation !! Joueur 1 gagne !");	
		}
		if(player == "O")
		{
			alert("Félicitation !! Joueur 2 gagne !");	
		}
		location.reload();
	}

	var posor1 = ypos+1;
	var posor2 = ypos-1;
	var posor3 = ypos-2; 
	var posab1 = xpos-1;
	var posab2 = xpos+1;
	var posab3 = xpos+2; 
	if($("[data-positiony='"+ ypos +"'][data-positionx='"+ xpos +"']").hasClass(player)
		&& $("[data-positiony='"+ posor1 +"'][data-positionx='"+ posab1 +"']").hasClass(player) 
		&& $("[data-positiony='"+ posor2 +"'][data-positionx='"+ posab2 +"']").hasClass(player) 
		&& $("[data-positiony='"+ posor3 +"'][data-positionx='"+ posab3 +"']").hasClass(player))
	{
		if(player == "A")
		{
			alert("Félicitation !! Joueur 1 gagne !");	
		}
		if(player == "O")
		{
			alert("Félicitation !! Joueur 2 gagne !");	
		}
		location.reload();
	}
}


	// fonction qui va annoncer une fin de partie où un match nul
	count = x * y-1;
	$(".item").click(function(){
		if(count == 0)
		{
			alert("Fin de la partie, match nul");
			location.reload();
		}
		count--;
	});


	// fonction pour recommencer la partie
	$("#replay").on('click', function() {
		event.preventDefault();
		location.reload();	
	});


}
})(jQuery);  
// appel au plugin
$(document).ready(function(){

	$(".selectColor1, .selectColor2").css("margin-left", "20px");
	for (var i = 0; i < 5; i++) 
	{
		$(".selectColor1").append("<div class='color"+i+"' style ='width:50px; display:inline-flex; border-radius: 5px; height:50px; cursor: pointer; margin-right:5px;'></div>");
	}

	for (var i = 0; i < 5; i++) 
	{
		$(".selectColor2").append("<div class='selcoul"+i+"' style ='width:50px; display:inline-flex; cursor: pointer; border-radius:5px; height:50px; margin-right:5px;'></div>");
	}
	$(".color0").css("background-color", "blue");
	$(".color1").css("background-color", "red");
	$(".color2").css("background-color", "yellow");
	$(".color3").css("background-color", "Green");
	$(".color4").css("background-color", "Orange");
	$(".color5").css("background-color", "Black");

	$(".selcoul0").css("background-color", "blue");
	$(".selcoul1").css("background-color", "red");
	$(".selcoul2").css("background-color", "yellow");
	$(".selcoul3").css("background-color", "Green");
	$(".selcoul4").css("background-color", "Orange");
	$(".selcoul5").css("background-color", "Black");

	var colrs = "";
	$(".color0").on("click", function(){
		colrs = "blue";
	});
	$(".color1").click(function(){
		colrs = "red";
	});   
	$(".color2").click(function(){
		colrs = "yellow";
	});
	$(".color3").click(function(){
		colrs = "green";
	});
	$(".color4").click(function(){
		colrs = "orange";
	}); 

	var col2 = "";
	$(".selcoul0").on("click", function(){
		col2 = "blue";
	})
	$(".selcoul1").on("click", function(){
		col2 = "red";
	})
	$(".selcoul2").on("click", function(){
		col2 = "yellow";
	})
	$(".selcoul3").on("click", function(){
		col2 = "green";
	})
	$(".selcoul4").on("click", function(){
		col2 = "orange";
	})

	$("#bouton").on("click", function(e){
		e.preventDefault();
		var larg = $("#large").text();
		var haut = $("#hauteur").text();
		if(larg && haut)
		{
			$("#large, #hauteur").remove();
			$('.direction').remove();
		}


		$(".game").puissance(larg , haut, colrs, col2);
	})
});