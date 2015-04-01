angular.module('fab-component', [])
    .directive('fab', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: link
        };
        //isAnchor
        function isAnchor(attr) {
            return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref);
        }
        //template
        function template(element, attr) {
            return isAnchor(attr) ?
                '<a class="fab" ng-transclude></a>' :
                '<button class="fab" ng-transclude></button>';
        }
        //link
        function link(scope, element, attr) {
            var targetId = attr['targetId'];
            var targetEl = angular.element(document.getElementById(targetId));
            element.addClass('animated');
            var scroll = 0, max = 80, current = 0, prevScroll = 0;
            targetEl.bind('scroll', function (e) {
                scroll = window.ionic?e.detail.scrollTop:e.target.scrollTop;
                current = scroll >= 0 ? Math.min(max, Math.max(0, current + scroll - prevScroll)) : 0;
                window.requestAnimationFrame(function () {
                    element.css("transform","translate3d(0, " + current + "px, 0)");
                });
                prevScroll = scroll;
            });
        }
    });