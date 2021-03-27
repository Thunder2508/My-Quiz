
  
class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Your Name");
    this.input2 = createInput("Enter Your Option No..");
    this.button = createButton('Confirmed & Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What always comes down but never goes up ? " );
    this.question.position(400, 100);
    this.option1.html("1: Rain " );
    this.option1.position(400, 130);
    this.option2.html("2: Height " );
    this.option2.position(400, 160);
    this.option3.html("3: Ground " );
    this.option3.position(400, 190);
    this.option4.html("4: Tree " );
    this.option4.position(400, 220);

    this.input1.position(400, 300);
    this.input2.position(600, 300);
    this.button.position(450, 350);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}