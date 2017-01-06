app.controller('DataCtrl', function($scope, Comp, Folio){
	
	/*var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector("#movie button");*/

	  /* play video twice as fast */
	  /*document.getElementById("bgvid").defaultPlaybackRate = 2.0;
	  document.getElementById("bgvid").play();*/

	  /* now play three times as fast just for the heck of it */
	  //document.getElementById("bgvid").playbackRate = 0.7;

	/*function vidFade() {
		vid.classList.add("stopfade");
	}*/

	/*vid.addEventListener('ended', function()
	{
		// only functional if "loop" is removed 
		vid.pause();
		// to capture IE10
		vidFade();
	});*/


	/*pauseButton.addEventListener("click", function() {
		vid.classList.toggle("stopfade");
		if (vid.paused) {
		vid.play();
		pauseButton.innerHTML = "Mettre en pause l'animation";
		} else {
		vid.pause();
		pauseButton.innerHTML = "Reprendre l'animation";
		}
	});*/

	/*$li = $('.menu li');
	$a = $('.menu a');

	$a.on('click', function(e){
		e.preventDefault();
		$li.removeClass('current');
		$(this).parent().addClass('current');
	});*/

	// set the background color for row in ng-repeat
	$scope.colors = ['#fff','#000', '#333', '#392640', '#fff', '#000', '#fff', '#333', '#392640']

	Comp.call().then(function(value){
		$scope.comps = value.skills;
		$scope.compspress = value.skillspress;
	});

	Folio.call().then(function(value){
		$scope.folios = value.folio;
	});

});

app.controller('MainCtrl', function($scope, Menu){

	$scope.states = {};
    $scope.states.activeItem = 'A propos';

	Menu.call().then(function(value){
		$scope.menus = value.menu;
		console.log($scope.menus);
	});
});
