app.controller('DataCtrl', function($scope, Comp, Folio){

	var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector("#movie button");

	function vidFade() {
		vid.classList.add("stopfade");
	}

	vid.addEventListener('ended', function()
	{
		// only functional if "loop" is removed 
		vid.pause();
		// to capture IE10
		vidFade();
	});


	pauseButton.addEventListener("click", function() {
		vid.classList.toggle("stopfade");
		if (vid.paused) {
		vid.play();
		pauseButton.innerHTML = "Mettre en pause l'animation";
		} else {
		vid.pause();
		pauseButton.innerHTML = "Reprendre l'animation";
		}
	});

	Comp.call().then(function(value){
		$scope.comps = value.skills;
		$scope.compspress = value.skillspress;
	});

	Folio.call().then(function(value){
		$scope.folios = value.folio;
	});
});
