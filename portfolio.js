let a_propos_panels = document.getElementById("a_propos_panel");
let sub_a_propos = document.getElementById("sub_a_propos");

function togg(){
    if(getComputedStyle(sub_a_propos).display == "none"){
        sub_a_propos.style.display = "block";
    } else {
        sub_a_propos.style.display = "none";
    }
};
a_propos_panel.onclick = togg;






