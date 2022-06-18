// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){
    
    // screen move//////////////////////////////////////////////////
	function isMobile() {
		let user = navigator.userAgent;
		let is_mobile = false;
		if( user.indexOf("iPhone") > -1 
		|| user.indexOf("Android") > -1 
		|| user.indexOf("iPad") > -1 
		|| user.indexOf("iPod") > -1 )
		{
			is_mobile = true; 
		}
		return is_mobile;
	}

	var is_mobile = isMobile();

	// let main_img = document.querySelector(".mainImg");
    let canvas1 = document.querySelector("#canvas1");
    let ctx1 = canvas1.getContext("2d");
    let canvas2 = document.querySelector("#canvas2");
    let ctx2 = canvas2.getContext("2d");
    let canvas3 = document.querySelector("#canvas3");
    let ctx3 = canvas3.getContext("2d");
    let canvas4 = document.querySelector("#canvas4");
    let ctx4 = canvas4.getContext("2d");
    let canvas5 = document.querySelector("#canvas5");
    let ctx5 = canvas5.getContext("2d");
    let canvas6 = document.querySelector("#canvas6");
    let ctx6 = canvas6.getContext("2d");
    let canvas7 = document.querySelector("#canvas7");
    let ctx7 = canvas7.getContext("2d");
    let canvas8 = document.querySelector("#canvas8");
    let ctx8 = canvas8.getContext("2d");
    let canvas9 = document.querySelector("#canvas9");
    let ctx9 = canvas9.getContext("2d");

	let mouseX;
	let mouseY;
    let dragX;
    let dragY;
    let positionX;
    let positionY;

    let red1 = Math.floor(Math.random() * 21) + 235;
    let green1 = Math.floor(Math.random() * 21) + 235;
    let blue1 = Math.floor(Math.random() * 21) + 235;

    let red2 = Math.floor(Math.random() * 21) + 235;
    let green2 = Math.floor(Math.random() * 21) + 235;
    let blue2 = Math.floor(Math.random() * 21) + 235;

    let red3 = Math.floor(Math.random() * 21) + 235;
    let green3 = Math.floor(Math.random() * 21) + 235;
    let blue3 = Math.floor(Math.random() * 21) + 235;

    let red4 = Math.floor(Math.random() * 156);
    let green4 = Math.floor(Math.random() * 56) + 200;
    let blue4 = Math.floor(Math.random() * 86);

    let red5 = Math.floor(Math.random() * 156);
    let green5 = Math.floor(Math.random() * 56) + 200;
    let blue5 = Math.floor(Math.random() * 86);

    let red6 = Math.floor(Math.random() * 156);
    let green6 = Math.floor(Math.random() * 56) + 200;
    let blue6 = Math.floor(Math.random() * 86);

    let psN1 = 1;
    let psN2_1 = 1;
    let psN2_2 = 1;
    let psN3_1 = 1;
    let psN3_2 = 1;
    let psN4 = 1;
    let psN5_1 = 1;
    let psN5_2 = 1;
    let psN6_1 = 1;
    let psN6_2 = 1;
    let psN7_1 = 1;
    let psN7_2 = 1;
    let psN8_1 = 1;
    let psN8_2 = 1;
    let psN9_1 = 1;
    let psN9_2 = 1;

    let mNx1 = 245;
    let mNy1 = 170;
    let mNx2 = 165;
    let mNy2 = 160;
    let mNx3 = 220;
    let mNy3 = 160;
    let mN4 = 0;
    let mN5 = 0;
    let mNx6 = 275;
    let mNy6 = 50;
    let mNx7 = 200;
    let mNy7 = 0;
    let mNx8 = 200;
    let mNy8 = -20;
    let mN9 = 0;

    let widthX1 = 300;
    let heightY1 = 300;
    let widthX2 = 300;
    let heightY2 = 1200;
    let widthX3 = 400;

    let minusScreenX1 = 100;
    let minusScreenY1 = 200;
    let minusScreenX2 = 350;
    let minusScreenY2 = 650;
    let minusScreenX3 = 160;
    let minusScreenY3 = 320;
    let minusScreenX6 = 50;
    let minusScreenY6 = 50;
    let minusScreenX7 = 50;
    let minusScreenY7 = 50;
    let minusScreenX8 = 50;
    let minusScreenY8 = 50;

    function drawShape1(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas1 = document.querySelector("#canvas1");
        ctx1 = canvas1.getContext("2d");
        canvas1.width = widthX1 * psN1 + minusScreenX1;
        canvas1.height = heightY1 * psN1 + minusScreenY1;
        ctx1.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx1.fillStyle = 'rgba(' + red1 + ', ' + green1 + ', ' + blue1 + ')';
        ctx1.beginPath();
        ctx1.moveTo((409 - mNx1) * x1, (609 - mNy1) * y1);
        ctx1.bezierCurveTo((370 - mNx1) * x1_1, (612 - mNy1) * y1_1, (317 - mNx1) * x2_1, (580 - mNy1) * y2_1, (298 - mNx1) * x2, (518 - mNy1) * y2);
        ctx1.bezierCurveTo((272 - mNx1) * x2_2, (433 - mNy1) * y2_2, (328 - mNx1) * x3_1, (294 - mNy1) * y3_1, (340 - mNx1) * x3, (251 - mNy1) * y3);
        ctx1.bezierCurveTo((348 - mNx1) * x3_2, (223 - mNy1) * y3_2, (378 - mNx1) * x4_1, (198 - mNy1) * y4_1, (406 - mNx1) * x4, (198 - mNy1) * y4);
        ctx1.bezierCurveTo((438 - mNx1) * x4_2, (198 - mNy1) * y4_2, (452 - mNx1) * x5_1, (222 - mNy1) * y5_1, (461 - mNx1) * x5, (246 - mNy1) * y5);
        ctx1.bezierCurveTo((483 - mNx1) * x5_2, (302 - mNy1) * y5_2, (500 - mNx1) * x6_1, (443 - mNy1) * y6_1, (467 - mNx1) * x6, (475 - mNy1) * y6);
        ctx1.bezierCurveTo((382 - mNx1) * x6_2, (559 - mNy1) * y6_2, (453 - mNx1) * x7_1, (605 - mNy1) * y7_1, (409 - mNx1) * x7, (609 - mNy1) * y7);
        ctx1.closePath();
        ctx1.fill();
        // canvas1.style.marginTop = '' + -canvas1.width / 10 * 5 + 'px';
        // canvas1.style.marginLeft = '' + -canvas1.height / 10 * 5 + 'px';
    }

    function drawShape2(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas2 = document.querySelector("#canvas2");
        ctx2 = canvas2.getContext("2d");
        canvas2.width = widthX1 * psN2_1 + minusScreenX2;
        canvas2.height = heightY1 * psN2_2 + minusScreenY2;
        ctx2.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx2.fillStyle = 'rgba(' + red2 + ', ' + green2 + ', ' + blue2 + ')';
        ctx2.beginPath();
        ctx2.moveTo((368 - mNx2) * x1, (623 - mNy2) * y1);
        ctx2.bezierCurveTo((329 - mNx2) * x1_1, (629 - mNy2) * y1_1, (389 - mNx2) * x2_1, (554 - mNy2) * y2_1, (329 - mNx2) * x2, (501 - mNy2) * y2);
        ctx2.bezierCurveTo((280 - mNx2) * x2_2, (458 - mNy2) * y2_2, (293 - mNx2) * x3_1, (348 - mNy2) * y3_1, (324 - mNx2) * x3, (254 - mNy2) * y3);
        ctx2.bezierCurveTo((331 - mNx2) * x3_2, (233 - mNy2) * y3_2, (346 - mNx2) * x4_1, (196 - mNy2) * y4_1, (391 - mNx2) * x4, (190 - mNy2) * y4);
        ctx2.bezierCurveTo((416 - mNx2) * x4_2, (187 - mNy2) * y4_2, (447 - mNx2) * x5_1, (209 - mNy2) * y5_1, (451 - mNx2) * x5, (236 - mNy2) * y5);
        ctx2.bezierCurveTo((462 - mNx2) * x5_2, (308 - mNy2) * y5_2, (503 - mNx2) * x6_1, (440 - mNy2) * y6_1, (489 - mNx2) * x6, (507 - mNy2) * y6);
        ctx2.bezierCurveTo((480 - mNx2) * x6_2, (550 - mNy2) * y6_2, (433 - mNx2) * x7_1, (614 - mNy2) * y7_1, (368 - mNx2) * x7, (623 - mNy2) * y7);
        ctx2.closePath();
        ctx2.fill();
        // canvas2.style.marginTop = '' + -canvas2.width / 10 * 5 + 'px';
        // canvas2.style.marginLeft = '' + -canvas2.height / 10 * 5 + 'px';
    }

    function drawShape3(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas3 = document.querySelector("#canvas3");
        ctx3 = canvas3.getContext("2d");
        canvas3.width = widthX1 * psN3_1 + minusScreenX3;
        canvas3.height = heightY1 * psN3_2 + minusScreenY3;
        ctx3.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx3.fillStyle = 'rgba(' + red3 + ', ' + green3 + ', ' + blue3 + ')';
        ctx3.beginPath();
        ctx3.moveTo((397 - mNx3) * x1, (589 - mNy3) * y1);
        ctx3.bezierCurveTo((348 - mNx3) * x1_1, (588 - mNy3) * y1_1, (312 - mNx3) * x2_1, (520 - mNy3) * y2_1, (302 - mNx3) * x2, (471 - mNy3) * y2);
        ctx3.bezierCurveTo((291 - mNx3) * x2_2, (415 - mNy3) * y2_2, (327 - mNx3) * x3_1, (281 - mNy3) * y3_1, (343 - mNx3) * x3, (216 - mNy3) * y3);
        ctx3.bezierCurveTo((347 - mNx3) * x3_2, (200 - mNy3) * y3_2, (366 - mNx3) * x4_1, (173 - mNy3) * y4_1, (395 - mNx3) * x4, (174 - mNy3) * y4);
        ctx3.bezierCurveTo((429 - mNx3) * x4_2, (175 - mNy3) * y4_2, (448 - mNx3) * x5_1, (204 - mNy3) * y5_1, (454 - mNx3) * x5, (219 - mNy3) * y5);
        ctx3.bezierCurveTo((473 - mNx3) * x5_2, (267 - mNy3) * y5_2, (510 - mNx3) * x6_1, (366 - mNy3) * y6_1, (503 - mNx3) * x6, (450 - mNy3) * y6);
        ctx3.bezierCurveTo((497 - mNx3) * x6_2, (518 - mNy3) * y6_2, (452 - mNx3) * x7_1, (589 - mNy3) * y7_1, (397 - mNx3) * x7, (589 - mNy3) * y7);
        ctx3.closePath();
        ctx3.fill();
        // canvas3.style.marginTop = '' + -canvas3.width / 10 * 5 + 'px';
        // canvas3.style.marginLeft = '' + -canvas3.height / 10 * 5 + 'px';
    }

    function drawShape4(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas4 = document.querySelector("#canvas4");
        ctx4 = canvas4.getContext("2d");
        canvas4.width = widthX1 * psN4 + 50;
        canvas4.height = heightY1 * psN4 + 50;
        ctx4.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx4.fillStyle = 'rgba(' + red4 + ', ' + green4 + ', ' + blue4 + ')';
        ctx4.beginPath();
        ctx4.moveTo((510 - mN4) * x1, (308 - mN4) * y1);
        ctx4.bezierCurveTo((434 - mN4) * x1_1, (354 - mN4) * y1_1, (348 - mN4) * x2_1, (366 - mN4) * y2_1, (329 - mN4) * x2, (458 - mN4) * y2);
        ctx4.bezierCurveTo((316 - mN4) * x2_2, (521 - mN4) * y2_2, (378 - mN4) * x3_1, (575 - mN4) * y3_1, (440 - mN4) * x3, (591 - mN4) * y3);
        ctx4.bezierCurveTo((571 - mN4) * x3_2, (625 - mN4) * y3_2, (549 - mN4) * x4_1, (728 - mN4) * y4_1, (667 - mN4) * x4, (723 - mN4) * y4);
        ctx4.bezierCurveTo((763 - mN4) * x4_2, (719 - mN4) * y4_2, (830 - mN4) * x5_1, (603 - mN4) * y5_1, (813 - mN4) * x5, (508 - mN4) * y5);
        ctx4.bezierCurveTo((799 - mN4) * x5_2, (430 - mN4) * y5_2, (745 - mN4) * x6_1, (371 - mN4) * y6_1, (704 - mN4) * x6, (331 - mN4) * y6);
        ctx4.bezierCurveTo((658 - mN4) * x6_2, (286 - mN4) * y6_2, (578 - mN4) * x7_1, (266 - mN4) * y7_1, (510 - mN4) * x7, (308 - mN4) * y7);
        ctx4.closePath();
        ctx4.fill();
        // canvas4.style.marginTop = '' + -canvas4.width / 10 * 5 + 'px';
        // canvas4.style.marginLeft = '' + -canvas4.height / 10 * 5 + 'px';
    }

    function drawShape5(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas5 = document.querySelector("#canvas5");
        ctx5 = canvas5.getContext("2d");
        canvas5.width = widthX1 * psN5_1 + 50;
        canvas5.height = heightY1 * psN5_2 + 50;
        ctx5.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx5.fillStyle = 'rgba(' + red1 + ', ' + green2 + ', ' + blue4 + ')';
        ctx5.beginPath();
        ctx5.moveTo((360 - mN5) * x1, (506 - mN5) * y1);
        ctx5.bezierCurveTo((369 - mN5) * x1_1, (572 - mN5) * y1_1, (459 - mN5) * x2_1, (620 - mN5) * y2_1, (523 - mN5) * x2, (600 - mN5) * y2);
        ctx5.bezierCurveTo((598 - mN5) * x2_2, (577 - mN5) * y2_2, (622 - mN5) * x3_1, (513 - mN5) * y3_1, (673 - mN5) * x3, (474 - mN5) * y3);
        ctx5.bezierCurveTo((722 - mN5) * x3_2, (436 - mN5) * y3_2, (849 - mN5) * x4_1, (435 - mN5) * y4_1, (873 - mN5) * x4, (358 - mN5) * y4);
        ctx5.bezierCurveTo((894 - mN5) * x4_2, (290 - mN5) * y4_2, (795 - mN5) * x5_1, (278 - mN5) * y5_1, (729 - mN5) * x5, (273 - mN5) * y5);
        ctx5.bezierCurveTo((668 - mN5) * x5_2, (268 - mN5) * y5_2, (557 - mN5) * x6_1, (287 - mN5) * y6_1, (477 - mN5) * x6, (332 - mN5) * y6);
        ctx5.bezierCurveTo((396 - mN5) * x6_2, (378 - mN5) * y6_2, (354 - mN5) * x7_1, (444 - mN5) * y7_1, (360 - mN5) * x7, (506 - mN5) * y7);
        ctx5.closePath();
        ctx5.fill();
        // canvas5.style.marginTop = '' + -canvas5.width / 10 * 5 + 'px';
        // canvas5.style.marginLeft = '' + -canvas5.height / 10 * 5 + 'px';
    }

    function drawShape6(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, y5_1) {
        canvas6 = document.querySelector("#canvas6");
        ctx6 = canvas6.getContext("2d");
        canvas6.width = widthX2 * psN6_1 + minusScreenX6;
        canvas6.height = heightY2 * psN6_2 + minusScreenY6;
        ctx6.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx6.fillStyle = 'rgba(' + red4 + ', ' + green4 + ', ' + blue4 + ')';
        ctx6.beginPath();
        ctx6.moveTo((369 - mNx6) * x1, (712 - mNy6) * y1);
        ctx6.bezierCurveTo((422 - mNx6) * x1_1, (487 - mNy6) * y1_1, (418 - mNx6) * x2_1, (298 - mNy6) * y2_1, (369 - mNx6) * x2, (109 - mNy6) * y2);
        ctx6.bezierCurveTo((365 - mNx6) * x2_2, (94 - mNy6) * y2_2, (391 - mNx6) * x3_1, (86 - mNy6) * y3_1, (395 - mNx6) * x3, (100 - mNy6) * y3);
        ctx6.bezierCurveTo((449 - mNx6) * x3_2, (297 - mNy6) * y3_2, (448 - mNx6) * x4_1, (479 - mNy6) * y4_1, (396 - mNx6) * x4, (716 - mNy6) * y4);
        ctx6.bezierCurveTo((393 - mNx6) * x4_2, (731 - mNy6) * y4_2, (365 - mNx6) * x5_1, (723 - mNy6) * y5_1, (369 - mNx6) * x5, (712 - mNy6) * y5);
        ctx6.closePath();
        ctx6.fill();
        // canvas6.style.marginTop = '' + -canvas6.width / 10 * 5 + 'px';
        // canvas6.style.marginLeft = '' + -canvas6.height / 10 * 5 + 'px';
    }

    function drawShape7(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, y6_1, x6_2, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas7 = document.querySelector("#canvas7");
        ctx7 = canvas7.getContext("2d");
        canvas7.width = widthX3 * psN7_1 + minusScreenX7;
        canvas7.height = heightY2 * psN7_2 + minusScreenY7;
        ctx7.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx7.fillStyle = 'rgba(' + red5 + ', ' + green5 + ', ' + blue5 + ')';
        ctx7.beginPath();
        ctx7.moveTo((411 - mNx7) * x1, (516 - mNy7) * y1);
        ctx7.bezierCurveTo((402 - mNx7) * x1_1, (479 - mNy7) * y1_1, (392 - mNx7) * x2_1, (420 - mNy7) * y2_1, (362 - mNx7) * x2, (347 - mNy7) * y2);
        ctx7.bezierCurveTo((330 - mNx7) * x2_2, (269 - mNy7) * y2_2, (234 - mNx7) * x3_1, (163 - mNy7) * y3_1, (240 - mNx7) * x3, (149 - mNy7) * y3);
        ctx7.bezierCurveTo((246 - mNx7) * x3_2, (135 - mNy7) * y3_2, (311 - mNx7) * x4_1, (200 - mNy7) * y4_1, (381 - mNx7) * x4, (280 - mNy7) * y4);
        ctx7.bezierCurveTo((410 - mNx7) * x4_2, (313 - mNy7) * y4_2, (459 - mNx7) * x5_1, (406 - mNy7) * y5_1, (466 - mNx7) * x5, (465 - mNy7) * y5);
        ctx7.bezierCurveTo((477 - mNx7) * x5_2, (546 - mNy7) * y5_2, (487 - mNx7) * x6_1, (645 - mNy7) * y6_1, (473 - mNx7) * x6, (647 - mNy7) * y6);
        ctx7.bezierCurveTo((458 - mNx7) * x6_2, (650 - mNy7) * y6_2, (426 - mNx7) * x7_1, (578 - mNy7) * y7_1, (411 - mNx7) * x7, (516 - mNy7) * y7);
        ctx7.closePath();
        ctx7.fill();
        // canvas7.style.marginTop = '' + -canvas7.width / 10 * 5 + 'px';
        // canvas7.style.marginLeft = '' + -canvas7.height / 10 * 5 + 'px';
    }

    function drawShape8(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, y6_1, x6_2, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas8 = document.querySelector("#canvas8");
        ctx8 = canvas8.getContext("2d");
        canvas8.width = widthX3 * psN8_1 + minusScreenX8;
        canvas8.height = heightY2 * psN8_2 + minusScreenY8;
        ctx8.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx8.fillStyle = 'rgba(' + red6 + ', ' + green6 + ', ' + blue6 + ')';
        ctx8.beginPath();
        ctx8.moveTo((250 - mNx8) * x1, (418 - mNy8) * y1);
        ctx8.bezierCurveTo((236 - mNx8) * x1_1, (415 - mNy8) * y1_1, (241 - mNx8) * x2_1, (366 - mNy8) * y2_1, (261 - mNx8) * x2, (331 - mNy8) * y2);
        ctx8.bezierCurveTo((295 - mNx8) * x2_2, (272 - mNy8) * y2_2, (341 - mNx8) * x3_1, (270 - mNy8) * y3_1, (362 - mNx8) * x3, (222 - mNy8) * y3);
        ctx8.bezierCurveTo((372 - mNx8) * x3_2, (199 - mNy8) * y3_2, (363 - mNx8) * x4_1, (173 - mNy8) * y4_1, (379 - mNx8) * x4, (131 - mNy8) * y4);
        ctx8.bezierCurveTo((396 - mNx8) * x4_2, (85 - mNy8) * y4_2, (423 - mNx8) * x5_1, (38 - mNy8) * y5_1, (434 - mNx8) * x5, (39 - mNy8) * y5);
        ctx8.bezierCurveTo((444 - mNx8) * x5_2, (40 - mNy8) * y5_2, (392 - mNx8) * x6_1, (212 - mNy8) * y6_1, (375 - mNx8) * x6, (244 - mNy8) * y6);
        ctx8.bezierCurveTo((327 - mNx8) * x6_2, (333 - mNy8) * y6_2, (267 - mNx8) * x7_1, (420 - mNy8) * y7_1, (250 - mNx8) * x7, (418 - mNy8) * y7);
        ctx8.closePath();
        ctx8.fill();
        // canvas8.style.marginTop = '' + -canvas8.width / 10 * 5 + 'px';
        // canvas8.style.marginLeft = '' + -canvas8.height / 10 * 5 + 'px';
    }

    function drawShape9(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, y6_1) {
        canvas9 = document.querySelector("#canvas9");
        ctx9 = canvas9.getContext("2d");
        canvas9.width = widthX2 * psN9_1 + 50;
        canvas9.height = heightY2 * psN9_2 + 50;
        ctx9.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx9.fillStyle = 'rgba(' + red2 + ', ' + green3 + ', ' + blue4 + ')';
        ctx9.beginPath();
        ctx9.moveTo((689 - mN9) * x1, (251 - mN9) * y1);
        ctx9.bezierCurveTo((587 - mN9) * x1_1, (162 - mN9) * y1_1, (449 - mN9) * x2_1, (114 - mN9) * y2_1, (356 - mN9) * x2, (185 - mN9) * y2);
        ctx9.bezierCurveTo((255 - mN9) * x2_2, (261 - mN9) * y2_2, (318 - mN9) * x3_1, (349 - mN9) * y3_1, (261 - mN9) * x3, (456 - mN9) * y3);
        ctx9.bezierCurveTo((217 - mN9) * x3_2, (539 - mN9) * y3_2, (165 - mN9) * x4_1, (778 - mN9) * y4_1, (322 - mN9) * x4, (836 - mN9) * y4);
        ctx9.bezierCurveTo((445 - mN9) * x4_2, (881 - mN9) * y4_2, (724 - mN9) * x5_1, (736 - mN9) * y5_1, (795 - mN9) * x5, (540 - mN9) * y5);
        ctx9.bezierCurveTo((835 - mN9) * x5_2, (429 - mN9) * y5_2, (772 - mN9) * x6_1, (329 - mN9) * y6_1, (689 - mN9) * x6, (251 - mN9) * y6);
        ctx9.closePath();
        ctx9.fill();
        // mX = (window.innerWidth * 2) + 2630;
        // minusX = mX / window.innerWidth;
        // canvas9.style.marginTop = '' + -canvas9.width / 10 * 5 + 'px';
        // canvas9.style.marginLeft = '' + -canvas9.height / 10 * 5 + 'px';
    }
    
    function moveShape() {

        sN1_1 = 0.9;
        sN1_2 = 1.1;
        sN2_1 = 1.7;
        sN2_2 = 2;
        sN3_1 = 1.2;
        sN3_2 = 1.4;
        sN4_1 = 1;
        sN4_2 = 1;
        sN5_1 = 1;
        sN5_2 = 1;
        sN6_1 = 1.5;
        sN6_2 = 1.5;
        sN7_1 = 1.4;
        sN7_2 = 1.4;
        sN8_1 = 1.7;
        sN8_2 = 1.7;
        sN9_1 = 1;
        sN9_2 = 1;

        pN1_1 = 0.5;
        pN1_2 = 0.05;
        pN1_3 = 0.02;
        pN1_4 = 0.01;
        pN1_5 = 0.005;
        pN1_6 = 0.001;

        pN2_1 = 0.3;
        pN2_2 = 0.05;
        pN2_3 = 0.02;
        pN2_4 = 0.01;
        pN2_5 = 0.005;
        pN2_6 = 0.001;

        pN3_1 = 0.1;
        pN3_2 = 0.05;
        pN3_3 = 0.02;
        pN3_4 = 0.01;
        pN3_5 = 0.005;
        pN3_6 = 0.001;

        pN4_1 = 1;
        pN4_2 = 0.05;
        pN4_3 = 0.02;
        pN4_4 = 0.01;
        pN4_5 = 0.005;
        pN4_6 = 0.001;

        pN5_0 = 1;
        pN5_1 = 0.05;
        pN5_2 = 0.02;
        pN5_3 = 0.01;
        pN5_4 = 0.005;
        pN5_5 = 0.002;
        pN5_6 = 0.001;

        pN6_1 = 1;
        pN6_2 = 0.05;
        pN6_3 = 0.02;
        pN6_4 = 0.01;
        pN6_5 = 0.005;
        pN6_6 = 0.001;

        pN7_1 = 0.1;
        pN7_2 = 0.05;
        pN7_3 = 0.02;
        pN7_4 = 0.01;
        pN7_5 = 0.005;
        pN7_6 = 0.001;

        pN8_1 = 0.3;
        pN8_2 = 0.05;
        pN8_3 = 0.02;
        pN8_4 = 0.01;
        pN8_5 = 0.005;
        pN8_6 = 0.001;

        pN9_1 = 1;
        pN9_2 = 0.05;
        pN9_3 = 0.02;
        pN9_4 = 0.01;
        pN9_5 = 0.005;
        pN9_6 = 0.001;

        macWidth = window.innerWidth;
        macHeight = window.innerHeight;
        
        bX1 = sN1_1 + dragX * pN1_1 / macWidth;
        bY1 = sN1_2 + dragY * pN1_1 / macHeight;
        bX2 = sN1_1 + -dragX * pN1_2 / macWidth;
        bY2 = sN1_2 + -dragY * pN1_2 / macHeight;
        bX3 = sN1_1 + dragX * pN1_3 / macWidth;
        bY3 = sN1_2 + dragY * pN1_3 / macHeight;
        bX4 = sN1_1 + -dragX * pN1_4 / macWidth;
        bY4 = sN1_2 + -dragY * pN1_4 / macHeight;
        bX5 = sN1_1 + dragX * pN1_5 / macWidth;
        bY5 = sN1_2 + dragY * pN1_5 / macHeight;
        bX6 = sN1_1 + -dragX * pN1_6 / macWidth;
        bY6 = sN1_2 + -dragY * pN1_6 / macHeight;

        bX7 = sN2_1 + dragX * pN2_1 / window.innerWidth;
        bY7 = sN2_2 + dragY * pN2_1 / window.innerHeight;
        bX8 = sN2_1 + -dragX * pN2_2 / window.innerWidth;
        bY8 = sN2_2 + -dragY * pN2_2 / window.innerHeight;
        bX9 = sN2_1 + dragX * pN2_3 / window.innerWidth;
        bY9 = sN2_2 + dragY * pN2_3 / window.innerHeight;
        bX10 = sN2_1 + -dragX * pN2_4 / window.innerWidth;
        bY10 = sN2_2 + -dragY * pN2_4 / window.innerHeight;
        bX11 = sN2_1 + dragX * pN2_5 / window.innerWidth;
        bY11 = sN2_2 + dragY * pN2_5 / window.innerHeight;
        bX12 = sN2_1 + -dragX * pN2_6 / window.innerWidth;
        bY12 = sN2_2 + -dragY * pN2_6 / window.innerHeight;

        bX13 = sN3_1 + dragX * pN3_1 / window.innerWidth;
        bY13 = sN3_2 + dragY * pN3_1 / window.innerHeight;
        bX14 = sN3_1 + -dragX * pN3_2 / window.innerWidth;
        bY14 = sN3_2 + -dragY * pN3_2 / window.innerHeight;
        bX15 = sN3_1 + dragX * pN3_3 / window.innerWidth;
        bY15 = sN3_2 + dragY * pN3_3 / window.innerHeight;
        bX16 = sN3_1 + -dragX * pN3_4 / window.innerWidth;
        bY16 = sN3_2 + -dragY * pN3_4 / window.innerHeight;
        bX17 = sN3_1 + dragX * pN3_5 / window.innerWidth;
        bY17 = sN3_2 + dragY * pN3_5 / window.innerHeight;
        bX18 = sN3_1 + -dragX * pN3_6 / window.innerWidth;
        bY18 = sN3_2 + -dragY * pN3_6 / window.innerHeight;

        bX19 = sN4_1 + dragX * pN4_1 / window.innerWidth;
        bY19 = sN4_2 + dragY * pN4_1 / window.innerHeight;
        bX20 = sN4_1 + -dragX * pN4_2 / window.innerWidth;
        bY20 = sN4_2 + -dragY * pN4_2 / window.innerHeight;
        bX21 = sN4_1 + dragX * pN4_3 / window.innerWidth;
        bY21 = sN4_2 + dragY * pN4_3 / window.innerHeight;
        bX22 = sN4_1 + -dragX * pN4_4 / window.innerWidth;
        bY22 = sN4_2 + -dragY * pN4_4 / window.innerHeight;
        bX23 = sN4_1 + dragX * pN4_5 / window.innerWidth;
        bY23 = sN4_2 + dragY * pN4_5 / window.innerHeight;
        bX24 = sN4_1 + -dragX * pN4_6 / window.innerWidth;
        bY24 = sN4_2 + -dragY * pN4_6 / window.innerHeight;

        bX25 = sN5_1 + -dragX * pN5_1 / window.innerWidth;
        bY25 = sN5_2 + -dragY * pN5_1 / window.innerHeight;
        bX26 = sN5_1 + dragX * pN5_2 / window.innerWidth;
        bY26 = sN5_2 + dragY * pN5_2 / window.innerHeight;
        bX27 = sN5_1 + dragX * pN5_3 / window.innerWidth;
        bY27 = sN5_2 + dragY * pN5_3 / window.innerHeight;
        bX28 = sN5_1 + -dragX * pN5_4 / window.innerWidth;
        bY28 = sN5_2 + -dragY * pN5_4 / window.innerHeight;
        bX29 = sN5_1 + dragX * pN5_5 / window.innerWidth;
        bY29 = sN5_2 + dragY * pN5_5 / window.innerHeight;
        bX30 = sN5_1 + -dragX * pN5_6 / window.innerWidth;
        bY30 = sN5_2 + -dragY * pN5_6 / window.innerHeight;

        bX31 = sN6_1 + dragX * pN6_1 / window.innerWidth;
        bY31 = sN6_2 + dragY * pN6_1 / window.innerHeight;
        bX32 = sN6_1 + -dragX * pN6_2 / window.innerWidth;
        bY32 = sN6_2 + -dragY * pN6_2 / window.innerHeight;
        bX33 = sN6_1 + dragX * pN6_3 / window.innerWidth;
        bY33 = sN6_2 + dragY * pN6_3 / window.innerHeight;
        bX34 = sN6_1 + -dragX * pN6_4 / window.innerWidth;
        bY34 = sN6_2 + -dragY * pN6_4 / window.innerHeight;
        bX35 = sN6_1 + dragX * pN6_5 / window.innerWidth;
        bY35 = sN6_2 + dragY * pN6_5 / window.innerHeight;
        bX36 = sN6_1 + -dragX * pN6_6 / window.innerWidth;
        bY36 = sN6_2 + -dragY * pN6_6 / window.innerHeight;

        bX37 = sN7_1 + dragX * pN7_1 / window.innerWidth;
        bY37 = sN7_2 + dragY * pN7_1 / window.innerHeight;
        bX38 = sN7_1 + -dragX * pN7_2 / window.innerWidth;
        bY38 = sN7_2 + -dragY * pN7_2 / window.innerHeight;
        bX39 = sN7_1 + dragX * pN7_3 / window.innerWidth;
        bY39 = sN7_2 + dragY * pN7_3 / window.innerHeight;
        bX40 = sN7_1 + -dragX * pN7_4 / window.innerWidth;
        bY40 = sN7_2 + -dragY * pN7_4 / window.innerHeight;
        bX41 = sN7_1 + dragX * pN7_5 / window.innerWidth;
        bY41 = sN7_2 + dragY * pN7_5 / window.innerHeight;
        bX42 = sN7_1 + -dragX * pN7_6 / window.innerWidth;
        bY42 = sN7_2 + -dragY * pN7_6 / window.innerHeight;

        bX43 = sN8_1 + dragX * pN8_1 / window.innerWidth;
        bY43 = sN8_2 + dragY * pN8_1 / window.innerHeight;
        bX44 = sN8_1 + -dragX * pN8_2 / window.innerWidth;
        bY44 = sN8_2 + -dragY * pN8_2 / window.innerHeight;
        bX45 = sN8_1 + dragX * pN8_3 / window.innerWidth;
        bY45 = sN8_2 + dragY * pN8_3 / window.innerHeight;
        bX46 = sN8_1 + -dragX * pN8_4 / window.innerWidth;
        bY46 = sN8_2 + -dragY * pN8_4 / window.innerHeight;
        bX47 = sN8_1 + dragX * pN8_5 / window.innerWidth;
        bY47 = sN8_2 + dragY * pN8_5 / window.innerHeight;
        bX48 = sN8_1 + -dragX * pN8_6 / window.innerWidth;
        bY48 = sN8_2 + -dragY * pN8_6 / window.innerHeight;

        bX49 = sN9_1 + dragX * pN9_1 / window.innerWidth;
        bY49 = sN9_2 + dragY * pN9_1 / window.innerHeight;
        bX50 = sN9_1 + -dragX * pN9_2 / window.innerWidth;
        bY50 = sN9_2 + -dragY * pN9_2 / window.innerHeight;
        bX51 = sN9_1 + dragX * pN9_3 / window.innerWidth;
        bY51 = sN9_2 + dragY * pN9_3 / window.innerHeight;
        bX52 = sN9_1 + -dragX * pN9_4 / window.innerWidth;
        bY52 = sN9_2 + -dragY * pN9_4 / window.innerHeight;
        bX53 = sN9_1 + dragX * pN9_5 / window.innerWidth;
        bY53 = sN9_2 + dragY * pN9_5 / window.innerHeight;
        bX54 = sN9_1 + -dragX * pN9_6 / window.innerWidth;
        bY54 = sN9_2 + -dragY * pN9_6 / window.innerHeight;
        
        drawShape1(bX6, bY5, bX6, bY5, 
            bX3, bY4, bX3, bX3, bY4, bY4, 
            bX2, bY3, bX2, bX2, bY3, bY3, 
            bX3, bY1, bX3, bX3, bY1, bY1, 
            bX4, bY5, bX4, bX4, bY5, bY5, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX6, bY5, bX6, bY5);

        drawShape2(bX11, bY12, bX11, bY12, 
            bX8, bY9, bX8, bX8, bY9, bY9, 
            bX7, bY8, bX8, bX7, bY8, bY8, 
            bX8, bY7, bX8, bX8, bY7, bY7, 
            bX9, bY8, bX9, bX9, bY8, bY8, 
            bX10, bY11, bX10, bX10, bY11, bY11, 
            bX11, bY12, bX11, bY12);

        drawShape3(bX18, bY17, bX18, bY17, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX14, bY13, bX14, bX14, bY13, bY13, 
            bX13, bY14, bX13, bX13, bY14, bY14, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX16, bY17, bX16, bX16, bY17, bY17, 
            bX18, bY17, bX18, bY17);

        // drawShape4(bX21, bY19, bX21, bY19, 
        //     bX19, bY20, bX19, bX19, bY20, bY20, 
        //     bX20, bY23, bX20, bX20, bY23, bY23,
        //     bX24, bY21, bX24, bX24, bY21, bY21, 
        //     bX23, bY24, bX23, bX23, bY24, bY24, 
        //     bX24, bY23, bX24, bX24, bY23, bY23, 
        //     bX21, bY19, bX21, bY19);

        // drawShape5(bX27, bY26, bX27, bY26, 
        //     bX28, bY29, bX28, bX28, bY29, bY29, 
        //     bX29, bY30, bX29, bX29, bY30, bY30, 
        //     bX28, bY29, bX28, bX28, bY29, bY29, 
        //     bX27, bY25, bX27, bX27, bY25, bY25, 
        //     bX26, bY26, bX26, bX26, bY26, bY26, 
        //     bX27, bY26, bX27, bY26);

        drawShape6(bX36, bY35, bX36, bY35, 
            bX33, bY34, bX33, bX33, bY34, bY34, 
            bX32, bY33, bX32, bX32, bY33, bY33, 
            bX35, bY36, bX35, bX35, bY36, bY36, 
            bX36, bY35, bX36, bY35);

        drawShape7(bX42, bY41, bX42, bY41, 
            bX39, bY38, bX39, bX39, bY38, bY38, 
            bX38, bY37, bX38, bX38, bY37, bY37, 
            bX37, bY38, bX37, bX37, bY38, bY38, 
            bX40, bY39, bX40, bX40, bY39, bY39, 
            bX41, bY40, bX41, bX41, bY40, bY40, 
            bX42, bY41, bX42, bY41);

        drawShape8(bX43, bY48, bX43, bY48, 
            bX44, bY45, bX44, bX44, bY45, bY45, 
            bX45, bY44, bX45, bX45, bY44, bY44, 
            bX46, bY45, bX46, bX46, bY45, bY45, 
            bX48, bY43, bX48, bX48, bY43, bY43,
            bX45, bY44, bX45, bX45, bY44, bY44, 
            bX43, bY48, bX43, bY48);

        // drawShape9(bX51, bY50, bX51, bY50, 
        //     bX50, bY51, bX50, bX50, bY51, bY51, 
        //     bX51, bY52, bX51, bX51, bY52, bY52, 
        //     bX53, bY54, bX53, bX53, bY54, bY54, 
        //     bX52, bY51, bX52, bX52, bY51, bY51, 
        //     bX51, bY50, bX51, bY50);
    }

    function stopShape() {

        let bN1x = 0.9;
        let bN1y = 1.1;
        let bN2x = 1.7;
        let bN2y = 2;
        let bN3x = 1.2;
        let bN3y = 1.4;
        let bN4x = 1;
        let bN4y = 1;
        let bN5x = 1;
        let bN5y = 1;
        let bN6x = 1.5;
        let bN6y = 1.5;
        let bN7x = 1.4;
        let bN7y = 1.4;
        let bN8x = 1.7;
        let bN8y = 1.7;
        let bN9x = 1;
        let bN9y = 1;
    
        drawShape1(bN1x, bN1y, bN1x, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1y);

        drawShape2(bN2x, bN2y, bN2x, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2y);

        drawShape3(bN3x, bN3y, bN3x, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3y);

        // drawShape4(bN4x, bN4y, bN4x, bN4y, 
        //     bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
        //     bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
        //     bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
        //     bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
        //     bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
        //     bN4x, bN4y, bN4x, bN4y);

        // drawShape5(bN5x, bN5y, bN5x, bN5y, 
        //     bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
        //     bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
        //     bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
        //     bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
        //     bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
        //     bN5x, bN5y, bN5x, bN5y);

        drawShape6(bN6x, bN6y, bN6x, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6y);

        drawShape7(bN7x, bN7y, bN7x, bN7y, 
            bN7x, bN7y, bN7x, bN7x, bN7y, bN7y, 
            bN7x, bN7y, bN7x, bN7x, bN7y, bN7y, 
            bN7x, bN7y, bN7x, bN7x, bN7y, bN7y, 
            bN7x, bN7y, bN7x, bN7x, bN7y, bN7y, 
            bN7x, bN7y, bN7x, bN7x, bN7y, bN7y, 
            bN7x, bN7y, bN7x, bN7y);

        drawShape8(bN8x, bN8y, bN8x, bN8y, 
            bN8x, bN8y, bN8x, bN8x, bN8y, bN8y, 
            bN8x, bN8y, bN8x, bN8x, bN8y, bN8y, 
            bN8x, bN8y, bN8x, bN8x, bN8y, bN8y, 
            bN8x, bN8y, bN8x, bN8x, bN8y, bN8y, 
            bN8x, bN8y, bN8x, bN8x, bN8y, bN8y, 
            bN8x, bN8y, bN8x, bN8y);

        // drawShape9(bN9x, bN9y, bN9x, bN9y, 
        //     bN9x, bN9y, bN9x, bN9x, bN9y, bN9y, 
        //     bN9x, bN9y, bN9x, bN9x, bN9y, bN9y, 
        //     bN9x, bN9y, bN9x, bN9x, bN9y, bN9y, 
        //     bN9x, bN9y, bN9x, bN9x, bN9y, bN9y, 
        //     bN9x, bN9y, bN9x, bN9y);
    }

    stopShape();

    function mixBlendMode1() {
        canvasGroup1.style['mix-blend-mode'] = 'difference';
        canvasGroup1.style['-webkit-mix-blend-mode'] = 'difference';
        canvasGroup2.style['mix-blend-mode'] = 'difference';
        canvasGroup2.style['-webkit-mix-blend-mode'] = 'difference';
        canvas1.style['mix-blend-mode'] = 'difference';
        canvas1.style['-webkit-mix-blend-mode'] = 'difference';
        canvas2.style['mix-blend-mode'] = 'difference';
        canvas2.style['-webkit-mix-blend-mode'] = 'difference';
        canvas3.style['mix-blend-mode'] = 'difference';
        canvas3.style['-webkit-mix-blend-mode'] = 'difference';
        canvas4.style['mix-blend-mode'] = 'difference';
        canvas4.style['-webkit-mix-blend-mode'] = 'difference';
        canvas5.style['mix-blend-mode'] = 'difference';
        canvas5.style['-webkit-mix-blend-mode'] = 'difference';
        canvas6.style['mix-blend-mode'] = 'difference';
        canvas6.style['-webkit-mix-blend-mode'] = 'difference';
        canvas7.style['mix-blend-mode'] = 'difference';
        canvas7.style['-webkit-mix-blend-mode'] = 'difference';
        canvas8.style['mix-blend-mode'] = 'difference';
        canvas8.style['-webkit-mix-blend-mode'] = 'difference';
        canvas9.style['mix-blend-mode'] = 'difference';
        canvas9.style['-webkit-mix-blend-mode'] = 'difference';
    }

    function mouseControl1() {
        moveShape();
    }

    function mouseControl2() {
        stopShape();
    }

    let ugoku = 1;
    let tomaru = 0;
    let purupuru = ugoku;

    function shapeAndObject() {
        if(purupuru == ugoku) {
            mouseControl1();
        }else{
            mouseControl2();
        }
    }

	if( is_mobile ) {

        mixBlendMode1();

        document.addEventListener("touchstart", (e) => {
			dragX = e.touches[0].clientX;
			dragY = e.touches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
		document.addEventListener("touchmove", (e) => {
			dragX = e.changedTouches[0].clientX;
			dragY = e.changedTouches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
		document.addEventListener("touchend", (e) => {
			dragX = e.changedTouches[0].clientX;
			dragY = e.changedTouches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
	} else {
		// tranlate images in pc
		document.addEventListener("mousemove", (e) => {
			mouseX = -e.clientX * 5 / window.innerWidth;
			mouseY = -e.clientY * 10 / window.innerHeight;
            dragX = e.clientX;
			dragY = e.clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
	}

    // browser check & event//////////////////////////////////////////////////
    var agent = window.navigator.userAgent.toLowerCase();
	var browserName;
	switch (true) {
		case agent.indexOf("edge") > -1: 
			browserName = "MS Edge"; // MS 엣지
			break;
		case agent.indexOf("edg/") > -1: 
			browserName = "Edge (chromium based)"; // 크롬 기반 엣지
			break;
		case agent.indexOf("opr") > -1 && !!window.opr: 
			browserName = "Opera"; // 오페라
			break;
		case agent.indexOf("chrome") > -1 && !!window.chrome: 
			browserName = "Chrome"; // 크롬
			break;
		case agent.indexOf("trident") > -1: 
			browserName = "MS IE"; // 익스플로러
			break;
		case agent.indexOf("firefox") > -1: 
			browserName = "Mozilla Firefox"; // 파이어 폭스
			break;
		case agent.indexOf("safari") > -1: 
			browserName = "Safari"; // 사파리
			break;
		default: 
			browserName = "other"; // 기타
	}

    if(browserName == "Safari") {
        mixBlendMode1();
    }

    //viewport transition//////////////////////////////////////////////////
    window.onresize = function(event){
        stopShape();
    }

    // flower motion//////////////////////////////////////////////////
    let hana = document.querySelector(".hana");
    let hanamove = document.querySelector(".hanamove");
    let canvasGroup1 = document.querySelector("#canvasGroup1");
    let canvasGroup2 = document.querySelector("#canvasGroup2");
    let zyouro = document.querySelector("#zyouro");
    let eiyouzai1 = document.querySelector("#eiyouzai1");
    let eiyouzai2 = document.querySelector("#eiyouzai2");
    let eiyouzai3 = document.querySelector("#eiyouzai3");

    const sound1 = new Audio();
    sound1.src = "../sound1/sound1.mp3";
    const sound2 = new Audio();
    sound2.src = "../sound1/sound2.mp3";
    const sound3 = new Audio();
    sound3.src = "../sound1/sound3.mp3";
    const sound4 = new Audio();
    sound4.src = "../sound1/sound4.mp3";
    const sound5 = new Audio();
    sound5.src = "../sound1/sound5.mp3";
    const sound6 = new Audio();
    sound6.src = "../sound1/sound6.mp3";
    const sound7 = new Audio();
    sound7.src = "../sound1/sound7.mp3";
    const sound8 = new Audio();
    sound8.src = "../sound1/sound8.mp3";
    const sound9 = new Audio();
    sound9.src = "../sound1/sound9.mp3";
    const sound10 = new Audio();
    sound10.src = "../sound1/sound10.mp3";
    const sound11 = new Audio();
    sound11.src = "../sound1/sound11.mp3";
    const sound12 = new Audio();
    sound12.src = "../sound1/sound12.mp3";
    const sound13 = new Audio();
    sound13.src = "../sound1/sound13.mp3";
    const sound14 = new Audio();
    sound14.src = "../sound1/sound14.mp3";
    const sound15 = new Audio();
    sound15.src = "../sound1/sound15.mp3";

    const sound16 = new Audio();
    sound16.src = "../sound2/sound16.mp3";
    const sound17 = new Audio();
    sound17.src = "../sound2/sound17.mp3";
    const sound18 = new Audio();
    sound18.src = "../sound2/sound18.mp3";
    const sound19 = new Audio();
    sound19.src = "../sound2/sound19.mp3";
    const sound20 = new Audio();
    sound20.src = "../sound2/sound20.mp3";
    const sound21 = new Audio();
    sound21.src = "../sound2/sound21.mp3";
    const sound22 = new Audio();
    sound22.src = "../sound2/sound22.mp3";
    const sound23 = new Audio();
    sound23.src = "../sound2/sound23.mp3";
    const sound24 = new Audio();
    sound24.src = "../sound2/sound24.mp3";
    const sound25 = new Audio();
    sound25.src = "../sound2/sound25.mp3";
    const sound26 = new Audio();
    sound26.src = "../sound2/sound26.mp3";
    const sound27 = new Audio();
    sound27.src = "../sound2/sound27.mp3";
    const sound28 = new Audio();
    sound28.src = "../sound2/sound28.mp3";
    const sound29 = new Audio();
    sound29.src = "../sound2/sound29.mp3";
    const sound30 = new Audio();
    sound30.src = "../sound2/sound30.mp3";

    let allSound1 = [];
    allSound1[0] = sound1;
    allSound1[1] = sound2;
    allSound1[2] = sound3;
    allSound1[3] = sound4;
    allSound1[4] = sound5;
    allSound1[5] = sound6;
    allSound1[6] = sound7;
    allSound1[7] = sound8;
    allSound1[8] = sound9;
    allSound1[9] = sound10;
    allSound1[10] = sound11;
    allSound1[11] = sound12;
    allSound1[12] = sound13;
    allSound1[13] = sound14;
    allSound1[14] = sound15;

    let allSound2 = [];
    allSound2[0] = sound16;
    allSound2[1] = sound17;
    allSound2[2] = sound18;
    allSound2[3] = sound19;
    allSound2[4] = sound20;
    allSound2[5] = sound21;
    allSound2[6] = sound22;
    allSound2[7] = sound23;
    allSound2[8] = sound24;
    allSound2[9] = sound25;
    allSound2[10] = sound26;
    allSound2[11] = sound27;
    allSound2[12] = sound28;
    allSound2[13] = sound29;
    allSound2[14] = sound30;

    let random1 = (Math.random() * 16) - (Math.random() * 16);
    let random2 = (Math.random() * 3) - (Math.random() * 3);
    let random3 = (Math.random() * 3) - (Math.random() * 3);
    let random4 = (Math.random() * 3) - (Math.random() * 3);

    $.fn.animate2 = function (properties, duration, ease) {
        ease = ease || 'ease';
        var $this = this;
        var cssOrig = { transition: $this.css('transition') };
        return $this.queue(next => {
            properties['transition'] = 'all ' + duration + 'ms ' + ease;
            $this.css(properties);
            setTimeout(function () {
                $this.css(cssOrig);
                next();
            }, duration);
        });
    };

    onmousemove = flower;

    function flower() {
        let random1_1 = random1 + 7.5;
        let random1_2 = random1 - 7.5;
        let random1_3 = random1 + 3.5;
        let random1_4 = random1 - 3;
        let random2_1 = random2 + 2.5;
        let random2_2 = random2 - 2.5;
        let random3_1 = random3 + 5.5;
        let random3_2 = random3 - 5.5;
        let random4_1 = random4 + 4;
        let random4_2 = random4 - 4;

        $(hanamove).hover(function() {
            $(this).css("transform", "rotate(" + random1 + "deg)");
            $(canvasGroup1).css("transform", "rotate(" + random1 + "deg)");
            $(canvas7).css("transform", "rotate(" + random1 + "deg)");
            $(canvas8).css("transform", "rotate(" + random1 + "deg)");
        }, function() {
            $(this).css("transform", "rotate(0deg)");
            $(canvasGroup1).css("transform", "rotate(0deg)");
            $(canvas7).css("transform", "rotate(0deg)");
            $(canvas8).css("transform", "rotate(0deg)");
        });

        canvasGroup1.onclick = flowerMotion;
        canvas7.onclick = leafMotion;
        canvas8.onclick = leafMotion;

        function flowerMotion() {
            let rS2 = Math.floor(Math.random() * allSound2.length);
            let randomSound2 = allSound2[rS2];
            randomSound2.play();
            $(canvasGroup1)
            .animate2({ transform: 'rotate(' + random1_1 + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1_2 + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas1)
            .animate2({ transform: 'rotate(' + random2_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random2_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
            $(canvas2)
            .animate2({ transform: 'rotate(' + random3_1 + 'deg)' }, 155)
            .animate2({ transform: 'rotate(' + random3_2 + 'deg)' }, 125)
            .animate2({ transform: 'rotate(0deg)' }, 160);
            $(canvas3)
            .animate2({ transform: 'rotate(' + random4_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random4_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
        }

        function leafMotion() {
            let rS1 = Math.floor(Math.random() * allSound1.length);
            let randomSound1 = allSound1[rS1];
            randomSound1.play();
            $(canvas7)
            .animate2({ transform: 'rotate(' + random1_3 + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1_4 + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas8)
            .animate2({ transform: 'rotate(' + random1_3 + 'deg)' }, 150)
            .animate2({ transform: 'rotate(' + random1_4 + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 155);
        }

        canvasGroup1.style.transition = 'transform 0.5s ease 0s';
        canvas7.style.transition = 'transform 1s ease 0s';
        canvas8.style.transition = 'transform 1.4s ease 0s';
    }

    hanamove.addEventListener('mouseleave', (event) => {
        random1 = (Math.random() * 16) - (Math.random() * 16);
        random2 = (Math.random() * 3) - (Math.random() * 3);
        random3 = (Math.random() * 3) - (Math.random() * 3);
        random4 = (Math.random() * 3) - (Math.random() * 3);
        canvasGroup1.style.transform = "rotate(0deg)";
        canvas7.style.transform = "rotate(0deg)";
        canvas8.style.transform = "rotate(0deg)";
    });

    $(hanamove).draggable();
    $(zyouro).draggable();
    $(eiyouzai1).draggable();
    $(eiyouzai2).draggable();
    $(eiyouzai3).draggable();
});