(function () {
    /**
     *
     */
    define(['angular','ui.bootstrap','liwid-modules'], function () {
        angular.module('home', ['LiWidFilters']).controller('homeController', homeController);

        function homeController($scope) {

            /*let onSuccess = function(data){
                console.log("success");
                if (angular.isDefined(data.modelportfo  lio) && data.modelportfolio.length > 0) {
                    console.log("data found");
                    $scope.modelPortfolioList = data.modelportfolio;
                }

            };
            let onError = function (error) {
                console.log("error");
            };*/
            //GetModelPortfolio().get({},onSuccess,onError);

        }
        homeController.$inject = ['$scope'];

        angular.module('home').controller('CarouselDemoCtrl', function ($scope) {
            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            var slides = $scope.slides = [];
            var currIndex = 0;

            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: '//unsplash.it/' + newWidth + '/300',
                    text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
                    id: currIndex++
                });
            };

            $scope.randomize = function() {
                var indexes = generateIndexesArray();
                assignNewIndexesToSlides(indexes);
            };

            for (var i = 0; i < 4; i++) {
                $scope.addSlide();
            }

            // Randomize logic below

            function assignNewIndexesToSlides(indexes) {
                for (var i = 0, l = slides.length; i < l; i++) {
                    slides[i].id = indexes.pop();
                }
            }

            function generateIndexesArray() {
                var indexes = [];
                for (var i = 0; i < currIndex; ++i) {
                    indexes[i] = i;
                }
                return shuffle(indexes);
            }

            // http://stackoverflow.com/questions/962802#962890
            function shuffle(array) {
                var tmp, current, top = array.length;

                if (top) {
                    while (--top) {
                        current = Math.floor(Math.random() * (top + 1));
                        tmp = array[current];
                        array[current] = array[top];
                        array[top] = tmp;
                    }
                }

                return array;
            }
        });
    });

})();
