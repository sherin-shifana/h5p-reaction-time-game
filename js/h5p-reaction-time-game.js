H5P.ReactionGame = (function ($, UI) {

  function ReactionGame(options, id) {
    const that = this;
    that.options = options;
    that.id = id;
  };

  ReactionGame.prototype.attach = function ($container) {
    $container.append(this.options.taskDescription);
  };
  return ReactionGame;
})(H5P.jQuery);
