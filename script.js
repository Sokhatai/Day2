function exo() {
    var text = document.getElementById("input").value;      /* On récupère le texte entré */
    let games = text.split('Game');                        /* On sépare chaque "game" */
    let maxBlues = 14;
    let maxGreens = 13;
    let maxReds = 12;
    let result = 0;
    games.shift();
    for(let game of games){ 
        let gameId = game.match(/\d+/);                                          /*on récupère l'id de la partie*/
        let blues = game.match(/\d+ blue/g);
        let bluePossible = testNumber(blues, maxBlues);
        let greens = game.match(/\d+ green/g);
        let greenPossible = testNumber(greens, maxGreens);
        let reds = game.match(/\d+ red/g);
        console.log(reds);
        let redPossible = testNumber(reds, maxReds);                              /*on va tester pour chaque game si c'est possible avec le maximum de cube demandé */
        if (bluePossible && greenPossible && redPossible){
            result = result + parseInt(gameId);            
        }
    }
    let showResult = document.getElementById("result");
    showResult.innerHTML = "<p>Le résultat obtenu est " + result + "</p>";  /* On affiche le résultat obtenu */
}

function testNumber(cubes, max){
    if (cubes == null){
        return 1;
    }
    for (setOfCubes of cubes){
            numberOfCubes = parseInt(setOfCubes.match(/\d+/));
        if (numberOfCubes > max) {
            return 0;
        }
    }
    return 1;

}




const selection = document.getElementById("input");
selection.addEventListener("change", exo);



/*         let gameId = game.split(":")[0];               
let grabCubes = game.split(":")[1];                   
let cubesByPart = grabCubes.split(";");
for (let cubes of cubesByPart){
    console.log(cubes);
}*/