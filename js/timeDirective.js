app.directive('showTime', function(){
	return {
		restrict: 'E',
		template: '<div>The current time is: {{time}}</div>',
		link: function (scope, element, attrs) {
			var currentTime = new Date();
			scope.time = currentTime.toString();
		}
	}
});



app.directive('showDaniel', function () {
	return {
		restrict: 'E',
		template: '<img src="https://lh3.googleusercontent.com/-hZDoeJhYcC4/AAAAAAAAAAI/AAAAAAAAAAA/lc32O2CSfbI/s128-c-k/photo.jpg"/>',
	}
});