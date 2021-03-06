(function() {
	EmotionsList.$inject = ['DayFactory'];
	function EmotionsList(DayFactory) {
		return {
			restrict: 'E',
			templateUrl: 'app/components/emotions-list/emotions-list.html',
			emotions: '=',
			link: function(scope, element, attrs) {
				console.log(DayFactory.getEmotion());
			}
		};
	}
	angular.module('ngapp').directive('emotionsList', EmotionsList);
})();