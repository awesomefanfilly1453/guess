var player1_name=localStorage.getItem("player_1");
var player2_name=localStorage.getItem("player_2");

  var player1_sc=0;
  var player2_sc=0;

document.getElementById("player__1").innerHTML=player1_name+" : ";
document.getElementById("player__2").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_sc;
document.getElementById("player2_score").innerHTML=player2_sc;

document.getElementById("player_quest").innerHTML="Question turn : "+player1_name;
document.getElementById("player_ans").innerHTML="Answer turn : "+player2_name;

question_turn="player1";
ans_turn="player2";

function send(){
    var word=document.getElementById("word").value;
    getWord=word.toLowerCase();
    let1=getWord.charAt(1);
    length=getWord.length;
    x=Math.floor(length/2);
let2=getWord.charAt(x);
    let3=getWord.charAt(length-1);
    console.log(let1,let2,let3);
    
    remove_let1=getWord.replace(let1,"_");
    remove_let2=remove_let1.replace(let2,"_");
    remove_let3=remove_let2.replace(let3,"_");
    
    question="<h4 id='qn'>Q. "+remove_let3+"</h4>";
    input="<br>Answer : <input id='a'>";
    check="<br><br> <button class='btn btn-info' onclick='check1()'> Check </button>";
row=question+input+check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    
}
function check1() {
    get_ans=document.getElementById("a").value;
    answer=get_ans.toLowerCase();
    
    if (answer==getWord){
        
        if (ans_turn=="player1"){
            player1_sc=player1_sc+1;
            document.getElementById("player1_score").innerHTML=player1_sc;
        }
        else{
            player2_sc=player2_sc+1;
            document.getElementById("player2_score").innerHTML=player2_sc; 
        }
    }
    
    if (question_turn=="player1"){
    question_turn="player2";
        document.getElementById("player_quest").innerHTML="Question Turn= "+player2_name;
    }
    else {
        question_turn="player1";
        document.getElementById("player_quest").innerHTML="Question Turn= "+player1_name; 
    }
    
    
     if (ans_turn=="player1"){
    ans_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer Turn= "+player2_name;
    }
    else {
        question_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer Turn= "+player1_name; 
    }
    document.getElementById("output").innerHTML="";
    
    
}