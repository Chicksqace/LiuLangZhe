
window.onload=function(){
			var oDiv=document.getElementById("_imageDiv")
			var oUl=oDiv.getElementsByTagName("ul")[0];
			var aLi=oUl.getElementsByTagName("li");
			var oP=document.getElementById("prev");
			var iN=0
			oP.onclick=function(){
				aLi[iN].style.display="none"
				iN+=1;
			}
			var oN=document.getElementById("next");
			oN.onclick=function(){
				iN-=1
				aLi[iN].style.display="block"
			}
		}
