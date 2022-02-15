function adduser(){
    player1=document.getElementById("player1").value;
    player2=document.getElementById("player2").value;
localStorage.setItem("player_1",player1);
    localStorage.setItem("player_2",player2);
window.location="game_page.html";
}
