	// gouwu
window.onload=function(){
		let qqq1=document.getElementById("qqq1");
		let qqq2=document.getElementById("qqq2");
		// console.log(qqq1,qqq2);
		qqq1.onmouseenter=function() {
			qqq2.style.height="98px";
			qqq2.style.boxShadow="0 1px 5px 1px rgba(0,0,0,0.4)";
		}
		qqq1.onmouseleave=function() {
			qqq2.style.height="0";
			qqq2.style.boxShadow="none";
		}
	// 导航侧拉
		let lunbo=document.getElementsByClassName("lunbotu")[0];
		let lis=lunbo.getElementsByClassName("cdh");
		let chz=document.getElementsByClassName("chz");
		let dots=document.getElementsByClassName("huoqu11");
		let imgs=lunbo.getElementsByClassName("111");
		let banner=lunbo.getElementsByClassName("bt1");
		let leftjt=lunbo.querySelector(".sanjiao");
		let rightjt=lunbo.querySelector(".sanjiao1")
		console.log(leftjt,rightjt);
		for (let i=0;i<lis.length;i++) {
			lis[i].onmouseenter=function() {
				chz[i].style.display="block";
			}
			lis[i].onmouseleave=function() {
				chz[i].style.display="none";
			}
		}
	    //轮播图
		imgs[0].style.zIndex=10;
		
	    dots[0].style.background="#fff";
		//鼠标移入每一个轮播点
	    for(let i=0;i<dots.length;i++){
			dots[i].onmouseover=function(){
				//其余图片层级变为1/其余轮播点样式改变
				for(let j=0;j<imgs.length;j++){
					clearInterval(tt);
					imgs[j].style.zIndex=5;
					dots[j].style.background="#333";
				}
				tt=setInterval(move,2000);
				//对应的图片层级提高
				imgs[i].style.zIndex=10;
				//对应轮播点样式改变
				dots[i].style.background="#fff";
				num=i;
			}
	    }

		//自动轮播
	    let num=0;
	    let tt=setInterval(move,1500);
	    function move(){
			num++;
			if(num==imgs.length){
				num=0;
			}
			for(let i=0; i <imgs.length; i++){
			    	imgs[i].style.zIndex=5;
				    dots[i].style.background="#333";
			}
			imgs[num].style.zIndex=10;
			dots[num].style.background="#fff";
	    }


	    banner.onmouseover=function(){
			clearInterval(tt);
		}
		banner.onmouseout=function(){
			tt=setInterval(move,1500);
		}

		rightjt.onmouseover=function(){
			clearInterval(tt);
		}
		rightjt.onmouseout=function(){
			tt=setInterval(move,1500);
		}

		leftjt.onmouseover=function(){
			clearInterval(tt);
		}
		leftjt.onmouseout=function(){
			tt=setInterval(move,1500);
		}
		//左右箭头
		rightjt.onclick=function(){
			move();
		}
		leftjt.onclick=function(){
			num--;
			if (num<0) {
				num=4;
			}
			for(let i=0;i<imgs.length;i++){
				imgs[i].style.zIndex=5;
				dots[i].style.background="#333";
			}
			imgs[num].style.zIndex=10;
			dots[num].style.background="#fff";
		}



	    //导航栏下拉
		let daohangbox=document.getElementsByClassName("daohangbox")[0];
		let aa=daohangbox.getElementsByClassName("aa");
		let xiala=document.getElementsByClassName("xiala")[0];
		let xialabox=daohangbox.getElementsByClassName("xialabox");
		// console.log(daohangbox,aa,xiala,xialabox);

		for (let i=0;i<aa.length;i++){
			aa[i].onmouseenter=function() {
				for (let j=0;j<xialabox.length;j++){
					xialabox[j].style.height="230px";
					xialabox[j].style.display="none";
				}
				xiala.style.height="230px";
				xiala.style.boxShadow="0 1px 1px 1px rgba(0,0,0,0.4)";
				xiala.style.borderTop="1px solid rgba(0,0,0,0.4)"
				xialabox[i].style.display="block";
			}
			aa[i].onmouseleave=function() {
				xiala.style.height="0";
				xiala.style.boxShadow="none";
				xiala.style.borderTop="none";
				for (let j=0;j<aa.length;j++){
					xialabox[j].style.height="0";
				}
			}

		}





	//小米闪购

		let xiangou=document.querySelector(".shangou");
		let bottom1=xiangou.querySelector(".bottom");
		let box1=bottom1.querySelectorAll(".box");
		let top=xiangou.querySelector(".top");
		let zuo=top.querySelector(".box1");
		let you=top.querySelector(".box2");
		let kuandu=parseInt(getComputedStyle(bottom1,null).width)/3;
		// console.log(xiangou,bottom1,box1,top,zou,you,kuandu);

		let times=0;
		you.onclick=function(){
			times++;
			if(times==3){
				times=2;
			}
			
			bottom1.style.transform=`translateX(${-kuandu*times}px)`;
			
		}
		zuo.onclick=function(){
			times--;
			if(times<0){
				times=0;
			}
			bottom1.style.transform=`translateX(${-kuandu*times}px)`;
			
		}
	//con.style.transfrom="translateX("+(-kuandu*times)+px")";





	// // 家电
	// 	function xxk(zhineng){
	// 		// let zhineng=document.getElementsByClassName("zhineng")[0];
	// 		let lis1=zhineng.getElementsByTagName("li");
	// 		let bottom=zhineng.getElementsByClassName("bottom");
	// 		let hez111=zhineng.getElementsByClassName("hez111");
	// 		console.log(zhineng,lis1,hez111);
	// 		for (let i=0;i<lis1.length;i++) {
	// 			lis1[i].onmouseenter=function() {
	// 				for (let j=0;j<lis1.length;j++){
	// 					hez111[j].style.display="none";
	// 					lis1[j].style.color="#000";
	// 					lis1[j].style.borderBottom="none"
	// 				}
	// 				hez111[i].style.display="block";
	// 				lis1[i].style.color="#ff6700";
	// 				lis1[i].style.borderBottom="2px solid #ff6700";
	// 			}
	// 		}
	// 	}
	// 	let zhineng=document.getElementsByClassName("zhineng")[0];
	// 	let zhineng1=document.getElementsByClassName("zhineng")[1];
	// 	let zhineng2=document.getElementsByClassName("zhineng")[2];
	// 	xxk(zhineng);

	//智能家电
	let zhineng=document.getElementsByClassName("zhineng");
	// console.log(zhineng);
	let listli=document.querySelectorAll(".beijing .zhineng .top ul li");
	let bottomli=document.querySelectorAll(".beijing .zhineng .bottom");
	let hez111=document.getElementsByClassName("hez111");
	// console.log(listli,bottomli,hez111);

	function xxka(zhineng){
		for (let i=0;i<listli.length;i++) {
				listli[i].onmouseenter=function() {
					for (let j=0;j<listli.length;j++){
						hez111[j].style.display="none";
						listli[j].style.color="#000";
						listli[j].style.borderBottom="none"
					}
					hez111[i].style.display="block";
					listli[i].style.color="#ff6700";
					listli[i].style.borderBottom="2px solid #ff6700";
				}
			}
	}
	xxka(zhineng);




	//哈利波特

	
	let hlbanner1=document.querySelectorAll(".beijing .neirong .bottom .box")[0];
	let hlbanner2=document.querySelectorAll(".beijing .neirong .bottom .box")[1];
	let hlbanner3=document.querySelectorAll(".beijing .neirong .bottom .box")[2];
	let hlbanner4=document.querySelectorAll(".beijing .neirong .bottom .box")[3];

	let hldots=hlbanner1.querySelectorAll(".dian dl");
	let hldots1=hlbanner2.querySelectorAll(".dian dl");
	let hldots2=hlbanner3.querySelectorAll(".dian dl");
	let hldots3=hlbanner4.querySelectorAll(".dian dl");

	let hlimgs=hlbanner1.querySelectorAll("li");
	let hlimgs1=hlbanner2.querySelectorAll("li");
	let hlimgs2=hlbanner3.querySelectorAll("li");
	let hlimgs3=hlbanner4.querySelectorAll("li");

	let xuqiu=document.querySelectorAll(".beijing .neirong .bottom .box li")[0];
	let hlwidths=parseInt(getComputedStyle(xuqiu,null).width);

	let hlleftbtn=hlbanner1.querySelector(".hez.hez1");
	let hlrightbtn=hlbanner1.querySelector(".hez.hez2");
	let hlleftbtn1=hlbanner2.querySelector(".hez.hez1");
	let hlrightbtn1=hlbanner2.querySelector(".hez.hez2");
	let hlleftbtn2=hlbanner3.querySelector(".hez.hez1");
	let hlrightbtn2=hlbanner3.querySelector(".hez.hez2");
	let hlleftbtn3=hlbanner4.querySelector(".hez.hez1");
	let hlrightbtn3=hlbanner4.querySelector(".hez.hez2");

	// console.log(hlbanner1,hldots,hlimgs,hlwidths,hlleftbtn,hlrightbtn);
	function halibote(hldots,hlimgs,hlleftbtn,hlrightbtn){
	let hlnow=0;
	let hlnext=0;


	let hlflag=true;
	hldots[0].classList.add("hot1");
	hlimgs[0].style.left=0;
	for(let i=0; i<hldots.length;i++){
		hldots[i].onmouseover = function(){
			for(let j=0;j<hldots.length;j++){
				hldots[j].classList.remove("hot1");
				hlimgs[j].style.left= -hlwidths+"px";
			}
			hldots[i].classList.add("hot1");
			hlimgs[i].style.left=0;
		}
	}
	function hlmove(){
		hlnext++;
		if(hlnext==hlimgs.length){
			hlnext=0;
		}
		hlimgs[hlnow].style.left=0;
		hlimgs[hlnext].style.left= hlwidths +"px";
		animate(hlimgs[hlnow],{left:-hlwidths},function(){
			for(let j=0;j<hldots.length;j++){
				hldots[j].classList.remove("hot1");
				hlflag=true;
			}
		});
		animate(hlimgs[hlnext],{left:0},function(){
			hldots[hlnext].classList.add("hot1");
			hlflag=true;
		});
		hlnow=hlnext;
	}
	function hlmoveL(){
		if(!hlflag){
			return;
		}
		hlflag=false;
		hlnext--;
		if (hlnext==-1) {
			hlnext=hlimgs.length-1;
		}
		hlimgs[hlnow].style.left=0;
		hlimgs[hlnext].style.left= -hlwidths +"px";
		animate(hlimgs[hlnow],{left:hlwidths},function(){
			for(let j=0;j<hldots.length;j++){
				hldots[j].classList.remove("hot1");
				hlflag=true;
			}
		});
		animate(hlimgs[hlnext],{left:0},function(){
			hldots[hlnext].classList.add("hot1");
			hlflag=true;
		});
		hlnow=hlnext;
	}

	hlrightbtn.onclick=function(){
		if(!hlflag){
			return;
		}
		hlflag=false;
		hlmove();
	}
	hlleftbtn.onclick=function(){
		hlmoveL();
	}
	}
	halibote(hldots,hlimgs,hlleftbtn,hlrightbtn);
	halibote(hldots1,hlimgs1,hlleftbtn1,hlrightbtn1);
	halibote(hldots2,hlimgs2,hlleftbtn2,hlrightbtn2);
	halibote(hldots3,hlimgs3,hlleftbtn3,hlrightbtn3);

	// //遮盖
	//  //    //1.获取元素
	// 	let boxx=document.getElementsByClassName("tu1")[0];
	// 	let cover=document.querySelectorAll(".cover");
	// 	console.log(boxx,cover);
	// 	//2.操作,鼠标移入
	// 	boxx.onmouseover=function(){
	// 		cover.style.opacity=1;
	// 	}
	// 	//鼠标移出
	// 	boxx.onmouseout=function(){
	// 		cover.style.opacity=0;
	// 	}



}

