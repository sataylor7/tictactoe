require(['../libs/jquery.noConflict', '../components/tictactoe.board', '../components/tictactoe.slider'], function(jq, board, slider){
    var container = jq('#tictactoeCont'),
        startBtn = jq('.start'),
        playAgainBtn = jq('.playAgain');

    board.render(container);
    startBtn.on('click',function(e){
        e.preventDefault();
        board.play();
    });

    playAgainBtn.on('click', function(e){
        e.preventDefault;
        startBtn.removeClass('hidden');
    });

    slider.render();

});