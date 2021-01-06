let result = document.getElementById('result');
let userHealth = document.getElementById('userHealth');
let compHealth = document.getElementById('compHealth');
let userblock = document.getElementById('userblock');
let compblock = document.getElementById('compblock');
let buttons = document.querySelector('.buttons');
let fileNames=["Stone.png","Scissors.png","Papper.png"];
let path="images/";
let user = 5;
let comp = 5;
let myrand;
let intermediateResult;
let finalResult;

let matrix = [
    ["Draw", "Winner", "Loser"],
    ["Loser", "Draw", "Winner"],
    ["Winner", "Loser", "Draw"]
    ];

    function makeclick (newText) {
        numb = +newText;
        userblock.src = path + fileNames[numb];
        compchoice();
        verdict();
        raund();
        final();
                   }  

        let compchoice = () => {
        myrand = Math.floor(Math.random() * 3);
        compblock.src = path + fileNames[myrand];
                }   
                
        let verdict = () => {
            intermediateResult = matrix [numb][myrand];
            result.innerHTML = intermediateResult;
        }  
         
        let raund = () => {
            if (intermediateResult == "Winner"){comp--;}
            	else{
            		if (intermediateResult == "Loser"){user--;}
            	}
            	userHealth.innerHTML = user;
            	compHealth.innerHTML = comp;
        }

        let final = () => {
            if (user == 0){finalResult = "Game over!";}
            else{
                if(comp == 0){finalResult = "Congratulation!";}
                else {finalResult = intermediateResult;}
        }
        result.innerHTML = finalResult;
        end();
    }

    let end = () => {if (finalResult == "Congratulation!" || finalResult == "Game over!"){hiddenBtns();}}

    let hiddenBtns = () => {
        buttons.style.display="none";		   
    }
        
