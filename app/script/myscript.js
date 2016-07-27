
angular.module('demo', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('app', {
			url:'/',
			views: {
				'nav': {
					templateUrl : 'views/nav.html',
					controller : 'NavController'
				},
				'content': {
					templateUrl : 'views/indexhead.html',
					controller : 'IndexHead'
				},
				'footer': {
					templateUrl : 'views/footer.html'
				}
			}
		})
		.state('app.about', {
			url:'about',
			views: {
				'content@': {
					templateUrl : 'views/about.html',
				}
			}
		})
		.state('app.news', {
			url:'news',
			views: {
				'content@': {
					templateUrl : 'views/news.html',
					controller : 'NewsDetail'
				}
			}
		})
		.state('app.detail', {
			url:'detail/:id',
			views: {
				'content@': {
					templateUrl : 'views/detail.html',
					controller : 'ShowDetail'
				}
			}
		});
		$urlRouterProvider.otherwise('/');
		
	
	})
	
;
window.onscroll = function(){
	var x = window.scrollY;
	document.getElementsByClassName('head-row')[0].style.backgroundPosition = "0px "+(50-x/4) +"px";
}