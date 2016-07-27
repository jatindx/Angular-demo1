angular.module('demo')
		.service('seriesDetail',[ '$http',function( $http ) {
			
			/*var shows=[
			 {
				_id:0,
			  name:'Game of thrones',
			  image: 'images/got.jpg',
			  bigimage: 'images/imgn-slide1.jpg',
			  category: 'fanatasy', 
			  imdb:'9.5',
			  viewers:'10000000000',
			  seasons: '6',
			  description:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martins series of fantasy novels, the first of which is titled A Game of Thrones. ',
			   comments: [
				   {
					   rating:5,
					   comment:"Great Show! Constructive Criticism for Battle of the Bastards",
					   author:"John Lemon",
					   date:"2012-10-16T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Jon Snow is Daenerys Targaryen nephew. I think the Stark and Targaryen will enjoy soldiers and will win the the war in the 7 Kingdom... ",
					   author:"Paul McVites",
					   date:"2014-09-05T17:57:28.556094Z"
				   },
				   {
					   rating:3,
					   comment:"HBO's Game of Thrones has the budget, actors, and setting to tell an intricate story with enthusiasm and prestige.",
					   author:"Michael Jaikishan",
					   date:"2015-02-13T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Arguably the greatest show of all time",
					   author:"Ringo Starry",
					   date:"2013-12-02T17:57:28.556094Z"
				   },
				   {
					   rating:2,
					   comment:"Epic, highly polished,very well acted, top notch produced copypasta of things that draw attention of the masses",
					   author:"25 Cent",
					   date:"2011-12-02T17:57:28.556094Z"
				   }
				   
			   ]
			},
			{
				_id:1,
			  name:'Sherlock',
			  image: 'images/sherlock.jpg',
			  bigimage: 'images/imgn-slide2.jpg',
			  category: 'fanatasy', 
			  imdb:'9',
			  viewers:'10000000000',
			  seasons: '3',
			  description:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martins series of fantasy novels, the first of which is titled A Game of Thrones. ',
			   comments: [
				   {
					   rating:5,
					   comment:"Great Show! Constructive Criticism for Battle of the Bastards",
					   author:"John Lemon",
					   date:"2012-10-16T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Jon Snow is Daenerys Targaryen nephew. I think the Stark and Targaryen will enjoy soldiers and will win the the war in the 7 Kingdom... ",
					   author:"Paul McVites",
					   date:"2014-09-05T17:57:28.556094Z"
				   },
				   {
					   rating:3,
					   comment:"HBO's Game of Thrones has the budget, actors, and setting to tell an intricate story with enthusiasm and prestige.",
					   author:"Michael Jaikishan",
					   date:"2015-02-13T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Arguably the greatest show of all time",
					   author:"Ringo Starry",
					   date:"2013-12-02T17:57:28.556094Z"
				   },
				   {
					   rating:2,
					   comment:"Epic, highly polished,very well acted, top notch produced copypasta of things that draw attention of the masses",
					   author:"25 Cent",
					   date:"2011-12-02T17:57:28.556094Z"
				   }
				   
			   ]
			},
			{
				_id:2,
			  name:'FRIENDS',
			  image: 'images/friends.jpg',
			  bigimage: 'images/imgn-slide3.jpg',
			  category: 'fanatasy', 
			  imdb:'8.9',
			  viewers:'10000000000',
			  seasons: '10',
			  description:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martins series of fantasy novels, the first of which is titled A Game of Thrones. ',
			   comments: [
				   {
					   rating:5,
					   comment:"Great Show! Constructive Criticism for Battle of the Bastards",
					   author:"John Lemon",
					   date:"2012-10-16T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Jon Snow is Daenerys Targaryen nephew. I think the Stark and Targaryen will enjoy soldiers and will win the the war in the 7 Kingdom... ",
					   author:"Paul McVites",
					   date:"2014-09-05T17:57:28.556094Z"
				   },
				   {
					   rating:3,
					   comment:"HBO's Game of Thrones has the budget, actors, and setting to tell an intricate story with enthusiasm and prestige.",
					   author:"Michael Jaikishan",
					   date:"2015-02-13T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Arguably the greatest show of all time",
					   author:"Ringo Starry",
					   date:"2013-12-02T17:57:28.556094Z"
				   },
				   {
					   rating:2,
					   comment:"Epic, highly polished,very well acted, top notch produced copypasta of things that draw attention of the masses",
					   author:"25 Cent",
					   date:"2011-12-02T17:57:28.556094Z"
				   }
				   
			   ]
			},
			{
				_id:3,
			  name:'Breaking Bad',
			  image: 'images/bad.jpg',
			  bigimage: 'images/imgn-slide4.jpg',
			  category: 'fanatasy', 
			  imdb:'9.5',
			  viewers:'10000000000',
			  seasons: '6',
			  description:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martins series of fantasy novels, the first of which is titled A Game of Thrones. ',
			   comments: [
				   {
					   rating:5,
					   comment:"Great Show! Constructive Criticism for Battle of the Bastards",
					   author:"John Lemon",
					   date:"2012-10-16T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Jon Snow is Daenerys Targaryen nephew. I think the Stark and Targaryen will enjoy soldiers and will win the the war in the 7 Kingdom... ",
					   author:"Paul McVites",
					   date:"2014-09-05T17:57:28.556094Z"
				   },
				   {
					   rating:3,
					   comment:"HBO's Game of Thrones has the budget, actors, and setting to tell an intricate story with enthusiasm and prestige.",
					   author:"Michael Jaikishan",
					   date:"2015-02-13T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Arguably the greatest show of all time",
					   author:"Ringo Starry",
					   date:"2013-12-02T17:57:28.556094Z"
				   },
				   {
					   rating:2,
					   comment:"Epic, highly polished,very well acted, top notch produced copypasta of things that draw attention of the masses",
					   author:"25 Cent",
					   date:"2011-12-02T17:57:28.556094Z"
				   }
				   
			   ]
			},
			{
				_id:4,
			  name:'How I met your Mother',
			  image: 'images/mother.jpg',
			  bigimage: 'images/imgn-slide5.jpg',
			  category: 'fanatasy', 
			  imdb:'9.5',
			  viewers:'10000000000',
			  seasons: '6',
			  description:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martins series of fantasy novels, the first of which is titled A Game of Thrones. ',
			   comments: [
				   {
					   rating:5,
					   comment:"Great Show! Constructive Criticism for Battle of the Bastards",
					   author:"John Lemon",
					   date:"2012-10-16T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Jon Snow is Daenerys Targaryen nephew. I think the Stark and Targaryen will enjoy soldiers and will win the the war in the 7 Kingdom... ",
					   author:"Paul McVites",
					   date:"2014-09-05T17:57:28.556094Z"
				   },
				   {
					   rating:3,
					   comment:"HBO's Game of Thrones has the budget, actors, and setting to tell an intricate story with enthusiasm and prestige.",
					   author:"Michael Jaikishan",
					   date:"2015-02-13T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Arguably the greatest show of all time",
					   author:"Ringo Starry",
					   date:"2013-12-02T17:57:28.556094Z"
				   },
				   {
					   rating:2,
					   comment:"Epic, highly polished,very well acted, top notch produced copypasta of things that draw attention of the masses",
					   author:"25 Cent",
					   date:"2011-12-02T17:57:28.556094Z"
				   }
				   
			   ]
			},
			{
				_id:5,
			  name:'Band of Brothers',
			  image: 'images/band.jpg',
			  bigimage: 'images/imgn-slide6.jpg',
			  category: 'fanatasy', 
			  imdb:'9.5',
			  viewers:'10000000000',
			  seasons: '6',
			  description:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martins series of fantasy novels, the first of which is titled A Game of Thrones. ',
			   comments: [
				   {
					   rating:5,
					   comment:"Great Show! Constructive Criticism for Battle of the Bastards",
					   author:"John Lemon",
					   date:"2012-10-16T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Jon Snow is Daenerys Targaryen nephew. I think the Stark and Targaryen will enjoy soldiers and will win the the war in the 7 Kingdom... ",
					   author:"Paul McVites",
					   date:"2014-09-05T17:57:28.556094Z"
				   },
				   {
					   rating:3,
					   comment:"HBO's Game of Thrones has the budget, actors, and setting to tell an intricate story with enthusiasm and prestige.",
					   author:"Michael Jaikishan",
					   date:"2015-02-13T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Arguably the greatest show of all time",
					   author:"Ringo Starry",
					   date:"2013-12-02T17:57:28.556094Z"
				   },
				   {
					   rating:2,
					   comment:"Epic, highly polished,very well acted, top notch produced copypasta of things that draw attention of the masses",
					   author:"25 Cent",
					   date:"2011-12-02T17:57:28.556094Z"
				   }
				   
			   ]
			},
			{
				_id:6,
			  name:'Big Bang Theory',
			  image: 'images/big.jpg',
			  bigimage: 'images/imgn-slide7.jpg',
			  category: 'fanatasy', 
			  imdb:'9.5',
			  viewers:'10000000000',
			  seasons: '6',
			  description:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martins series of fantasy novels, the first of which is titled A Game of Thrones. ',
			   comments: [
				   {
					   rating:5,
					   comment:"Great Show! Constructive Criticism for Battle of the Bastards",
					   author:"John Lemon",
					   date:"2012-10-16T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Jon Snow is Daenerys Targaryen nephew. I think the Stark and Targaryen will enjoy soldiers and will win the the war in the 7 Kingdom... ",
					   author:"Paul McVites",
					   date:"2014-09-05T17:57:28.556094Z"
				   },
				   {
					   rating:3,
					   comment:"HBO's Game of Thrones has the budget, actors, and setting to tell an intricate story with enthusiasm and prestige.",
					   author:"Michael Jaikishan",
					   date:"2015-02-13T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Arguably the greatest show of all time",
					   author:"Ringo Starry",
					   date:"2013-12-02T17:57:28.556094Z"
				   },
				   {
					   rating:2,
					   comment:"Epic, highly polished,very well acted, top notch produced copypasta of things that draw attention of the masses",
					   author:"25 Cent",
					   date:"2011-12-02T17:57:28.556094Z"
				   }
				   
			   ]
			},
			{
				_id:7,
			  name:'TVF Pitchers',
			  image: 'images/tvf.jpg',
			  bigimage: 'images/imgn-slide8.jpg',
			  category: 'fanatasy', 
			  imdb:'9.5',
			  viewers:'10000000000',
			  seasons: '6',
			  description:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martins series of fantasy novels, the first of which is titled A Game of Thrones. ',
			   comments: [
				   {
					   rating:5,
					   comment:"Great Show! Constructive Criticism for Battle of the Bastards",
					   author:"John Lemon",
					   date:"2012-10-16T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Jon Snow is Daenerys Targaryen nephew. I think the Stark and Targaryen will enjoy soldiers and will win the the war in the 7 Kingdom... ",
					   author:"Paul McVites",
					   date:"2014-09-05T17:57:28.556094Z"
				   },
				   {
					   rating:3,
					   comment:"HBO's Game of Thrones has the budget, actors, and setting to tell an intricate story with enthusiasm and prestige.",
					   author:"Michael Jaikishan",
					   date:"2015-02-13T17:57:28.556094Z"
				   },
				   {
					   rating:4,
					   comment:"Arguably the greatest show of all time",
					   author:"Ringo Starry",
					   date:"2013-12-02T17:57:28.556094Z"
				   },
				   {
					   rating:2,
					   comment:"Epic, highly polished,very well acted, top notch produced copypasta of things that draw attention of the masses",
					   author:"25 Cent",
					   date:"2011-12-02T17:57:28.556094Z"
				   }
				   
			   ]
			}
			];*/
			
			
			this.getShows = function(){
				return $http.get('https://api.myjson.com/bins/nk63');
			};
			
			/* this.getShow = function(index) {
				return shows[index];
			};
			 */
		}])
		.service('NewsList',['$http', function( $http) {
			this.getNews = function() {
				return $http.get('https://api.myjson.com/bins/3vhuv');
			}
		}])
		
;

