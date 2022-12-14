class BoardGame {

    constructor(userName, gridBoard, gridNumbers){

        this.userName = userName;
        this.gridBoard = gridBoard;
        this.gridNumbers = gridNumbers;
        this.cursor = [
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_default.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_1.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_2.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_3.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_4.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_5.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_6.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_7.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_8.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_9.png'),auto",
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/cursor_clear.png'),auto"
        ];
    }

    // Seleciona os números na tabela de opções inferior
    selectNumbers(){
            
        gridNumbers[1].addEventListener("click", (event) =>{

            if(gridNumbers[1].className == "numbers"){

                gridNumbers[1].className = "numbersOnClick";
                screenGame.style.cursor = this.cursor[1];
                this.selectGridBoardNumbers(1);
                this.calculateResult();         
            }else{

                gridNumbers[1].className = "numbers";
                screenGame.style.cursor = this.cursor[0];

            }

            
        });

        gridNumbers[2].addEventListener("click", () =>{

            if(gridNumbers[2].className == "numbers"){

                gridNumbers[2].className = "numbersOnClick";
                screenGame.style.cursor = this.cursor[2]
                this.selectGridBoardNumbers(2);
                this.calculateResult();
            }else{

                gridNumbers[2].className = "numbers";
                screenGame.style.cursor = this.cursor[0]
                
            }
           

        });

        gridNumbers[3].addEventListener("click", () =>{

            if(gridNumbers[3].className == "numbers"){

                gridNumbers[3].className = "numbersOnClick";
                screenGame.style.cursor = this.cursor[3];
                this.selectGridBoardNumbers(3);
                this.calculateResult();
            }else{

                gridNumbers[3].className = "numbers";
                screenGame.style.cursor = this.cursor[0];

            }
           

        });
        
        gridNumbers[4].addEventListener("click", () =>{

            if(gridNumbers[4].className == "numbers"){

                gridNumbers[4].className = "numbersOnClick";
                screenGame.style.cursor = this.cursor[4]
                this.selectGridBoardNumbers(4);
                this.calculateResult();

            }else{

                gridNumbers[4].className = "numbers";
                screenGame.style.cursor = this.cursor[0]
                

            }
           

        });
        gridNumbers[5].addEventListener("click", () =>{

            if(gridNumbers[5].className == "numbers"){

                gridNumbers[5].className = "numbersOnClick";
                screenGame.style.cursor = this.cursor[5]
                this.selectGridBoardNumbers(5);
                this.calculateResult();

            }else{

                gridNumbers[5].className = "numbers";
                screenGame.style.cursor = this.cursor[0]
              

            }
           

        });
        gridNumbers[6].addEventListener("click", () =>{

            if(gridNumbers[6].className == "numbers"){

                gridNumbers[6].className = "numbersOnClick";
                screenGame.style.cursor = this.cursor[6]
                this.selectGridBoardNumbers(6);
                this.calculateResult();
            }else{

                gridNumbers[6].className = "numbers";
                screenGame.style.cursor = this.cursor[0]

            }
           

        });
        gridNumbers[7].addEventListener("click", () =>{

            if(gridNumbers[7].className == "numbers"){

                gridNumbers[7].className = "numbersOnClick";
                screenGame.style.cursor = this.cursor[7]
                this.selectGridBoardNumbers(7);
                this.calculateResult();
            }else{

                gridNumbers[7].className = "numbers";
                screenGame.style.cursor = this.cursor[0]
            }
           

        });
        gridNumbers[8].addEventListener("click", () =>{

            if(gridNumbers[8].className == "numbers"){

                gridNumbers[8].className = "numbersOnClick";
                screenGame.style.cursor = this.cursor[8]
                this.selectGridBoardNumbers(8);
                this.calculateResult();
            }else{

                gridNumbers[8].className = "numbers";
                screenGame.style.cursor = this.cursor[0]

            }
           

        });
        gridNumbers[9].addEventListener("click", () =>{

            if(gridNumbers[9].className == "numbers"){

                gridNumbers[9].className = "numbersOnClick";
                screenGame.style.cursor = this.cursor[9]
                this.selectGridBoardNumbers(9);
                this.calculateResult();
            }else{

                gridNumbers[9].className = "numbers";
                screenGame.style.cursor = this.cursor[0]
            }
            
        });
       
    }

    // Seleciona o campo onde o número selecionado no métdo anterior será incluído.
    selectGridBoardNumbers(selectedNumber){
       
        gridBoardNumbers[0].addEventListener("click", () => {

            // Insere o número na posição desejada do tabuleiro.
            gridBoardNumbers[0].innerText = String(selectedNumber);

            

        });

        gridBoardNumbers[1].addEventListener("click", () => {

            gridBoardNumbers[1].innerText = String(selectedNumber);

            
        });
        gridBoardNumbers[2].addEventListener("click", () => {

            gridBoardNumbers[2].innerText = String(selectedNumber);

            
        });
        gridBoardNumbers[3].addEventListener("click", () => {

            gridBoardNumbers[3].innerText = String(selectedNumber);

            
        });
        gridBoardNumbers[4].addEventListener("click", () => {

            gridBoardNumbers[4].innerText = String(selectedNumber);

            
        });
        gridBoardNumbers[5].addEventListener("click", () => {

            gridBoardNumbers[5].innerText = String(selectedNumber);

            
        });
        gridBoardNumbers[6].addEventListener("click", () => {

            gridBoardNumbers[6].innerText = String(selectedNumber);

            
        });
        gridBoardNumbers[7].addEventListener("click", () => {

            gridBoardNumbers[7].innerText = String(selectedNumber);

            
        });
        gridBoardNumbers[8].addEventListener("click", () => {

            gridBoardNumbers[8].innerText = String(selectedNumber);            
            
            
        });


    }

    calculateResult(){

                
        let sumFirstRow = Number(gridBoardNumbers[0].innerText) * 
                      Number(gridBoardNumbers[1].innerText) - 
                      Number(gridBoardNumbers[2].innerText);
        
        let sumFirstColumn = Number(gridBoardNumbers[0].innerText) - 
                      Number(gridBoardNumbers[3].innerText) + 
                      Number(gridBoardNumbers[6].innerText);
        
        let sumThirdRow = Number(gridBoardNumbers[3].innerText) * 
                      Number(gridBoardNumbers[4].innerText) + 
                      Number(gridBoardNumbers[5].innerText);
        
        let sumThirdColumn = Number(gridBoardNumbers[1].innerText) * 
                      Number(gridBoardNumbers[4].innerText) - 
                      Number(gridBoardNumbers[7].innerText);
        
        let sumFifthRow = Number(gridBoardNumbers[6].innerText) + 
                      Number(gridBoardNumbers[7].innerText) + 
                      Number(gridBoardNumbers[8].innerText);
        
        let sumFifthColumn = Number(gridBoardNumbers[2].innerText) + 
                      Number(gridBoardNumbers[5].innerText) - 
                      Number(gridBoardNumbers[8].innerText);
                      

        console.log(`${sumFirstRow} == ${Number(gridBoardResult[0].innerText)}`)
        
        firstRow.addEventListener("click", () =>{

            if(sumFirstRow == Number(gridBoardResult[0].innerText)){
                firstRow.className = "firstRowRight";
                
                
            }else{
    
                firstRow.className = "firstRowWrong";
    
            }

        });
        
        
        if(sumThirdRow == Number(gridBoardResult[1].innerText)){
            thirdRow.className = "thirdRowRight";
            
        }else{

            
            thirdRow.className = "thirdRowWrong";

        }

        if(sumFifthRow == Number(gridBoardResult[2].innerText)){
            fifthRow.className = "fifthRowRight";
            
        }else{

            
            fifthRow.className = "fifthRowWrong";

        }
        if(sumFirstColumn == Number(gridBoardResult[3].innerText)){
            firstColumn.className = "firstColumnRight";
            
        }else{

            firstColumn.className = "firstColumnWrong";

        }
        
        if(sumThirdColumn == Number(gridBoardResult[4].innerText)){
            thirdColumn.className = "thirdColumnRight";
            
        }else{

            
            thirdColumn.className = "thirdColumnWrong";

        }

        if(sumFifthColumn == Number(gridBoardResult[5].innerText)){
            fifthColumn.className = "fifthColumnRight";
            
        }else{

            
            fifthColumn.className = "fifthColumnWrong";

        }
        

    }
    

    firstBoard(){
       // usuário seleciona os números a serem inserdos no tabuleiro
      
       this.selectNumbers();      

       

    }

    secondBoard(){

    }

    thirdBoard(){

    }
    fourthBoard(){


    }






}


let cont = 0;

// Elemento mais alto nível do HTML.
const screenGame = document.getElementById("screenGame");

//LAbel complementar ao input name.

const startLabel = document.getElementById("startLabel");

// Campo dentro do form onde o usuário irá inserir o nome.
const inputName = document.getElementById("inputName");

// Botão para iniciar o jogo
const btnStart = document.getElementById("btnStart");

//tag span que receberá o nome do usuário iniformado no inputName

const spanName = document.getElementById("name");

//Tag p que apresenta s mensagem de boa vinda incluindo o nome do usuário.

const welcomeMessage = document.getElementById("welcome");

// Representa todos os elementos que compõem o tabuleiro.
const gridBoard = document.getElementById("gridBoard");
// Representa os espaços que podem receber números
const gridBoardNumbers = document.querySelectorAll(".boardNumbers");

// Representa os símbolos artméticos que compõem o tabuleiro
const gridBoardSymbol = document.querySelectorAll(".boardSymbol");

// Representa o resultado apresentado, ao lado de cada linha ou coluna.
const gridBoardResult = document.querySelectorAll(".boardResult");

const firstRow = document.querySelectorAll(".firstRow");
const thirdRow = document.querySelectorAll(".thirdRow");
const fifthRow = document.querySelectorAll(".fifthRow");


const firstColumn = document.querySelectorAll(".firstColumn");
const thirdColumn = document.querySelectorAll(".thirdColumn");
const fifthColumn = document.querySelectorAll(".fifthColumn");

//Representa os números que compõem a base de seleção a ser utilizada no preenchimento do tabuleiro. 
const gridNumbers = document.querySelectorAll(".numbers");


btnStart.addEventListener("click", (event) => {

    event.preventDefault();

    if(inputName.value === ""){

        alert("Favor informar um nome!")
        
    }else{

        
        // Altera o nome da classe para que os dados de entrada sejam omitidos 
        startLabel.className = "dataInputFilled";
        inputName.className = "dataInputFilled";
        btnStart.className = "dataInputFilled";
        
        //Insere a frase de boas vindas e inicia o jogo


        //Atribui o nome do usuário à mensagem de boas vindas.
        
        spanName.innerHTML = inputName.value;

        
        //Insere a mensagem de boas vindas com o nome do usuário.
        
        welcomeMessage.className = "welcomeData";

    }

    settingUpGame();

});

function settingUpGame(){

    
    //Criar um objeto do tipo tabuleiro

    const match = new BoardGame(inputName.value, gridBoard.innerText, gridNumbers.innerText);
  
    //Aqui eu devo chamar os métdoso criados dentro da classe BoardGame.
    
    match.firstBoard()
    
    
    
    
    // Se o usuário vencer no primeiro cenário, apresentar a mensagem de felicitação e chamar o segundo cenário
    //match.endOfLevelMessage() pode ser negativa ou positiva.
    // se for negativa, deve apresentar mensagem lamentando e retornar para tela inicial, aguardando a inserção de um novo nome
    
    // Mesmos passos do firstBoard
    //match.secondBoard();

    //Mesmos passos do secondBoard
    //match.thirdBoard();

    // Se o usuário vencer apresentar as felicitações finais e volta para a tela inicial
    //match.fourthBoard()
    // Se o usuário perder, volta para tela inicial 


}