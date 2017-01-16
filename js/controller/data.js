app.controller('DataCtrl', function($scope, Comp, Folio, $http){
	
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

	// create a blank object to hold our form information
    // $scope will allow this to pass between controller and view
    $scope.formData = {};

    // process the form
    $scope.processForm = function () {
        $http({
            method: 'POST',
            url: 'contact-form.php',
            data: $.param($scope.formData),  // pass in data as strings
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                console.log(data);

                if (!data.success) {
                    // if not successful, bind errors to error variables
                    $scope.errorName = data.errors.name;
                    $scope.errorSuperhero = data.errors.superheroAlias;
                } 
                else {
                    // if successful, bind success message to message
                    $scope.message = data.message;
                
                }
            });

	};

	$scope.templates =
    [{ name: 'template1.html', url: 'https://tyjow.github.io/Tyjow-Games/'}];
  	$scope.template = $scope.templates[0];

	// set the background color for row in ng-repeat
	$scope.colors = ['#f1f1f1','#222', '#404040', '#392640', '#f1f1f1', '#222', '#f1f1f1', '#404040', '#392640']
	$scope.colorShadow = ['#ccc','#121212', '#333', '#1c1320', '#ccc', '#121212', '#ccc', '#333', '#1c1320']

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
    $scope.states.activeItem = 'Accueil';

	Menu.call().then(function(value){
		$scope.menus = value.menu;
	});
});
