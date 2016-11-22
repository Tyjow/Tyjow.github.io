app.factory('Comp', function($http, $q){
	
	var factory = {
		empty: false,
		call: function() {
			var deferred = $q.defer();
			if (factory.empty !== false) {
				deferred.resolve(factory.empty);
			}
			else {
	        	var comp = $http.get('skill.json')
		        	.success(function(data) {
		        	factory.empty = data;
		        	deferred.resolve(factory.empty);
	       			 })
		        	.error(function(data) {
			        	deferred.reject("Erreur de chargement"); 
			        });
			}
		return deferred.promise;
	    },
    };
	return factory;
});