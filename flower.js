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
    let canvas10 = document.querySelector("#canvas10");
    let ctx10 = canvas10.getContext("2d");
    let canvas11 = document.querySelector("#canvas11");
    let ctx11 = canvas11.getContext("2d");
    let canvas12 = document.querySelector("#canvas12");
    let ctx12 = canvas12.getContext("2d");
    let canvas13 = document.querySelector("#canvas13");
    let ctx13 = canvas13.getContext("2d");
    let canvas14 = document.querySelector("#canvas14");
    let ctx14 = canvas14.getContext("2d");
    let canvas15 = document.querySelector("#canvas15");
    let ctx15 = canvas15.getContext("2d");
    let canvas16 = document.querySelector("#canvas16");
    let ctx16 = canvas16.getContext("2d");
    let canvas17 = document.querySelector("#canvas17");
    let ctx17 = canvas17.getContext("2d");
    let canvas18 = document.querySelector("#canvas18");
    let ctx18 = canvas18.getContext("2d");
    let canvas19 = document.querySelector("#canvas19");
    let ctx19 = canvas19.getContext("2d");
    let canvas20 = document.querySelector("#canvas20");
    let ctx20 = canvas20.getContext("2d");
    let canvas21 = document.querySelector("#canvas21");
    let ctx21 = canvas21.getContext("2d");
    let canvas22 = document.querySelector("#canvas22");
    let ctx22 = canvas22.getContext("2d");
    let canvas23 = document.querySelector("#canvas23");
    let ctx23 = canvas23.getContext("2d");
    let canvas24 = document.querySelector("#canvas24");
    let ctx24 = canvas24.getContext("2d");
    let canvas25 = document.querySelector("#canvas25");
    let ctx25 = canvas25.getContext("2d");
    let canvas26 = document.querySelector("#canvas26");
    let ctx26 = canvas26.getContext("2d");
    let canvas27 = document.querySelector("#canvas27");
    let ctx27 = canvas27.getContext("2d");
    let canvas28 = document.querySelector("#canvas28");
    let ctx28 = canvas28.getContext("2d");
    let canvas29 = document.querySelector("#canvas29");
    let ctx29 = canvas29.getContext("2d");
    let canvas30 = document.querySelector("#canvas30");
    let ctx30 = canvas30.getContext("2d");
    let canvas31 = document.querySelector("#canvas31");
    let ctx31 = canvas31.getContext("2d");
    let canvas32 = document.querySelector("#canvas32");
    let ctx32 = canvas32.getContext("2d");
    let canvas33 = document.querySelector("#canvas33");
    let ctx33 = canvas33.getContext("2d");
    let canvas34 = document.querySelector("#canvas34");
    let ctx34 = canvas34.getContext("2d");
    let canvas35 = document.querySelector("#canvas35");
    let ctx35 = canvas35.getContext("2d");
    let canvas36 = document.querySelector("#canvas36");
    let ctx36 = canvas36.getContext("2d");

	let mouseX;
	let mouseY;
    let dragX;
    let dragY;
    let positionX;
    let positionY;

    let red1 = Math.floor(Math.random() * 36) + 220;
    let green1 = Math.floor(Math.random() * 36) + 120;
    let blue1 = Math.floor(Math.random() * 21);

    let red2 = Math.floor(Math.random() * 36) + 220;
    let green2 = Math.floor(Math.random() * 36) + 120;
    let blue2 = Math.floor(Math.random() * 21);

    let red3 = Math.floor(Math.random() * 36) + 220;
    let green3 = Math.floor(Math.random() * 36) + 120;
    let blue3 = Math.floor(Math.random() * 21);

    let red4 = Math.floor(Math.random() * 156);
    let green4 = Math.floor(Math.random() * 56) + 200;
    let blue4 = Math.floor(Math.random() * 86);

    let red5 = Math.floor(Math.random() * 156);
    let green5 = Math.floor(Math.random() * 56) + 200;
    let blue5 = Math.floor(Math.random() * 86);

    let red6 = Math.floor(Math.random() * 156);
    let green6 = Math.floor(Math.random() * 56) + 200;
    let blue6 = Math.floor(Math.random() * 86);

    let red7 = Math.floor(Math.random() * 31) + 225;
    let green7 = Math.floor(Math.random() * 31) + 160;
    let blue7 = Math.floor(Math.random() * 31) + 170;

    let red8 = Math.floor(Math.random() * 31) + 225;
    let green8 = Math.floor(Math.random() * 31) + 160;
    let blue8 = Math.floor(Math.random() * 31) + 170;

    let red9 = Math.floor(Math.random() * 31) + 225;
    let green9 = Math.floor(Math.random() * 31) + 160;
    let blue9 = Math.floor(Math.random() * 31) + 170;

    let red10 = Math.floor(Math.random() * 156);
    let green10 = Math.floor(Math.random() * 56) + 200;
    let blue10 = Math.floor(Math.random() * 86);

    let red11 = Math.floor(Math.random() * 156);
    let green11 = Math.floor(Math.random() * 56) + 200;
    let blue11 = Math.floor(Math.random() * 86);

    let red12 = Math.floor(Math.random() * 156);
    let green12 = Math.floor(Math.random() * 56) + 200;
    let blue12 = Math.floor(Math.random() * 86);

    let red13 = Math.floor(Math.random() * 56) + 120;
    let green13 = Math.floor(Math.random() * 71);
    let blue13 = Math.floor(Math.random() * 56) + 200;

    let red14 = Math.floor(Math.random() * 56) + 120;
    let green14 = Math.floor(Math.random() * 71);
    let blue14 = Math.floor(Math.random() * 56) + 200;

    let red15 = Math.floor(Math.random() * 56) + 120;
    let green15 = Math.floor(Math.random() * 71);
    let blue15 = Math.floor(Math.random() * 56) + 200;

    let red16 = Math.floor(Math.random() * 156);
    let green16 = Math.floor(Math.random() * 56) + 200;
    let blue16 = Math.floor(Math.random() * 86);

    let red17 = Math.floor(Math.random() * 156);
    let green17 = Math.floor(Math.random() * 56) + 200;
    let blue17 = Math.floor(Math.random() * 86);

    let red18 = Math.floor(Math.random() * 156);
    let green18 = Math.floor(Math.random() * 56) + 200;
    let blue18 = Math.floor(Math.random() * 86);

    let red19 = Math.floor(Math.random() * 56) + 200;
    let green19 = Math.floor(Math.random() * 31);
    let blue19 = Math.floor(Math.random() * 71);

    let red20 = Math.floor(Math.random() * 56) + 200;
    let green20 = Math.floor(Math.random() * 31);
    let blue20 = Math.floor(Math.random() * 71);

    let red21 = Math.floor(Math.random() * 56) + 200;
    let green21 = Math.floor(Math.random() * 31);
    let blue21 = Math.floor(Math.random() * 71);

    let red22 = Math.floor(Math.random() * 156);
    let green22 = Math.floor(Math.random() * 56) + 200;
    let blue22 = Math.floor(Math.random() * 86);

    let red23 = Math.floor(Math.random() * 156);
    let green23 = Math.floor(Math.random() * 56) + 200;
    let blue23 = Math.floor(Math.random() * 86);

    let red24 = Math.floor(Math.random() * 156);
    let green24 = Math.floor(Math.random() * 56) + 200;
    let blue24 = Math.floor(Math.random() * 86);

    let red25 = Math.floor(Math.random() * 21) + 235;
    let green25 = Math.floor(Math.random() * 21) + 235;
    let blue25 = Math.floor(Math.random() * 21) + 235;

    let red26 = Math.floor(Math.random() * 21) + 235;
    let green26 = Math.floor(Math.random() * 21) + 235;
    let blue26 = Math.floor(Math.random() * 21) + 235;

    let red27 = Math.floor(Math.random() * 21) + 235;
    let green27 = Math.floor(Math.random() * 21) + 235;
    let blue27 = Math.floor(Math.random() * 21) + 235;

    let red28 = Math.floor(Math.random() * 156);
    let green28 = Math.floor(Math.random() * 56) + 200;
    let blue28 = Math.floor(Math.random() * 86);

    let red29 = Math.floor(Math.random() * 156);
    let green29 = Math.floor(Math.random() * 56) + 200;
    let blue29 = Math.floor(Math.random() * 86);

    let red30 = Math.floor(Math.random() * 156);
    let green30 = Math.floor(Math.random() * 56) + 200;
    let blue30 = Math.floor(Math.random() * 86);

    let red31 = Math.floor(Math.random() * 256);
    let green31 = Math.floor(Math.random() * 256);
    let blue31 = Math.floor(Math.random() * 256);

    let red32 = Math.floor(Math.random() * 256);
    let green32 = Math.floor(Math.random() * 256);
    let blue32 = Math.floor(Math.random() * 256);

    let red33 = Math.floor(Math.random() * 256);
    let green33 = Math.floor(Math.random() * 256);
    let blue33 = Math.floor(Math.random() * 256);

    let red34 = Math.floor(Math.random() * 156);
    let green34 = Math.floor(Math.random() * 56) + 200;
    let blue34 = Math.floor(Math.random() * 86);

    let red35 = Math.floor(Math.random() * 156);
    let green35 = Math.floor(Math.random() * 56) + 200;
    let blue35 = Math.floor(Math.random() * 86);

    let red36 = Math.floor(Math.random() * 156);
    let green36 = Math.floor(Math.random() * 56) + 200;
    let blue36 = Math.floor(Math.random() * 86);

    let psN1_1 = 1;
    let psN1_2 = 1;
    let psN2_1 = 1;
    let psN2_2 = 1;
    let psN3_1 = 1;
    let psN3_2 = 1;
    let psN4_1 = 1;
    let psN4_2 = 1;
    let psN5_1 = 1;
    let psN5_2 = 1;
    let psN6_1 = 1;
    let psN6_2 = 1;

    let mNx1 = 245;
    let mNy1 = 170;
    let mNx2 = 165;
    let mNy2 = 160;
    let mNx3 = 220;
    let mNy3 = 160;
    let mNx4 = 275;
    let mNy4 = 50;
    let mNx5 = 200;
    let mNy5 = 0;
    let mNx6 = 200;
    let mNy6 = -20;

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
    let minusScreenX4 = 50;
    let minusScreenY4 = 50;
    let minusScreenX5 = 50;
    let minusScreenY5 = 50;
    let minusScreenX6 = 50;
    let minusScreenY6 = 50;

    function drawShape1(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1, cR, cG, cB, cN) {
        let canvas = document.querySelector("#canvas" + cN + "");
        let ctx = canvas.getContext("2d");
        canvas.width = widthX1 * psN1_1 + minusScreenX1;
        canvas.height = heightY1 * psN1_2 + minusScreenY1;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = 'rgba(' + cR + ', ' + cG + ', ' + cB + ')';
        ctx.beginPath();
        ctx.moveTo((409 - mNx1) * x1, (609 - mNy1) * y1);
        ctx.bezierCurveTo((370 - mNx1) * x1_1, (612 - mNy1) * y1_1, (317 - mNx1) * x2_1, (580 - mNy1) * y2_1, (298 - mNx1) * x2, (518 - mNy1) * y2);
        ctx.bezierCurveTo((272 - mNx1) * x2_2, (433 - mNy1) * y2_2, (328 - mNx1) * x3_1, (294 - mNy1) * y3_1, (340 - mNx1) * x3, (251 - mNy1) * y3);
        ctx.bezierCurveTo((348 - mNx1) * x3_2, (223 - mNy1) * y3_2, (378 - mNx1) * x4_1, (198 - mNy1) * y4_1, (406 - mNx1) * x4, (198 - mNy1) * y4);
        ctx.bezierCurveTo((438 - mNx1) * x4_2, (198 - mNy1) * y4_2, (452 - mNx1) * x5_1, (222 - mNy1) * y5_1, (461 - mNx1) * x5, (246 - mNy1) * y5);
        ctx.bezierCurveTo((483 - mNx1) * x5_2, (302 - mNy1) * y5_2, (500 - mNx1) * x6_1, (443 - mNy1) * y6_1, (467 - mNx1) * x6, (475 - mNy1) * y6);
        ctx.bezierCurveTo((382 - mNx1) * x6_2, (559 - mNy1) * y6_2, (453 - mNx1) * x7_1, (605 - mNy1) * y7_1, (409 - mNx1) * x7, (609 - mNy1) * y7);
        ctx.closePath();
        ctx.fill();
        // canvas1.style.marginTop = '' + -canvas1.width / 10 * 5 + 'px';
        // canvas1.style.marginLeft = '' + -canvas1.height / 10 * 5 + 'px';
    }

    function drawShape2(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1, cR, cG, cB, cN) {
        let canvas = document.querySelector("#canvas" + cN + "");
        let ctx = canvas.getContext("2d");
        canvas.width = widthX1 * psN2_1 + minusScreenX2;
        canvas.height = heightY1 * psN2_2 + minusScreenY2;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = 'rgba(' + cR + ', ' + cG + ', ' + cB + ')';
        ctx.beginPath();
        ctx.moveTo((368 - mNx2) * x1, (623 - mNy2) * y1);
        ctx.bezierCurveTo((329 - mNx2) * x1_1, (629 - mNy2) * y1_1, (389 - mNx2) * x2_1, (554 - mNy2) * y2_1, (329 - mNx2) * x2, (501 - mNy2) * y2);
        ctx.bezierCurveTo((280 - mNx2) * x2_2, (458 - mNy2) * y2_2, (293 - mNx2) * x3_1, (348 - mNy2) * y3_1, (324 - mNx2) * x3, (254 - mNy2) * y3);
        ctx.bezierCurveTo((331 - mNx2) * x3_2, (233 - mNy2) * y3_2, (346 - mNx2) * x4_1, (196 - mNy2) * y4_1, (391 - mNx2) * x4, (190 - mNy2) * y4);
        ctx.bezierCurveTo((416 - mNx2) * x4_2, (187 - mNy2) * y4_2, (447 - mNx2) * x5_1, (209 - mNy2) * y5_1, (451 - mNx2) * x5, (236 - mNy2) * y5);
        ctx.bezierCurveTo((462 - mNx2) * x5_2, (308 - mNy2) * y5_2, (503 - mNx2) * x6_1, (440 - mNy2) * y6_1, (489 - mNx2) * x6, (507 - mNy2) * y6);
        ctx.bezierCurveTo((480 - mNx2) * x6_2, (550 - mNy2) * y6_2, (433 - mNx2) * x7_1, (614 - mNy2) * y7_1, (368 - mNx2) * x7, (623 - mNy2) * y7);
        ctx.closePath();
        ctx.fill();
    }

    function drawShape3(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1, cR, cG, cB, cN) {
        let canvas = document.querySelector("#canvas" + cN + "");
        let ctx = canvas.getContext("2d");
        canvas.width = widthX1 * psN3_1 + minusScreenX3;
        canvas.height = heightY1 * psN3_2 + minusScreenY3;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = 'rgba(' + cR + ', ' + cG + ', ' + cB + ')';
        ctx.beginPath();
        ctx.moveTo((397 - mNx3) * x1, (589 - mNy3) * y1);
        ctx.bezierCurveTo((348 - mNx3) * x1_1, (588 - mNy3) * y1_1, (312 - mNx3) * x2_1, (520 - mNy3) * y2_1, (302 - mNx3) * x2, (471 - mNy3) * y2);
        ctx.bezierCurveTo((291 - mNx3) * x2_2, (415 - mNy3) * y2_2, (327 - mNx3) * x3_1, (281 - mNy3) * y3_1, (343 - mNx3) * x3, (216 - mNy3) * y3);
        ctx.bezierCurveTo((347 - mNx3) * x3_2, (200 - mNy3) * y3_2, (366 - mNx3) * x4_1, (173 - mNy3) * y4_1, (395 - mNx3) * x4, (174 - mNy3) * y4);
        ctx.bezierCurveTo((429 - mNx3) * x4_2, (175 - mNy3) * y4_2, (448 - mNx3) * x5_1, (204 - mNy3) * y5_1, (454 - mNx3) * x5, (219 - mNy3) * y5);
        ctx.bezierCurveTo((473 - mNx3) * x5_2, (267 - mNy3) * y5_2, (510 - mNx3) * x6_1, (366 - mNy3) * y6_1, (503 - mNx3) * x6, (450 - mNy3) * y6);
        ctx.bezierCurveTo((497 - mNx3) * x6_2, (518 - mNy3) * y6_2, (452 - mNx3) * x7_1, (589 - mNy3) * y7_1, (397 - mNx3) * x7, (589 - mNy3) * y7);
        ctx.closePath();
        ctx.fill();
    }

    function drawShape4(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, y5_1, cR, cG, cB, cN) {
        let canvas = document.querySelector("#canvas" + cN + "");
        let ctx = canvas.getContext("2d");
        canvas.width = widthX2 * psN4_1 + minusScreenX4;
        canvas.height = heightY2 * psN4_2 + minusScreenY4;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = 'rgba(' + cR + ', ' + cG + ', ' + cB + ')';
        ctx.beginPath();
        ctx.moveTo((369 - mNx4) * x1, (712 - mNy4) * y1);
        ctx.bezierCurveTo((422 - mNx4) * x1_1, (487 - mNy4) * y1_1, (418 - mNx4) * x2_1, (298 - mNy4) * y2_1, (369 - mNx4) * x2, (109 - mNy4) * y2);
        ctx.bezierCurveTo((365 - mNx4) * x2_2, (94 - mNy4) * y2_2, (391 - mNx4) * x3_1, (86 - mNy4) * y3_1, (395 - mNx4) * x3, (100 - mNy4) * y3);
        ctx.bezierCurveTo((449 - mNx4) * x3_2, (297 - mNy4) * y3_2, (448 - mNx4) * x4_1, (479 - mNy4) * y4_1, (396 - mNx4) * x4, (716 - mNy4) * y4);
        ctx.bezierCurveTo((393 - mNx4) * x4_2, (731 - mNy4) * y4_2, (365 - mNx4) * x5_1, (723 - mNy4) * y5_1, (369 - mNx4) * x5, (712 - mNy4) * y5);
        ctx.closePath();
        ctx.fill();
    }

    function drawShape5(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, y6_1, x6_2, y6_2,
        x7, y7, x7_1, y7_1, cR, cG, cB, cN) {
        let canvas = document.querySelector("#canvas" + cN + "");
        let ctx = canvas.getContext("2d");
        canvas.width = widthX3 * psN5_1 + minusScreenX5;
        canvas.height = heightY2 * psN5_2 + minusScreenY5;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = 'rgba(' + cR + ', ' + cG + ', ' + cB + ')';
        ctx.beginPath();
        ctx.moveTo((411 - mNx5) * x1, (516 - mNy5) * y1);
        ctx.bezierCurveTo((402 - mNx5) * x1_1, (479 - mNy5) * y1_1, (392 - mNx5) * x2_1, (420 - mNy5) * y2_1, (362 - mNx5) * x2, (347 - mNy5) * y2);
        ctx.bezierCurveTo((330 - mNx5) * x2_2, (269 - mNy5) * y2_2, (234 - mNx5) * x3_1, (163 - mNy5) * y3_1, (240 - mNx5) * x3, (149 - mNy5) * y3);
        ctx.bezierCurveTo((246 - mNx5) * x3_2, (135 - mNy5) * y3_2, (311 - mNx5) * x4_1, (200 - mNy5) * y4_1, (381 - mNx5) * x4, (280 - mNy5) * y4);
        ctx.bezierCurveTo((410 - mNx5) * x4_2, (313 - mNy5) * y4_2, (459 - mNx5) * x5_1, (406 - mNy5) * y5_1, (466 - mNx5) * x5, (465 - mNy5) * y5);
        ctx.bezierCurveTo((477 - mNx5) * x5_2, (546 - mNy5) * y5_2, (487 - mNx5) * x6_1, (645 - mNy5) * y6_1, (473 - mNx5) * x6, (647 - mNy5) * y6);
        ctx.bezierCurveTo((458 - mNx5) * x6_2, (650 - mNy5) * y6_2, (426 - mNx5) * x7_1, (578 - mNy5) * y7_1, (411 - mNx5) * x7, (516 - mNy5) * y7);
        ctx.closePath();
        ctx.fill();
    }

    function drawShape6(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, y6_1, x6_2, y6_2,
        x7, y7, x7_1, y7_1, cR, cG, cB, cN) {
        let canvas = document.querySelector("#canvas" + cN + "");
        let ctx = canvas.getContext("2d");
        canvas.width = widthX3 * psN6_1 + minusScreenX6;
        canvas.height = heightY2 * psN6_2 + minusScreenY6;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = 'rgba(' + cR + ', ' + cG + ', ' + cB + ')';
        ctx.beginPath();
        ctx.moveTo((250 - mNx6) * x1, (418 - mNy6) * y1);
        ctx.bezierCurveTo((236 - mNx6) * x1_1, (415 - mNy6) * y1_1, (241 - mNx6) * x2_1, (366 - mNy6) * y2_1, (261 - mNx6) * x2, (331 - mNy6) * y2);
        ctx.bezierCurveTo((295 - mNx6) * x2_2, (272 - mNy6) * y2_2, (341 - mNx6) * x3_1, (270 - mNy6) * y3_1, (362 - mNx6) * x3, (222 - mNy6) * y3);
        ctx.bezierCurveTo((372 - mNx6) * x3_2, (199 - mNy6) * y3_2, (363 - mNx6) * x4_1, (173 - mNy6) * y4_1, (379 - mNx6) * x4, (131 - mNy6) * y4);
        ctx.bezierCurveTo((396 - mNx6) * x4_2, (85 - mNy6) * y4_2, (423 - mNx6) * x5_1, (38 - mNy6) * y5_1, (434 - mNx6) * x5, (39 - mNy6) * y5);
        ctx.bezierCurveTo((444 - mNx6) * x5_2, (40 - mNy6) * y5_2, (392 - mNx6) * x6_1, (212 - mNy6) * y6_1, (375 - mNx6) * x6, (244 - mNy6) * y6);
        ctx.bezierCurveTo((327 - mNx6) * x6_2, (333 - mNy6) * y6_2, (267 - mNx6) * x7_1, (420 - mNy6) * y7_1, (250 - mNx6) * x7, (418 - mNy6) * y7);
        ctx.closePath();
        ctx.fill();
    }
    
    function moveShape() {

        sN1_1 = 0.9;
        sN1_2 = 1.1;
        sN2_1 = 1.7;
        sN2_2 = 2;
        sN3_1 = 1.2;
        sN3_2 = 1.4;
        sN4_1 = 1.5;
        sN4_2 = 1.5;
        sN5_1 = 1.4;
        sN5_2 = 1.4;
        sN6_1 = 1.7;
        sN6_2 = 1.7;

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

        pN5_0 = 0.1;
        pN5_1 = 0.05;
        pN5_2 = 0.02;
        pN5_3 = 0.01;
        pN5_4 = 0.005;
        pN5_5 = 0.002;
        pN5_6 = 0.001;

        pN6_1 = 0.3;
        pN6_2 = 0.05;
        pN6_3 = 0.02;
        pN6_4 = 0.01;
        pN6_5 = 0.005;
        pN6_6 = 0.001;

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

        bX7 = sN2_1 + dragX * pN2_1 / macWidth;
        bY7 = sN2_2 + dragY * pN2_1 / macHeight;
        bX8 = sN2_1 + -dragX * pN2_2 / macWidth;
        bY8 = sN2_2 + -dragY * pN2_2 / macHeight;
        bX9 = sN2_1 + dragX * pN2_3 / macWidth;
        bY9 = sN2_2 + dragY * pN2_3 / macHeight;
        bX10 = sN2_1 + -dragX * pN2_4 / macWidth;
        bY10 = sN2_2 + -dragY * pN2_4 / macHeight;
        bX11 = sN2_1 + dragX * pN2_5 / macWidth;
        bY11 = sN2_2 + dragY * pN2_5 / macHeight;
        bX12 = sN2_1 + -dragX * pN2_6 / macWidth;
        bY12 = sN2_2 + -dragY * pN2_6 / macHeight;

        bX13 = sN3_1 + dragX * pN3_1 / macWidth;
        bY13 = sN3_2 + dragY * pN3_1 / macHeight;
        bX14 = sN3_1 + -dragX * pN3_2 / macWidth;
        bY14 = sN3_2 + -dragY * pN3_2 / macHeight;
        bX15 = sN3_1 + dragX * pN3_3 / macWidth;
        bY15 = sN3_2 + dragY * pN3_3 / macHeight;
        bX16 = sN3_1 + -dragX * pN3_4 / macWidth;
        bY16 = sN3_2 + -dragY * pN3_4 / macHeight;
        bX17 = sN3_1 + dragX * pN3_5 / macWidth;
        bY17 = sN3_2 + dragY * pN3_5 / macHeight;
        bX18 = sN3_1 + -dragX * pN3_6 / macWidth;
        bY18 = sN3_2 + -dragY * pN3_6 / macHeight;

        bX19 = sN4_1 + dragX * pN4_1 / macWidth;
        bY19 = sN4_2 + dragY * pN4_1 / macHeight;
        bX20 = sN4_1 + -dragX * pN4_2 / macWidth;
        bY20 = sN4_2 + -dragY * pN4_2 / macHeight;
        bX21 = sN4_1 + dragX * pN4_3 / macWidth;
        bY21 = sN4_2 + dragY * pN4_3 / macHeight;
        bX22 = sN4_1 + -dragX * pN4_4 / macWidth;
        bY22 = sN4_2 + -dragY * pN4_4 / macHeight;
        bX23 = sN4_1 + dragX * pN4_5 / macWidth;
        bY23 = sN4_2 + dragY * pN4_5 / macHeight;
        bX24 = sN4_1 + -dragX * pN4_6 / macWidth;
        bY24 = sN4_2 + -dragY * pN4_6 / macHeight;

        bX25 = sN5_1 + -dragX * pN5_1 / macWidth;
        bY25 = sN5_2 + -dragY * pN5_1 / macHeight;
        bX26 = sN5_1 + dragX * pN5_2 / macWidth;
        bY26 = sN5_2 + dragY * pN5_2 / macHeight;
        bX27 = sN5_1 + dragX * pN5_3 / macWidth;
        bY27 = sN5_2 + dragY * pN5_3 / macHeight;
        bX28 = sN5_1 + -dragX * pN5_4 / macWidth;
        bY28 = sN5_2 + -dragY * pN5_4 / macHeight;
        bX29 = sN5_1 + dragX * pN5_5 / macWidth;
        bY29 = sN5_2 + dragY * pN5_5 / macHeight;
        bX30 = sN5_1 + -dragX * pN5_6 / macWidth;
        bY30 = sN5_2 + -dragY * pN5_6 / macHeight;

        bX31 = sN6_1 + dragX * pN6_1 / macWidth;
        bY31 = sN6_2 + dragY * pN6_1 / macHeight;
        bX32 = sN6_1 + -dragX * pN6_2 / macWidth;
        bY32 = sN6_2 + -dragY * pN6_2 / macHeight;
        bX33 = sN6_1 + dragX * pN6_3 / macWidth;
        bY33 = sN6_2 + dragY * pN6_3 / macHeight;
        bX34 = sN6_1 + -dragX * pN6_4 / macWidth;
        bY34 = sN6_2 + -dragY * pN6_4 / macHeight;
        bX35 = sN6_1 + dragX * pN6_5 / macWidth;
        bY35 = sN6_2 + dragY * pN6_5 / macHeight;
        bX36 = sN6_1 + -dragX * pN6_6 / macWidth;
        bY36 = sN6_2 + -dragY * pN6_6 / macHeight;
        
        drawShape1(bX6, bY5, bX6, bY5, 
            bX3, bY4, bX3, bX3, bY4, bY4, 
            bX2, bY3, bX2, bX2, bY3, bY3, 
            bX3, bY1, bX3, bX3, bY1, bY1, 
            bX4, bY5, bX4, bX4, bY5, bY5, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX6, bY5, bX6, bY5, red1, green1, blue1, 1);

        drawShape2(bX11, bY12, bX11, bY12, 
            bX8, bY9, bX8, bX8, bY9, bY9, 
            bX7, bY8, bX8, bX7, bY8, bY8, 
            bX8, bY7, bX8, bX8, bY7, bY7, 
            bX9, bY8, bX9, bX9, bY8, bY8, 
            bX10, bY11, bX10, bX10, bY11, bY11, 
            bX11, bY12, bX11, bY12, red2, green2, blue2, 2);

        drawShape3(bX18, bY17, bX18, bY17, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX14, bY13, bX14, bX14, bY13, bY13, 
            bX13, bY14, bX13, bX13, bY14, bY14, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX16, bY17, bX16, bX16, bY17, bY17, 
            bX18, bY17, bX18, bY17, red3, green3, blue3, 3);

        drawShape4(bX24, bY23, bX24, bY23, 
            bX21, bY22, bX21, bX21, bY22, bY22, 
            bX20, bY21, bX20, bX20, bY21, bY21, 
            bX23, bY24, bX23, bX23, bY24, bY24, 
            bX24, bY23, bX24, bY23, red4, green4, blue4, 4);

        drawShape5(bX30, bY29, bX30, bY29, 
            bX27, bY26, bX27, bX27, bY26, bY26, 
            bX26, bY25, bX26, bX26, bY25, bY25, 
            bX25, bY26, bX25, bX25, bY26, bY26, 
            bX28, bY27, bX28, bX28, bY27, bY27, 
            bX29, bY28, bX29, bX29, bY28, bY28, 
            bX30, bY29, bX30, bY29, red5, green5, blue5, 5);

        drawShape6(bX31, bY36, bX31, bY36, 
            bX32, bY33, bX32, bX32, bY33, bY33, 
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX34, bY33, bX34, bX34, bY33, bY33, 
            bX36, bY31, bX36, bX36, bY31, bY31,
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX31, bY36, bX31, bY36, red6, green6, blue6, 6);

        drawShape1(bX6, bY5, bX6, bY5, 
            bX3, bY4, bX3, bX3, bY4, bY4, 
            bX2, bY3, bX2, bX2, bY3, bY3, 
            bX3, bY1, bX3, bX3, bY1, bY1, 
            bX4, bY5, bX4, bX4, bY5, bY5, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX6, bY5, bX6, bY5, red7, green7, blue7, 7);

        drawShape2(bX11, bY12, bX11, bY12, 
            bX8, bY9, bX8, bX8, bY9, bY9, 
            bX7, bY8, bX8, bX7, bY8, bY8, 
            bX8, bY7, bX8, bX8, bY7, bY7, 
            bX9, bY8, bX9, bX9, bY8, bY8, 
            bX10, bY11, bX10, bX10, bY11, bY11, 
            bX11, bY12, bX11, bY12, red8, green8, blue8, 8);

        drawShape3(bX18, bY17, bX18, bY17, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX14, bY13, bX14, bX14, bY13, bY13, 
            bX13, bY14, bX13, bX13, bY14, bY14, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX16, bY17, bX16, bX16, bY17, bY17, 
            bX18, bY17, bX18, bY17, red9, green9, blue9, 9);

        drawShape4(bX24, bY23, bX24, bY23, 
            bX21, bY22, bX21, bX21, bY22, bY22, 
            bX20, bY21, bX20, bX20, bY21, bY21, 
            bX23, bY24, bX23, bX23, bY24, bY24, 
            bX24, bY23, bX24, bY23, red10, green10, blue10, 10);

        drawShape5(bX30, bY29, bX30, bY29, 
            bX27, bY26, bX27, bX27, bY26, bY26, 
            bX26, bY25, bX26, bX26, bY25, bY25, 
            bX25, bY26, bX25, bX25, bY26, bY26, 
            bX28, bY27, bX28, bX28, bY27, bY27, 
            bX29, bY28, bX29, bX29, bY28, bY28, 
            bX30, bY29, bX30, bY29, red11, green11, blue11, 11);

        drawShape6(bX31, bY36, bX31, bY36, 
            bX32, bY33, bX32, bX32, bY33, bY33, 
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX34, bY33, bX34, bX34, bY33, bY33, 
            bX36, bY31, bX36, bX36, bY31, bY31,
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX31, bY36, bX31, bY36, red12, green12, blue12, 12);

        drawShape1(bX6, bY5, bX6, bY5, 
            bX3, bY4, bX3, bX3, bY4, bY4, 
            bX2, bY3, bX2, bX2, bY3, bY3, 
            bX3, bY1, bX3, bX3, bY1, bY1, 
            bX4, bY5, bX4, bX4, bY5, bY5, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX6, bY5, bX6, bY5, red13, green13, blue13, 13);

        drawShape2(bX11, bY12, bX11, bY12, 
            bX8, bY9, bX8, bX8, bY9, bY9, 
            bX7, bY8, bX8, bX7, bY8, bY8, 
            bX8, bY7, bX8, bX8, bY7, bY7, 
            bX9, bY8, bX9, bX9, bY8, bY8, 
            bX10, bY11, bX10, bX10, bY11, bY11, 
            bX11, bY12, bX11, bY12, red14, green14, blue14, 14);

        drawShape3(bX18, bY17, bX18, bY17, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX14, bY13, bX14, bX14, bY13, bY13, 
            bX13, bY14, bX13, bX13, bY14, bY14, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX16, bY17, bX16, bX16, bY17, bY17, 
            bX18, bY17, bX18, bY17, red15, green15, blue15, 15);

        drawShape4(bX24, bY23, bX24, bY23, 
            bX21, bY22, bX21, bX21, bY22, bY22, 
            bX20, bY21, bX20, bX20, bY21, bY21, 
            bX23, bY24, bX23, bX23, bY24, bY24, 
            bX24, bY23, bX24, bY23, red16, green16, blue16, 16);

        drawShape5(bX30, bY29, bX30, bY29, 
            bX27, bY26, bX27, bX27, bY26, bY26, 
            bX26, bY25, bX26, bX26, bY25, bY25, 
            bX25, bY26, bX25, bX25, bY26, bY26, 
            bX28, bY27, bX28, bX28, bY27, bY27, 
            bX29, bY28, bX29, bX29, bY28, bY28, 
            bX30, bY29, bX30, bY29, red17, green17, blue17, 17);

        drawShape6(bX31, bY36, bX31, bY36, 
            bX32, bY33, bX32, bX32, bY33, bY33, 
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX34, bY33, bX34, bX34, bY33, bY33, 
            bX36, bY31, bX36, bX36, bY31, bY31,
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX31, bY36, bX31, bY36, red18, green18, blue18, 18);

        drawShape1(bX6, bY5, bX6, bY5, 
            bX3, bY4, bX3, bX3, bY4, bY4, 
            bX2, bY3, bX2, bX2, bY3, bY3, 
            bX3, bY1, bX3, bX3, bY1, bY1, 
            bX4, bY5, bX4, bX4, bY5, bY5, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX6, bY5, bX6, bY5, red19, green19, blue19, 19);

        drawShape2(bX11, bY12, bX11, bY12, 
            bX8, bY9, bX8, bX8, bY9, bY9, 
            bX7, bY8, bX8, bX7, bY8, bY8, 
            bX8, bY7, bX8, bX8, bY7, bY7, 
            bX9, bY8, bX9, bX9, bY8, bY8, 
            bX10, bY11, bX10, bX10, bY11, bY11, 
            bX11, bY12, bX11, bY12, red20, green20, blue20, 20);

        drawShape3(bX18, bY17, bX18, bY17, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX14, bY13, bX14, bX14, bY13, bY13, 
            bX13, bY14, bX13, bX13, bY14, bY14, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX16, bY17, bX16, bX16, bY17, bY17, 
            bX18, bY17, bX18, bY17, red21, green21, blue21, 21);

        drawShape4(bX24, bY23, bX24, bY23, 
            bX21, bY22, bX21, bX21, bY22, bY22, 
            bX20, bY21, bX20, bX20, bY21, bY21, 
            bX23, bY24, bX23, bX23, bY24, bY24, 
            bX24, bY23, bX24, bY23, red22, green22, blue22, 22);

        drawShape5(bX30, bY29, bX30, bY29, 
            bX27, bY26, bX27, bX27, bY26, bY26, 
            bX26, bY25, bX26, bX26, bY25, bY25, 
            bX25, bY26, bX25, bX25, bY26, bY26, 
            bX28, bY27, bX28, bX28, bY27, bY27, 
            bX29, bY28, bX29, bX29, bY28, bY28, 
            bX30, bY29, bX30, bY29, red23, green23, blue23, 23);

        drawShape6(bX31, bY36, bX31, bY36, 
            bX32, bY33, bX32, bX32, bY33, bY33, 
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX34, bY33, bX34, bX34, bY33, bY33, 
            bX36, bY31, bX36, bX36, bY31, bY31,
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX31, bY36, bX31, bY36, red24, green24, blue24, 24);

        drawShape1(bX6, bY5, bX6, bY5, 
            bX3, bY4, bX3, bX3, bY4, bY4, 
            bX2, bY3, bX2, bX2, bY3, bY3, 
            bX3, bY1, bX3, bX3, bY1, bY1, 
            bX4, bY5, bX4, bX4, bY5, bY5, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX6, bY5, bX6, bY5, red25, green25, blue25, 25);

        drawShape2(bX11, bY12, bX11, bY12, 
            bX8, bY9, bX8, bX8, bY9, bY9, 
            bX7, bY8, bX8, bX7, bY8, bY8, 
            bX8, bY7, bX8, bX8, bY7, bY7, 
            bX9, bY8, bX9, bX9, bY8, bY8, 
            bX10, bY11, bX10, bX10, bY11, bY11, 
            bX11, bY12, bX11, bY12, red26, green26, blue26, 26);

        drawShape3(bX18, bY17, bX18, bY17, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX14, bY13, bX14, bX14, bY13, bY13, 
            bX13, bY14, bX13, bX13, bY14, bY14, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX16, bY17, bX16, bX16, bY17, bY17, 
            bX18, bY17, bX18, bY17, red27, green27, blue27, 27);

        drawShape4(bX24, bY23, bX24, bY23, 
            bX21, bY22, bX21, bX21, bY22, bY22, 
            bX20, bY21, bX20, bX20, bY21, bY21, 
            bX23, bY24, bX23, bX23, bY24, bY24, 
            bX24, bY23, bX24, bY23, red28, green28, blue28, 28);

        drawShape5(bX30, bY29, bX30, bY29, 
            bX27, bY26, bX27, bX27, bY26, bY26, 
            bX26, bY25, bX26, bX26, bY25, bY25, 
            bX25, bY26, bX25, bX25, bY26, bY26, 
            bX28, bY27, bX28, bX28, bY27, bY27, 
            bX29, bY28, bX29, bX29, bY28, bY28, 
            bX30, bY29, bX30, bY29, red29, green29, blue29, 29);

        drawShape6(bX31, bY36, bX31, bY36, 
            bX32, bY33, bX32, bX32, bY33, bY33, 
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX34, bY33, bX34, bX34, bY33, bY33, 
            bX36, bY31, bX36, bX36, bY31, bY31,
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX31, bY36, bX31, bY36, red30, green30, blue30, 30);

        drawShape1(bX6, bY5, bX6, bY5, 
            bX3, bY4, bX3, bX3, bY4, bY4, 
            bX2, bY3, bX2, bX2, bY3, bY3, 
            bX3, bY1, bX3, bX3, bY1, bY1, 
            bX4, bY5, bX4, bX4, bY5, bY5, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX6, bY5, bX6, bY5, red31, green31, blue31, 31);

        drawShape2(bX11, bY12, bX11, bY12, 
            bX8, bY9, bX8, bX8, bY9, bY9, 
            bX7, bY8, bX8, bX7, bY8, bY8, 
            bX8, bY7, bX8, bX8, bY7, bY7, 
            bX9, bY8, bX9, bX9, bY8, bY8, 
            bX10, bY11, bX10, bX10, bY11, bY11, 
            bX11, bY12, bX11, bY12, red32, green32, blue32, 32);

        drawShape3(bX18, bY17, bX18, bY17, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX14, bY13, bX14, bX14, bY13, bY13, 
            bX13, bY14, bX13, bX13, bY14, bY14, 
            bX15, bY16, bX15, bX15, bY16, bY16, 
            bX16, bY17, bX16, bX16, bY17, bY17, 
            bX18, bY17, bX18, bY17, red33, green33, blue33, 33);

        drawShape4(bX24, bY23, bX24, bY23, 
            bX21, bY22, bX21, bX21, bY22, bY22, 
            bX20, bY21, bX20, bX20, bY21, bY21, 
            bX23, bY24, bX23, bX23, bY24, bY24, 
            bX24, bY23, bX24, bY23, red34, green34, blue34, 34);

        drawShape5(bX30, bY29, bX30, bY29, 
            bX27, bY26, bX27, bX27, bY26, bY26, 
            bX26, bY25, bX26, bX26, bY25, bY25, 
            bX25, bY26, bX25, bX25, bY26, bY26, 
            bX28, bY27, bX28, bX28, bY27, bY27, 
            bX29, bY28, bX29, bX29, bY28, bY28, 
            bX30, bY29, bX30, bY29, red35, green35, blue35, 35);

        drawShape6(bX31, bY36, bX31, bY36, 
            bX32, bY33, bX32, bX32, bY33, bY33, 
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX34, bY33, bX34, bX34, bY33, bY33, 
            bX36, bY31, bX36, bX36, bY31, bY31,
            bX33, bY32, bX33, bX33, bY32, bY32, 
            bX31, bY36, bX31, bY36, red36, green36, blue36, 36);
    }

    function stopShape() {

        let bN1x = 0.9;
        let bN1y = 1.1;
        let bN2x = 1.7;
        let bN2y = 2;
        let bN3x = 1.2;
        let bN3y = 1.4;
        let bN4x = 1.5;
        let bN4y = 1.5;
        let bN5x = 1.4;
        let bN5y = 1.4;
        let bN6x = 1.7;
        let bN6y = 1.7;
    
        drawShape1(bN1x, bN1y, bN1x, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1y, red1, green1, blue1, 1);

        drawShape2(bN2x, bN2y, bN2x, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2y, red2, green2, blue2, 2);

        drawShape3(bN3x, bN3y, bN3x, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3y, red3, green3, blue3, 3);

        drawShape4(bN4x, bN4y, bN4x, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4y, red4, green4, blue4, 4);

        drawShape5(bN5x, bN5y, bN5x, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5y, red5, green5, blue5, 5);

        drawShape6(bN6x, bN6y, bN6x, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6y, red6, green6, blue6, 6);

        drawShape1(bN1x, bN1y, bN1x, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1y, red7, green7, blue7, 7);

        drawShape2(bN2x, bN2y, bN2x, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2y, red8, green8, blue8, 8);

        drawShape3(bN3x, bN3y, bN3x, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3y, red9, green9, blue9, 9);

        drawShape4(bN4x, bN4y, bN4x, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4y, red10, green10, blue10, 10);

        drawShape5(bN5x, bN5y, bN5x, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5y, red11, green11, blue11, 11);

        drawShape6(bN6x, bN6y, bN6x, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6y, red12, green12, blue12, 12);

        drawShape1(bN1x, bN1y, bN1x, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1y, red13, green13, blue13, 13);

        drawShape2(bN2x, bN2y, bN2x, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2y, red14, green14, blue14, 14);

        drawShape3(bN3x, bN3y, bN3x, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3y, red15, green15, blue15, 15);

        drawShape4(bN4x, bN4y, bN4x, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4y, red16, green16, blue16, 16);

        drawShape5(bN5x, bN5y, bN5x, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5y, red17, green17, blue17, 17);

        drawShape6(bN6x, bN6y, bN6x, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6y, red18, green18, blue18, 18);

        drawShape1(bN1x, bN1y, bN1x, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1y, red9, green19, blue19, 19);

        drawShape2(bN2x, bN2y, bN2x, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2y, red20, green20, blue20, 20);

        drawShape3(bN3x, bN3y, bN3x, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3y, red21, green21, blue21, 21);

        drawShape4(bN4x, bN4y, bN4x, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4y, red22, green22, blue22, 22);

        drawShape5(bN5x, bN5y, bN5x, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5y, red23, green23, blue23, 23);

        drawShape6(bN6x, bN6y, bN6x, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6y, red24, green24, blue24, 24);

        drawShape1(bN1x, bN1y, bN1x, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1y, red25, green25, blue25, 25);

        drawShape2(bN2x, bN2y, bN2x, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2y, red26, green26, blue26, 26);

        drawShape3(bN3x, bN3y, bN3x, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3y, red27, green27, blue27, 27);

        drawShape4(bN4x, bN4y, bN4x, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4y, red28, green28, blue28, 28);

        drawShape5(bN5x, bN5y, bN5x, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5y, red29, green29, blue29, 29);

        drawShape6(bN6x, bN6y, bN6x, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6y, red30, green30, blue30, 30);

        drawShape1(bN1x, bN1y, bN1x, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1y, red31, green31, blue31, 31);

        drawShape2(bN2x, bN2y, bN2x, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2y, red32, green32, blue32, 32);

        drawShape3(bN3x, bN3y, bN3x, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3y, red33, green33, blue33, 33);

        drawShape4(bN4x, bN4y, bN4x, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4y, red34, green34, blue34, 34);

        drawShape5(bN5x, bN5y, bN5x, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5y, red35, green35, blue35, 35);

        drawShape6(bN6x, bN6y, bN6x, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6y, red36, green36, blue36, 36);
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
        // moveShape();
        stopShape();
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
    let tulip1M = document.querySelector("#tulip1M");
    let tulip2M = document.querySelector("#tulip2M");
    let tulip3M = document.querySelector("#tulip3M");
    let tulip4M = document.querySelector("#tulip4M");
    let tulip5M = document.querySelector("#tulip5M");
    let tulip6M = document.querySelector("#tulip6M");
    let canvasGroup1 = document.querySelector("#canvasGroup1");
    let canvasGroup2 = document.querySelector("#canvasGroup2");
    let canvasGroup3 = document.querySelector("#canvasGroup3");
    let canvasGroup4 = document.querySelector("#canvasGroup4");
    let canvasGroup5 = document.querySelector("#canvasGroup5");
    let canvasGroup6 = document.querySelector("#canvasGroup6");
    let canvasGroup7 = document.querySelector("#canvasGroup7");
    let canvasGroup8 = document.querySelector("#canvasGroup8");
    let canvasGroup9 = document.querySelector("#canvasGroup9");
    let canvasGroup10 = document.querySelector("#canvasGroup10");
    let canvasGroup11 = document.querySelector("#canvasGroup11");
    let canvasGroup12 = document.querySelector("#canvasGroup12");

    const sound31 = new Audio();
    sound31.src = "../sound3/sound31.mp3";

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
        let random2_1 = random2 + 2.5;
        let random2_2 = random2 - 2.5;
        let random3_1 = random3 + 5.5;
        let random3_2 = random3 - 5.5;
        let random4_1 = random4 + 4;
        let random4_2 = random4 - 4;

        $(tulip1M).hover(function() {
            $(this).css("transform", "rotate(" + random1 + "deg)");
            $(canvasGroup1).css("transform", "rotate(" + random1 + "deg)");
            $(canvas5).css("transform", "rotate(" + random1 + "deg)");
            $(canvas6).css("transform", "rotate(" + random1 + "deg)");
        }, function() {
            $(this).css("transform", "rotate(0deg)");
            $(canvasGroup1).css("transform", "rotate(0deg)");
            $(canvas5).css("transform", "rotate(0deg)");
            $(canvas6).css("transform", "rotate(0deg)");
        });

        $(tulip2M).hover(function() {
            $(this).css("transform", "rotate(" + random1 + "deg)");
            $(canvasGroup3).css("transform", "rotate(" + random1 + "deg)");
            $(canvas11).css("transform", "rotate(" + random1 + "deg)");
            $(canvas12).css("transform", "rotate(" + random1 + "deg)");
        }, function() {
            $(this).css("transform", "rotate(0deg)");
            $(canvasGroup3).css("transform", "rotate(0deg)");
            $(canvas11).css("transform", "rotate(0deg)");
            $(canvas12).css("transform", "rotate(0deg)");
        });

        $(tulip3M).hover(function() {
            $(this).css("transform", "rotate(" + random1 + "deg)");
            $(canvasGroup5).css("transform", "rotate(" + random1 + "deg)");
            $(canvas17).css("transform", "rotate(" + random1 + "deg)");
            $(canvas18).css("transform", "rotate(" + random1 + "deg)");
        }, function() {
            $(this).css("transform", "rotate(0deg)");
            $(canvasGroup5).css("transform", "rotate(0deg)");
            $(canvas17).css("transform", "rotate(0deg)");
            $(canvas18).css("transform", "rotate(0deg)");
        });

        $(tulip4M).hover(function() {
            $(this).css("transform", "rotate(" + random1 + "deg)");
            $(canvasGroup7).css("transform", "rotate(" + random1 + "deg)");
            $(canvas23).css("transform", "rotate(" + random1 + "deg)");
            $(canvas24).css("transform", "rotate(" + random1 + "deg)");
        }, function() {
            $(this).css("transform", "rotate(0deg)");
            $(canvasGroup7).css("transform", "rotate(0deg)");
            $(canvas23).css("transform", "rotate(0deg)");
            $(canvas24).css("transform", "rotate(0deg)");
        });

        $(tulip5M).hover(function() {
            $(this).css("transform", "rotate(" + random1 + "deg)");
            $(canvasGroup9).css("transform", "rotate(" + random1 + "deg)");
            $(canvas29).css("transform", "rotate(" + random1 + "deg)");
            $(canvas30).css("transform", "rotate(" + random1 + "deg)");
        }, function() {
            $(this).css("transform", "rotate(0deg)");
            $(canvasGroup9).css("transform", "rotate(0deg)");
            $(canvas29).css("transform", "rotate(0deg)");
            $(canvas30).css("transform", "rotate(0deg)");
        });

        $(tulip6M).hover(function() {
            $(this).css("transform", "rotate(" + random1 + "deg)");
            $(canvasGroup11).css("transform", "rotate(" + random1 + "deg)");
            $(canvas35).css("transform", "rotate(" + random1 + "deg)");
            $(canvas36).css("transform", "rotate(" + random1 + "deg)");
        }, function() {
            $(this).css("transform", "rotate(0deg)");
            $(canvasGroup11).css("transform", "rotate(0deg)");
            $(canvas35).css("transform", "rotate(0deg)");
            $(canvas36).css("transform", "rotate(0deg)");
        });

        canvasGroup1.onclick = flowerMotion1;
        canvas5.onclick = leafMotion1;
        canvas6.onclick = leafMotion1;

        canvasGroup3.onclick = flowerMotion2;
        canvas11.onclick = leafMotion2;
        canvas12.onclick = leafMotion2;

        canvasGroup5.onclick = flowerMotion3;
        canvas17.onclick = leafMotion3;
        canvas18.onclick = leafMotion3;

        canvasGroup7.onclick = flowerMotion4;
        canvas23.onclick = leafMotion4;
        canvas24.onclick = leafMotion4;

        canvasGroup9.onclick = flowerMotion5;
        canvas29.onclick = leafMotion5;
        canvas30.onclick = leafMotion5;

        canvasGroup11.onclick = flowerMotion6;
        canvas35.onclick = leafMotion6;
        canvas36.onclick = leafMotion6;

        function flowerMotion1() {
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

        function flowerMotion2() {
            $(canvasGroup3)
            .animate2({ transform: 'rotate(' + random1_1 + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1_2 + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas7)
            .animate2({ transform: 'rotate(' + random2_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random2_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
            $(canvas8)
            .animate2({ transform: 'rotate(' + random3_1 + 'deg)' }, 155)
            .animate2({ transform: 'rotate(' + random3_2 + 'deg)' }, 125)
            .animate2({ transform: 'rotate(0deg)' }, 160);
            $(canvas9)
            .animate2({ transform: 'rotate(' + random4_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random4_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
        }

        function flowerMotion3() {
            $(canvasGroup5)
            .animate2({ transform: 'rotate(' + random1_1 + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1_2 + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas13)
            .animate2({ transform: 'rotate(' + random2_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random2_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
            $(canvas14)
            .animate2({ transform: 'rotate(' + random3_1 + 'deg)' }, 155)
            .animate2({ transform: 'rotate(' + random3_2 + 'deg)' }, 125)
            .animate2({ transform: 'rotate(0deg)' }, 160);
            $(canvas15)
            .animate2({ transform: 'rotate(' + random4_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random4_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
        }

        function flowerMotion4() {
            $(canvasGroup7)
            .animate2({ transform: 'rotate(' + random1_1 + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1_2 + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas19)
            .animate2({ transform: 'rotate(' + random2_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random2_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
            $(canvas20)
            .animate2({ transform: 'rotate(' + random3_1 + 'deg)' }, 155)
            .animate2({ transform: 'rotate(' + random3_2 + 'deg)' }, 125)
            .animate2({ transform: 'rotate(0deg)' }, 160);
            $(canvas21)
            .animate2({ transform: 'rotate(' + random4_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random4_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
        }

        function flowerMotion5() {
            $(canvasGroup9)
            .animate2({ transform: 'rotate(' + random1_1 + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1_2 + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas25)
            .animate2({ transform: 'rotate(' + random2_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random2_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
            $(canvas26)
            .animate2({ transform: 'rotate(' + random3_1 + 'deg)' }, 155)
            .animate2({ transform: 'rotate(' + random3_2 + 'deg)' }, 125)
            .animate2({ transform: 'rotate(0deg)' }, 160);
            $(canvas27)
            .animate2({ transform: 'rotate(' + random4_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random4_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
        }

        function flowerMotion6() {
            $(canvasGroup11)
            .animate2({ transform: 'rotate(' + random1_1 + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1_2 + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas31)
            .animate2({ transform: 'rotate(' + random2_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random2_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
            $(canvas32)
            .animate2({ transform: 'rotate(' + random3_1 + 'deg)' }, 155)
            .animate2({ transform: 'rotate(' + random3_2 + 'deg)' }, 125)
            .animate2({ transform: 'rotate(0deg)' }, 160);
            $(canvas33)
            .animate2({ transform: 'rotate(' + random4_1 + 'deg)' }, 140)
            .animate2({ transform: 'rotate(' + random4_2 + 'deg)' }, 110)
            .animate2({ transform: 'rotate(0deg)' }, 145);
        }

        function leafMotion1() {
            $(canvas5)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas6)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 150)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 155);
        }

        function leafMotion2() {
            $(canvas11)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas12)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 150)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 155);
        }

        function leafMotion3() {
            $(canvas17)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas18)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 150)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 155);
        }

        function leafMotion4() {
            $(canvas23)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas24)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 150)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 155);
        }

        function leafMotion5() {
            $(canvas29)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas30)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 150)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 155);
        }

        function leafMotion6() {
            $(canvas35)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 90)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 125);
            $(canvas36)
            .animate2({ transform: 'rotate(' + (random1_1 * 0.5) + 'deg)' }, 150)
            .animate2({ transform: 'rotate(' + (random1_2 * 0.5) + 'deg)' }, 120)
            .animate2({ transform: 'rotate(' + random1 + 'deg)' }, 155);
        }

        canvasGroup1.style.transition = 'transform 0.5s ease 0s';
        canvas5.style.transition = 'transform 1s ease 0s';
        canvas6.style.transition = 'transform 1.4s ease 0s';

        canvasGroup3.style.transition = 'transform 0.5s ease 0s';
        canvas11.style.transition = 'transform 1s ease 0s';
        canvas12.style.transition = 'transform 1.4s ease 0s';

        canvasGroup5.style.transition = 'transform 0.5s ease 0s';
        canvas17.style.transition = 'transform 1s ease 0s';
        canvas18.style.transition = 'transform 1.4s ease 0s';

        canvasGroup7.style.transition = 'transform 0.5s ease 0s';
        canvas23.style.transition = 'transform 1s ease 0s';
        canvas24.style.transition = 'transform 1.4s ease 0s';

        canvasGroup9.style.transition = 'transform 0.5s ease 0s';
        canvas29.style.transition = 'transform 1s ease 0s';
        canvas30.style.transition = 'transform 1.4s ease 0s';

        canvasGroup11.style.transition = 'transform 0.5s ease 0s';
        canvas35.style.transition = 'transform 1s ease 0s';
        canvas36.style.transition = 'transform 1.4s ease 0s';
    }

    tulip1M.addEventListener('mouseleave', (event) => {
        random1 = (Math.random() * 16) - (Math.random() * 16);
        random2 = (Math.random() * 3) - (Math.random() * 3);
        random3 = (Math.random() * 3) - (Math.random() * 3);
        random4 = (Math.random() * 3) - (Math.random() * 3);

        canvasGroup1.style.transform = "rotate(0deg)";
        canvas5.style.transform = "rotate(0deg)";
        canvas6.style.transform = "rotate(0deg)";
    });

    tulip2M.addEventListener('mouseleave', (event) => {
        random1 = (Math.random() * 16) - (Math.random() * 16);
        random2 = (Math.random() * 3) - (Math.random() * 3);
        random3 = (Math.random() * 3) - (Math.random() * 3);
        random4 = (Math.random() * 3) - (Math.random() * 3);

        canvasGroup3.style.transform = "rotate(0deg)";
        canvas11.style.transform = "rotate(0deg)";
        canvas12.style.transform = "rotate(0deg)";
    });

    tulip3M.addEventListener('mouseleave', (event) => {
        random1 = (Math.random() * 16) - (Math.random() * 16);
        random2 = (Math.random() * 3) - (Math.random() * 3);
        random3 = (Math.random() * 3) - (Math.random() * 3);
        random4 = (Math.random() * 3) - (Math.random() * 3);

        canvasGroup5.style.transform = "rotate(0deg)";
        canvas17.style.transform = "rotate(0deg)";
        canvas18.style.transform = "rotate(0deg)";
    });

    tulip4M.addEventListener('mouseleave', (event) => {
        random1 = (Math.random() * 16) - (Math.random() * 16);
        random2 = (Math.random() * 3) - (Math.random() * 3);
        random3 = (Math.random() * 3) - (Math.random() * 3);
        random4 = (Math.random() * 3) - (Math.random() * 3);

        canvasGroup7.style.transform = "rotate(0deg)";
        canvas23.style.transform = "rotate(0deg)";
        canvas24.style.transform = "rotate(0deg)";
    });

    tulip5M.addEventListener('mouseleave', (event) => {
        random1 = (Math.random() * 16) - (Math.random() * 16);
        random2 = (Math.random() * 3) - (Math.random() * 3);
        random3 = (Math.random() * 3) - (Math.random() * 3);
        random4 = (Math.random() * 3) - (Math.random() * 3);

        canvasGroup9.style.transform = "rotate(0deg)";
        canvas29.style.transform = "rotate(0deg)";
        canvas30.style.transform = "rotate(0deg)";
    });

    tulip6M.addEventListener('mouseleave', (event) => {
        random1 = (Math.random() * 16) - (Math.random() * 16);
        random2 = (Math.random() * 3) - (Math.random() * 3);
        random3 = (Math.random() * 3) - (Math.random() * 3);
        random4 = (Math.random() * 3) - (Math.random() * 3);

        canvasGroup11.style.transform = "rotate(0deg)";
        canvas35.style.transform = "rotate(0deg)";
        canvas36.style.transform = "rotate(0deg)";
    });

    $(tulip1M).draggable();
    $(tulip2M).draggable();
    $(tulip3M).draggable();
    $(tulip4M).draggable();
    $(tulip5M).draggable();
    $(tulip6M).draggable();
});