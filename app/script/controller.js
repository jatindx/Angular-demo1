angular.module('demo')
	
	.controller('IndexHead', ['$scope', 'seriesDetail', function($scope, seriesDetail){
		$scope.shows = [];
		$scope.showShow = false;
		$scope.message = "Loading..."
		seriesDetail.getShows()
		.then(
			function(response){
				$scope.shows = response.data;
				$scope.showShow = true;
			},
			function(response){
				$scope.message = "Error :"+ response.status + " " + response.statusText;
			}
		);
		console.log($scope.shows);
	}])
	
	.controller('NavController',['$scope', function($scope){
		$scope.tab = 0;
		$scope.isSelected = function(a){
			return $scope.tab==a;
		};
		$scope.select = function(a) {
			$scope.tab = a;
		}
	
	}])
	
	.controller('ShowDetail', ['$scope', '$stateParams', 'seriesDetail', function($scope, $stateParams, seriesDetail){
		$scope.shows = [];
		$scope.show = [];
		$scope.showShow = false;
		$scope.message = "Loading...";
		seriesDetail.getShows()
		.then(
			function(response){
				$scope.shows = response.data;
				$scope.show = response.data[parseInt($stateParams.id)];
				$scope.showShow = true;
			},
			function(response){
				$scope.message = "Error :"+ response.status + " " + response.statusText;
			}
		);
		//$scope.show = seriesDetail.getShow(parseInt($stateParams.id));
		$scope.notShow = function(x) {
			return !(x.name==$scope.show.name);
		}; 
	}])
	
	.controller('NewsDetail', ['$scope','$q', 'seriesDetail', 'NewsList', function( $scope, $q, seriesDetail, NewsList){
		$scope.shows = [];
		$scope.news = [];
		$scope.showNews = false;
		$scope.message = "Loading..."
		var promises = {
			alpha: seriesDetail.getShows(),
			beta: NewsList.getNews()
		};
		$q.all(promises)
		.then(
			function(response){
				$scope.shows = response.alpha.data;
				$scope.news = response.beta.data;
				$scope.showNews = true;
				for(var i=0;i<$scope.news.length;i++){
					var j= $scope.news[i].showid;
					$scope.news[i].image = $scope.shows[j].image;
				}
			},
			function(response){
				$scope.message = "Error :"+ response.status + " " + response.statusText;
			}
		);
	}])
	
;