var Calcs = (function () {

	var init = function() {
		bind();
	}

  var bind = function(){
    $('#calculate').click(startCalcs);
  }

  var startCalcs = function(){
    var pr = $("#pr").val();
		for (var i = 95; i >= 50; i-=5) {
			var percentage = (pr*(i/100));
	    var bottomSuggestion = percentage - percentage%5;
	    var topSuggestion = bottomSuggestion+5;
			$("#bottom"+i).html(bottomSuggestion);
			$("#exactly"+i).html(percentage);
	    $("#top"+i).html(topSuggestion);
		}
  }

	var calcPlates = function(weight){
		var plates = [45, 35, 25, 15, 10, 5, 2.5]
		var bars = [45, 35, 15]
		var result = {}
		for (var i = 0; i < bars.length; i++) {
			var bar = bars[i];
			var remianing = weight-bar;
			result[bar] = new Object;
			for (var j = 0; j < plates.length; j++) {
				var plate = plates[j];
				if(remianing - plate*2 >= 0){
					result[bar][plate] = 2;
					remianing = remianing-plate*2
				}
			}
		}
		return result;
	}

	var platesSuggestion = function(result){
		var msg = "";
		for (var key in result) {
			msg += "Barra de "+key+" (Discos: "
			for(var keyPlate in result[key]){
				msg += result[key][keyPlate]+"x"+keyPlate+"lb "
			}
			msg += ") \n"
   }
	 return msg
	}

	return {
    init: init,
		calcPlates: calcPlates,
		platesSuggestion: platesSuggestion
  };
}());
