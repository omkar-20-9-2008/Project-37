class Quiz{

    constructor(){
        this.result = createElement('h1');
        this.note = createElement('h2');
        this.contestant1 = createElement('h2');
        this.contestant2 = createElement('h2');
        
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }


    update(state){
        database.ref('/'),update({
            gameState: state
        });
    }
    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();

        }
    }

    play(){
       background("yellow");
       this.result.html("Result of Quiz");
       this.result.position(350,0);
       this.note.html("Note : The Contestants who answered correct are highlighted in green colour.");
       this.note.position(70,200);
       getContestantInfo();


       for(var plr in allContestants){
           var correctAns = "2";
           if(correctAns === allContestants[plr].answer){
               fill("Green");
           }else {
               fill("Red");
           }
       }



    }

}