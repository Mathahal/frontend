var Test;

$(function() {
  return new Test("changed");
});

Test = (function() {
  function Test(txt) {
    this.txt = txt;
    this.init();
  }

  Test.prototype.init = function() {
    return this.changeTxt();
  };

  Test.prototype.changeTxt = function() {
    return $(".test").on("click", (function(_this) {
      return function(e) {
        console.log(e);
        return $(e.target).text("test");
      };
    })(this));
  };

  return Test;

})();
