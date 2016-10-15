var Calcs = (function () {

	var init = function() {
		bind();
	}

  var bind = function(){
    $('#calculate').click(startCalcs);
  }

  var startCalcs = function(){
    var pr = $("#pr").val();
    var percentage = (pr*(90/100));
    var bottomSuggestion = percentage - percentage%5;
    var topSuggestion = bottomSuggestion+5;
    alert(bottomSuggestion+"~"+topSuggestion);
  }

	return {
    init: init
  };
}());
