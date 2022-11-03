export * from "./main.js";
// Ao clicar no botão jogar, a tela deverá carregar o tabuleiro 1.
// Ao todo teremos 4 tabeuleiros.
// Sempre que o usuário concluir um tabuleiro, deve receber os parabéns e a nova fase deve ser carregada.
// Ao final, deve ser apresentada a mensagem você venceu o jogo.
// 
// O padrão de cada tabuleiro será guardado dentro de um array.
// Se o usuário perder em qualquer fase, o tabulerio e a base deverão ser pintados na cor vermelha.
// Se vencer, deverão ser pintadas na cor azul.

class BoardGame {

    constructor(userName, gridBoard, gridNumbers){

        this.userName = userName;
        this.gridBoard = gridBoard;
        this.gridNumbers = gridNumbers;
        this.cursor = [
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_default.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_1.png"    ,
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_2.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_3.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_4.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_5.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_6.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_7.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_8.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_9.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_clear.png"
        ];

    }

    runBoard(){

        console.log(this.gridBoard);

    }

    secondBoard(){

    }

    thirdBoard(){

    }
    fourthBoard(){


    }






}

