$(document).ready(function() {
    var x = "x"
    var o = "o"
    var count, o_win, x_win;
    count = o_win = x_win = 0
    $('#game li').click(function(){
        if( rules_win(o) ){
            alert('O has won the game. Start a new game')
            reset()
        }else if( rules_win(x) ){
            alert('X wins has won the game. Start a new game')
            reset()
        }else if (count == 9){
            alert('Its a tie. It will restart.')
            reset()
        }else if ($(this).hasClass('disable')){
            alert('Already selected')
        }else if (count%2 == 0){
            play(o, this)
        }else{
            play(x, this)
        }
    });
    $("#reset").click( reset )
    function reset(){
        $("#game li").text("+");
        $("#game li").removeClass('disable o x btn-primary btn-info')
        count = 0
    }
    function play(player, selector){
        $(selector).text(player)
        $(selector).addClass(`disable ${player} ${player == x ? 'btn-primary' : 'btn-info'}`)
        if( rules_win(x) ) {
            winner(x)
        }else if(rules_win(o)){
            winner(o)
        }
        count++
    }
    function winner(player){
        alert(`${player} wins`)
        count = 0;
        player == x ? x_win++ : o_win++;
        $(`#${player}_win`).text(player  == x ? x_win : o_win)
    }
    function rules_win(player){
        if(player == x){
            if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
            {
                return true
            }
        }else if(player == o){
            if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
            {
                return true
            }
        }
        return false
    }
});
    
    