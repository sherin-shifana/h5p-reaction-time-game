H5P.ReactionGame = (function ($, UI) {

  function C(options, id) {
    const that = this;
    that.options = options;
    // Keep provided id.
    that.id = id;
  };

  C.prototype.attach = function ($container) {
    const that = this;
    $container.addClass("h5p-reaction-time-game");
    const $mainContainer = $('<div class="main-container"></div>');
    $mainContainer.addClass('start-screen');
    $mainContainer.css('height', $(window).width()/4);

    $('<div class="start">Click here!!</div>').appendTo($mainContainer);
    const $startbutton = $('<div class="button-circle"><i class="fa fa-hand-o-up" aria-hidden="true"></i></div>');

    function setColor() {

      $mainContainer.empty();
      $mainContainer.css('background-color', "#36f950");
      this.createdTime = Date.now();
      $mainContainer.click(function(){
        afterClick();
      });
      console.log(this.createdTime);
    }
    function afterClick() {
      const that = this;
      this.clickedTime = Date.now();
      this.reactionTime = (this.clickedTime - that.createdTime) / 1000;
      $('<div>'+this.reactionTime+'</div>').appendTo($mainContainer);
    }
    function startFn() {
      const that = this;
      $mainContainer.empty();
      $mainContainer.css('background-color', "#42b0f4");
      $('<h1>Wait for Green</h1>').appendTo($mainContainer);

      let timeGroup = [2000, 3000, 4000, 5000];
      for (var i = 0; i < timeGroup.length; i++) {
        that.interval = timeGroup[Math.floor(Math.random() * i)];
      }
      console.log(that.interval);
      setTimeout(setColor, that.interval);
    }
    $startbutton.click(function() {
      startFn();
    });



    $startbutton.appendTo($mainContainer);
    $mainContainer.appendTo($container);
  };

  return C;
})(H5P.jQuery);
