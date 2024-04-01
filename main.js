function addUser(){
    play1_name=document.getElementById("play1name").value;
    play2_name=document.getElementById("play2name").value;
    localStorage.setItem("play1_name",play1_name);
    localStorage.setItem("play2_name",play2_name);
    window.location.replace("game_page.html")
}
