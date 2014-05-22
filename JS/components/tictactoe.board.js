define(['jQuery', '../templates/templates'], function(jq, Templates){

   var cells = [0,0,0,0,0,0,0,0,0],
       winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
       turn = 0,
       cellsFilled = 0;
       //X = 1, O = 2


   return {
       render : function(container){
            var template = Handlebars.templates['tictactoe'];
            container.append(template(cells));
       },
	   clearBoard : function(){
			jq('.cell, .results').text('');
			jq('.playAgain').addClass('hidden');
			cells = [0,0,0,0,0,0,0,0,0];
	   },
       generateRandomNumber : function(){
         var number = Math.floor((Math.random() * 9) + 1);
         return number;
       },
       play : function(){
          var choice = this.generateRandomNumber();
              choiceNum = choice -1;

          /*
          * need to add to this logic, after 7 squares are filled must see whose turn it is and see if there are
          * any possible wins - otherwise it must end in a draw
          * at the moment this will end up in a forever loop
          */


          if(cells[choiceNum] === 0){
               console.log(choiceNum);
              if(turn%2 == 0){
                cells[choiceNum] = 1;
                jq('[data-cellid="'+choiceNum+'"]').text('X');
              }else{
                cells[choiceNum] = 2;
                jq('[data-cellid="'+choiceNum+'"]').text('O');
              }
              turn++;
              cellsFilled++;
              this.checkWinner(cells[choiceNum]);

              if(cellsFilled === 9){
                jq('.results').text('the game ended in a draw');
				jq('.start').addClass('hidden');
                jq('.playAgain').removeClass('hidden');
              }

          }else{
            console.log('try again');
            //this.play();
          }

          console.log(cells);
       },
       checkWinner : function(symbol){
            for(var i = 0; i < winningCombinations.length; i++){
                if(cells[winningCombinations[i][0]] == symbol && cells[winningCombinations[i][1]] == symbol && cells[winningCombinations[i][2]] == symbol){
					if(symbol === 1){
						symbol = 'X';
					}else{
						symbol = 'O';
					}
                    jq('.results').text(symbol + ' WON!');
                    jq('.start').addClass('hidden');
                    jq('.playAgain').removeClass('hidden');
                }
            }
       }
   }
});