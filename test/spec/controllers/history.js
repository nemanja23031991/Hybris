'use strict';

describe('Controller: HistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('HybrisApp'));

  var HistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistoryCtrl = $controller('HistoryCtrl', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
