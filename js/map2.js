var aa = "on";
var bb = "on";

//벚꽃 파트
var  astate = "off";
	flo.onclick = function(){
		if (astate == "off") {
			textcom1.style.display = "block";
			astate = "on";
			}else{ 
			astate = "off";
			};
		}

//첫번째 컴퓨터 파트
off1.onclick = function(){
		textcom2.style.display = "block";
	}
textcom2.onclick = function(){
			
		}

CY2.onclick = function(){
	onpro.style.display = "block";
	off1.style.display = "none";
	comon.play();
	textcom2.style.display = "none";
}

//과제하는 사람 파트
var  cstate = "off";
	person.onclick = function(){
		if (cstate == "off") {
			textcom3.style.display = "block";
			keyboard.play();
			cstate = "on";
			}else{ 
			
			cstate = "off";
			};
	}


CY3.onclick = function(){
	off4.style.display = "block";
	comoff.play();
}


textcom3.onclick = function(){
					textcom3.style.display = "none";
					keyboard.pause();
				}

var  dstate = "off";

	off2.onclick = function(){
		if (dstate == "off") {
			textcom4.style.display = "block";
			dstate = "on";
			}else{ 
			dstate = "off";
			};
		}
		textcom4.onclick = function(){
					textcom4.style.display = "none";
				}

var  estate = "off";
on1.onclick = function(){
	if (estate == "off") {
		textcom5.style.display = "block";
		estate = "on";
		}else{ 
		estate = "off";
		};
	}
	textcom5.onclick = function(){
				textcom5.style.display = "none";
			}

var  fstate = "off";
	off3.onclick = function(){
		if (fstate == "off") {
			textcom6.style.display = "block";
			fstate = "on";
			}else{ 
			fstate = "off";
			};
		}
		textcom6.onclick = function(){
					textcom6.style.display = "none";
				}

var  gstate = "off";
	on2.onclick = function(){
		if (gstate == "off") {
			textcom7.style.display = "block";
			gstate = "on";
			}else{ 
			gstate = "off";
			};
		}
	textcom7.onclick = function(){
				textcom7.style.display = "none";
			}

var hstate = "off";
	mem.onclick = function(){
		if (hstate == "off") {
			textcom8.style.display = "block";
			hstate = "on";
			}else{ 
			hstate = "off";
			};
		}
	CY4.onclick = function(){
				textcom8.style.display = "none";
				textcom8next.style.display = "block";
				nextmombutton.style.display = "block";
			}
	CN4.onclick = function(){
				textcom8.style.display = "none";
			}
	nextmombutton.onclick = function(){
				textcom8.style.display = "none";
				textcom8next.style.display = "none";
				textcom8nextne.style.display = "block";
			}
	CN5.onclick = function(){
				textcom8nextne.style.display = "none";
			}
	CY5.onclick = function(){
			textcom8nextne.style.display = "none";
			swipe.play();
			mem.style.display = "none";
			pho.style.display = "none";
			aa = "off";
			phoeEnding();
		}

	off4.onclick = function(){
		textcom4.style.display = "block";
	}
//바탕화면 컴퓨터
onpro.onclick = function(){
	textcom9.style.display = "block";
}
textcom9.onclick = function(){
	textcom9.style.display = "none";
}

//낙서 솔직히 말하기
outred.onclick = function(){
	textre9.style.display = "none";
	desk3.style.display = "none";
	clean.play();
	outres.style.display = "block";
	outres2.style.display = "none";
	bgmf.pause();
	fri2.style.display = "none";

	bb = "off";
	phoeEnding();
}


//핸드폰노멀엔딩버튼 나타나기
function phoeEnding(){
	console.log(aa);
	if(aa == "off" && bb == "off"){
			console.log("ended!!");
			gohomenor.style.display = "block";
		}
}
