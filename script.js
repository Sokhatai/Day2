function exo() {
    var text = document.getElementById("input").value;      /* On récupère le texte entré */
    let games = text.split('Game');                        /* On sépare chaque "game" */
    let maxBlues = 14;
    let maxGreens = 13;
    let maxReds = 12;
    let result = 0;
    let power = 0;
    games.shift();
    for(let game of games){ 
        let gameId = game.match(/\d+/);                                          /*on récupère l'id de la partie*/
        let blues = game.match(/\d+ blue/g);
        let bluePossible = testNumber(blues, maxBlues);
        let maxBluesNeeded = testMax(blues);
        let greens = game.match(/\d+ green/g);
        let greenPossible = testNumber(greens, maxGreens);
        let maxGreensNeeded = testMax(greens);
        let reds = game.match(/\d+ red/g);
        let redPossible = testNumber(reds, maxReds);
        let maxRedsNeeded = testMax(reds);                              /*on va tester pour chaque game si c'est possible avec le maximum de cube demandé et récupérer le maximun demandé*/
        if (bluePossible && greenPossible && redPossible){
            result = result + parseInt(gameId);            
        }
        power = power + (maxBluesNeeded*maxGreensNeeded*maxRedsNeeded);
    }
    let showResult = document.getElementById("result");
    showResult.innerHTML = "<p>Le résultat de ma première partie de l'exo est " + result + "</br> et " + power + " pour la deuxième partie </p>";  /* On affiche le résultat obtenu */
}

function testNumber(cubes, max){
    if (cubes == null){
        return 0;
    }
    for (setOfCubes of cubes){
            numberOfCubes = parseInt(setOfCubes.match(/\d+/));
        if (numberOfCubes > max) {
            return 0;
        }
    }
    return 1;

}

function testMax(cubes){
    let maxOfCubes = 0;
    if (cubes == null){
        return 0;
    }
    for (setOfCubes of cubes){
        console.log(setOfCubes);
        numberOfCubes = parseInt(setOfCubes.match(/\d+/));
        if (numberOfCubes > maxOfCubes){
            maxOfCubes = numberOfCubes;
        }
    }
    
    return maxOfCubes;
}


const selection = document.getElementById("input");
selection.addEventListener("change", exo);



/*         let gameId = game.split(":")[0];               
let grabCubes = game.split(":")[1];                   
let cubesByPart = grabCubes.split(";");
for (let cubes of cubesByPart){
    console.log(cubes);
}*/