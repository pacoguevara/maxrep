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

	return {
    init: init
  };
}());
