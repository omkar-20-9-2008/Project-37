class Question{

    constructor(){
        this.input = createInput("Name");
        this.input1 = createInput("Type the option number");
        this.title = createElement('h1')
        this.question = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.button = createButton('Submit');

        }
    
    hide(){
        this.input.hide();
        this.button.hide();


    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
        this.question.position(70,80);
        this.option1.html("1: Everyone ");
        this.option1.position(100,110);
        this.option2.html("2: Envelope ");
        this.option2.position(100,150);

        this.input.position(100,230);
        this.input1.position(300,230);
        this.button.position(200, 300);


        this.button.mousePressed(()=>{

            this.title.hide();
            this.input.hide();
            this.button.hide();
            this.input1.hide();
            contestant.name = this.input.value();
            contestantCount+=1;
            contestant.option = this.input1.value();
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            });
    }

}