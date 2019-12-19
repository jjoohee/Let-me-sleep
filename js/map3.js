var aa = "on";
var bb = "on";
var cc = "on";


//벚꽃 파트
flo2.onclick = function(){
		textre1.style.display = "block";
	}

RN1.onclick = function(){
		textre1.style.display = "none";
		aa = "off";
		napEnding();
			}

//과건물 파트
win.onclick = function(){
			textre2.style.display = "block";
	}
textre2.onclick = function(){
			textre2.style.display = "none";
			}

//소파1 파트
sofa1.onclick = function(){
	textre3.style.display = "block";
	sleepbgm.play();
	sleepbgm.currentTime = 0;
	}
textre3.onclick = function(){
		textre3.style.display = "none";
		sleepbgm.pause();
	}

//소파2 - 낮잠 파트
sofa2.onclick = function(){
		textre4.style.display = "block";
	}
RY2.onclick = function(){
	heal.play();
	heal.currentTime = 0.5;
	nextRY2.style.display = "block";
	outRY2.style.display = "block";
	sofa2.style.display = "none";
	sofa3.style.display = "block";
}
outRY2.onclick = function(){
		nextRY2.style.display = "none";
		textre4.style.display = "none";
	bb = "off";
	napEnding();
		}

//소파3
	sofa3.onclick = function(){
			textre3s.style.display = "block";

		}
		textre3s.onclick = function(){
					textre3s.style.display = "none";
				}

//책상 1
desk1.onclick = function(){
		textre5.style.display = "block";

	}
textre5.onclick = function(){
				textre5.style.display = "none";
			}


//책상2 - 낙서 파트
desk2.onclick = function(){
		textre6.style.display = "block";
	}
RY4.onclick = function(){
	textre6.style.display = "none";
	draw.play();
	desk2.style.display = "none";
	desk3.style.display = "block";
}
//낙서된 책상
desk3.onclick = function(){
		textre7.style.display = "block";
		outres.style.display = "none";
		outres2.style.display = "block";
		fri2.style.display = "block"
}
textre7.onclick = function(){
				textre7.style.display = "none";
			}

//춤신춤왕 길막충
fri2.onclick = function(){
	textre8.style.display = "block";
	bgmf.play();
	bgmf.currentTime = 0;
}

RY5.onclick = function(){
	textre8.style.display = "none";
	textre9.style.display = "block";
	outred.style.display = "block";
}

RN5.onclick = function(){
	textre8.style.display = "none";
	textre10.style.display = "block";
}
RY7.onclick = function(){
	textre10.style.display = "none";
	textre9.style.display = "block";
	outred.style.display = "block";
}

//컴퓨터실 컴퓨터 켜기 거절 버튼
CN2.onclick = function(){
	textcom2.style.display = "none";
	cc = "off";
			napEnding();
}


//낮잠노멀엔딩버튼 나타나기
function napEnding(){
	console.log(aa,bb,cc);
	if(aa == "off" && bb == "off" && cc == "off"){
			console.log("ended!!");
			gohomeno.style.display = "block";
		}
}
