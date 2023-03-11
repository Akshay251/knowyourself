var yes = document.getElementById("yes");
var no = document.getElementById("no");
var answer = document.getElementsByClassName("answer");

no.addEventListener("click",function(){
	alert("I knew it from the start ;)")
});

yes.addEventListener("onmouseover", function(){
	let nopos = yes.getBoundingClientRect();
	if(nopos.top <= 290.875){
		yes.style.transform = "translateY(100px)"
	}
	if(nopos.top > 290.875){
		yes.style.transform = "translateY(-100px)"
	}
})
