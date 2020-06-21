const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    QUESTION:  Symbol("question"),
    TENTH:  Symbol("tenth"),
    TWELVE:  Symbol("twelve"),
    ENTRANCE_EXAM: Symbol("entrance_exam"),
    DECISION: Symbol("decision"),
    COLLEGE: Symbol("college"),
    JOB: Symbol("job")
});`        `

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "I am Sam. I am Creation of Mr. Ritesh Saxena. Lets play the game. Assume, You are in class 10th. Its time to decide which field you want to choose? Do you choose MATHS or BIOLOGY or COMMERCE?";
                this.stateCur = GameState.QUESTION;
                break;
            case GameState.QUESTION:
                if(sInput.toLowerCase().match("maths")){
                    sReply = "Its hard and challenging field. and now a days there are many engineers, so do you still wants to choose MATHS?";
                    this.stateCur = GameState.TENTH;
                }else if(sInput.toLowerCase().match("biology")){
                    sReply = "Becoming a good doctor is very tough now a days and very costly also. Do you really want to choose BIOLOGY?";
                    this.stateCur = GameState.TENTH;
                }else if(sInput.toLowerCase().match("commerce")){
                    sReply = "Commerce? Seriously? People will judge you? Juniors won't respect you? Are you sure you want to choose COMMERCE?";
                    this.stateCur = GameState.TENTH;
                }
                else{
                    sReply ="Do you want to do any thing in life or not? Choose Something, MATHS, BIOLOGY, COMMERCE";
                    this.stateCur = GameState.QUESTION;
                }
                break;
            case GameState.TENTH:
                if(sInput.toLowerCase().match("maths")){
                    sReply = "Okay Good. But you have to study maths daily for 4 hours. OKAY?";
                    this.stateCur = GameState.TWELVE;
                }else if(sInput.toLowerCase().match("biology")){
                    sReply = "You have to study biology for minimum 4 hours. OKAY?";
                    this.stateCur = GameState.TWELVE;
                }else if((sInput.toLowerCase().match("commerce"))){
                    sReply ="okay Good. But you have to play games for 4 hours. OKAY?";
                    this.stateCur = GameState.TWELVE;
                }else{
                    sReply ="Decide something bro. MATHS, BIOLOGY, COMMERCE?";
                    this.stateCur = GameState.TENTH;
                }
                break;
            case GameState.TWELVE:
                if(sInput.toLowerCase().match("okay")){
                    sReply = "Okay Good. Focus on Exams. So which entrance exam you are preparing? So many Exams are there like IIT, MEDICAL, CPA?";
                    this.stateCur = GameState.ENTRANCE_EXAM;
                }else{
                    sReply ="Think about your life ahead, OKAY?";
                    this.stateCur = GameState.TWELVE;
                }
                break;
            case GameState.ENTRANCE_EXAM:
                if(sInput.toLowerCase().match("iit")){
                    sReply = "Its the toughest exam? Are you sure you want to do this? Or say go for any international college? Okay Its your choice? YES or NO?"
                    this.stateCur = GameState.DECISION;
                }else if(sInput.toLowerCase().match("medical")){
                    sReply = "This is Medical bro. You have to study 5 years in College? Are you sure? YES or NO?"
                    this.stateCur = GameState.DECISION;
                }else if(sInput.toLowerCase().match("cpa")){
                    sReply = "In this case exam takes many years to clear it? It want to give? YES or NO?"
                    this.stateCur = GameState.DECISION;
                }else{
                    sReply = "Choose one option man? Don't say you want to do fashion designing?Choose one IIT or MEDICAL or CPA?";
                    this.stateCur = GameState.ENTRANCE_EXAM;
                }
                break;
            case GameState.DECISION:
            if(sInput.toLowerCase().match("yes")){
                sReply = "Cool. Prepare for it. Now you next phase of life begins. Its College Time. Which Branch you want to choose? IT? CS? EC? MECH?";
                this.stateCur = GameState.COLLEGE;
            }else{
                sReply = "Then What you want to do? Decide something YES or NO?";
                this.stateCur = GameState.DECISION;
            }
            break;
            case GameState.COLLEGE:
                if(sInput.toLowerCase().match("it")){
                    sReply = "Good. Information Technology is good branch.For next phase of life type NEXT.";
                    this.stateCur = GameState.JOB;
                }else if(sInput.toLowerCase().match("cs")){
                    sReply = "Good. Computer Science is good branch.For next phase of life type NEXT.";
                    this.stateCur = GameState.JOB;
                }else if(sInput.toLowerCase().match("ec")){
                    sReply = "Good. Electronics and Communication is good branch.For next phase of life type NEXT.";
                    this.stateCur = GameState.JOB;
                }else if(sInput.toLowerCase().match("mech")){
                    sReply = "Good. Mechanical is good branch.For next phase of life type NEXT.";
                    this.stateCur = GameState.JOB;
                }else{
                    sReply = "You have not decided anything. Decide anything IT, CS, EC, MECH?";
                    this.stateCur = GameState.COLLEGE;
                }
                break;
            case GameState.JOB:
                if(sInput.toLowerCase().match("next")){
                    sReply = "You enter a new world of adventure ... Now part 2 will begin? To play part 1 again, type PLAY.";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "THE END!! To play again type PLAY.";
                }
                this.stateCur = GameState.WELCOMING;
        }
        return([sReply]);
    }
}