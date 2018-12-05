var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 40;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;
var barWidth = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP/2, CLOUD_Y + GAP/2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP/2, CLOUD_Y + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    ctx.fillText(players[i], CLOUD_X + FONT_GAP + (GAP + barWidth ) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP/2 ) ;
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (GAP + barWidth ) * i, (CLOUD_Y + CLOUD_HEIGHT - FONT_GAP *1.25 - (BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillStyle = 'blue';
    if (players[i] === 'Вы'){
      ctx.fillStyle = 'red';
    }


    ctx.fillRect(CLOUD_X + FONT_GAP + (GAP + barWidth) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP , barWidth ,(-BAR_HEIGHT * times[i]) / maxTime);
  }
};
