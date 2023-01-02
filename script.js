var yes = document.getElementById("yes");
var no = document.getElementById("no");
var answer = document.getElementsByClassName("answer");

no.addEventListener("click",function(){
	/*let answerpos = answer.getBoundingClientRect();*/
	let nopos = no.getBoundingClientRect();
	/*let offset = nopos.top - answerpos.top;*/
	if(nopos.top <= 290.875){
		no.style.transform = "translateY(100px)"
	}
	if(nopos.top > 290.875){
		no.style.transform = "translateY(-100px)"
	}
});

yes.addEventListener("click", function(){
	alert("Got You!!! ;)")
})