//게임 시작!
play.onclick = function(){
	main.style.display = "none";
	map1.style.display = "block";
}


//친구파트

  var aaa = "on";
  var bbb = "on";
  var ccc = "on";
  var ddd = "on";
  var eee = "on";
  var ggg = "on";


	var  astate = "off";
	fri1.onclick = function(){
			talk.style.display = "block";
			frisound.play();
			frisound.currentTime = 0;
	}



	Y1.onclick = function(){
			if (astate == "off") {
				talk.style.display = "none";
				nextyes1.style.display = "block";
				nextbutton1.style.display = "block";
				astate = "on";
			}
			else if (astate == "on") {
				nextyes1.style.display = "none";
				nextbutton1.style.display = "none";
				astate = "off";
			}
					
	}

			
	N1.onclick = function(){
		if (astate == "off") {
			talk.style.display = "none";
			nextno1.style.display = "block";
			outn1.style.display = "block";
			astate = "on";
		}
		else if (astate == "on") {
				nextno1.style.display = "none";
				outn1.style.display = "none";
				astate = "off";
			}
	}
		
		
	nextbutton1.onclick = function(){
		nextyes1.style.display = "none";
		nextnextyes1.style.display = "block";
	}


	NN1.onclick = function(){
		nextnextyes1.style.display = "none";
		nextnextno1.style.display = "block";
		nextnextout.style.display = "block";

	}
	outn1.onclick = function(){
		nextno1.style.display = "none";
		frisound.pause();
	}
	nextnextout.onclick = function(){
		nextnextno1.style.display = "none";
		fri1.style.display = "none";
		frisound.pause();
		fris.play();
		aaa = "off";

		Ending();
		
	}

//교수님 파트
var  bstate = "off";
	pro.onclick = function(){
			talk2.style.display = "block";
			prosound.play();
			prosound.currentTime = 2;
	}



	Y2.onclick = function(){
			if (bstate == "off") {
				talk2.style.display = "none";
				outy2.style.display = "block";
				bstate = "on";
			}
			else if (bstate == "on") {
				outy2.style.display = "none";
				bstate = "off";
			}
					
	}

	M2.onclick = function(){
			if (bstate == "off") {
				talk2.style.display = "none";
				nextmid2.style.display = "block";
				outm2.style.display = "block";
				bstate = "on";
			}
			else if (bstate == "on") {
				nextmid2.style.display = "none";
				outm2.style.display = "none";
				bstate = "off";
			}
					
	}
	
	outm2.onclick = function(){
		nextmid2.style.display = "none";
		pro.style.display = "none";
		prosound.pause();
		bbb = "off";
		pros.play();
		Ending();
	}

//컴퓨터실 꽃구경 거절 버튼
CN1.onclick = function(){
	textcom1.style.display = "none";
	ccc = "off";
	Ending();
}

//과방 낮잠 거절
RN2.onclick = function(){
	textre4.style.display = "none";
	ddd = "off";
	Ending();

}

//과방 낙서 거절
RN4.onclick = function(){
	textre6.style.display = "none";
	ggg = "off";
	Ending();
}

//컴퓨터 켜기 거절
CN3.onclick = function(){
	textcom7.style.display = "none";
	eee = "off";
	Ending();
}


//집갈래 버튼 진엔딩
var  dstate = "off";
	gohomereal.onclick = function(){
		if (dstate == "off") {
			homereal1.style.display = "block";
			dstate = "on";
			}else{ 
			dstate = "off";
			};
		}
	ghrN1.onclick = function(){
				homereal1.style.display = "none";
				}

//집갈래 버튼 낮잠편
var  cstate = "off";
	gohomeno.onclick = function(){
		if (cstate == "off") {
			homenormal1.style.display = "block";
			cstate = "on";
			}else{
			cstate = "off";
			};
		}
	ghnN1.onclick = function(){
				homenormal1.style.display = "none";
			
				}

//집갈래 버튼 핸드폰편
var  cstate = "off";
	gohomenor.onclick = function(){
		homenormal2.style.display = "block";
	}
		
	ghnN2.onclick = function(){
				homenormal2.style.display = "none";
			
				}


function Ending(){
	console.log(aaa,bbb,ccc,ddd,eee,ggg);
	if(aaa == "off" && bbb == "off" && ccc == "off"
		&& ddd == "off" && eee == "off" && ggg == "off"){
			console.log("ended!!");
			gohomereal.style.display = "block";
		}
}

