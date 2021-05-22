const canvas = document.getElementById('myCanvas');
const brown = "#5A3137"
const pink = "#FFA3AE"
const lightPink = "#FCEBF3"
const white = "#FAFEFD"
const purple = "#B392A8"
if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
  drawText(ctx)
  // 꼬리
  fillTail_2(ctx)
  fillTail(ctx)
  drawTail(ctx)

  // 몸
  fillBody(ctx)
  drawBody(ctx)

  // 귀
  drawEar(ctx, 169, 135, 20, 2.2, 5.9)
  drawEar(ctx, 311, 135, 20, 3.5, 7.3)

  // 얼굴
  drawEllipse(ctx, 145, 116, 190, 158, pink);
  ctx.lineWidth = 2;
  drawFilledFace(ctx)
  drawFilledUnderFace(ctx)
  drawFilledUnderFace_2(ctx)

  // 눈
  ctx.lineWidth = 7;
  ctx.strokeStyle = brown
  drawFilledCircle(ctx, 285, 190, 10.5)
  drawFilledCircle(ctx, 194, 190, 10.5)

  // 코
  ctx.strokeStyle = white
  ctx.fillStyle = white
  drawEllipseByCenter(ctx, 240, 211, 40, 30);
  drawFilledEllipseByCenter(ctx, 240, 208, 19, 14);
}

function drawEllipseByCenter(ctx, cx, cy, w, h) {
  drawEllipse(ctx, cx - w / 2.0, cy - h / 2.0, w, h, white);
}

function drawFilledEllipseByCenter(ctx, cx, cy, w, h) {
  drawEllipse(ctx, cx - w / 2.0, cy - h / 2.0, w, h);
  ctx.fillStyle = brown
  ctx.fill();
}

function drawEllipse(ctx, x, y, w, h, color) {
  var kappa = .5522848,
    ox = (w / 2) * kappa, // control point offset horizontal
    oy = (h / 2) * kappa, // control point offset vertical
    xe = x + w,           // x-end
    ye = y + h,           // y-end
    xm = x + w / 2,       // x-middle
    ym = y + h / 2;       // y-middle

  ctx.beginPath();
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  //ctx.closePath(); // not used correctly, see comments (use to close off open path)
  ctx.fillStyle = color
  ctx.fill()
  ctx.stroke();
}

function drawCircle(ctx, x, y, size) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawFilledCircle(ctx, x, y, size) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.strokeStyle = white
  ctx.fillStyle = brown
  ctx.fill()
  ctx.stroke();
}

function drawEar(ctx, x, y, size, start, end) {
  ctx.beginPath();
  ctx.fillStyle = lightPink
  ctx.arc(x, y, size, start, end);
  ctx.fill()
  ctx.stroke();
}

function drawFilledFace(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = brown
  ctx.fillStyle = brown
  ctx.moveTo(317, 205)
  ctx.bezierCurveTo(345, 100, 130, 110, 163, 205)
  ctx.fill()
  ctx.stroke();
}

function drawFilledUnderFace(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = brown
  ctx.fillStyle = brown
  ctx.moveTo(163, 205)
  ctx.bezierCurveTo(190, 260, 235, 185, 240, 193)
  ctx.fill()
  ctx.stroke();
}
function drawFilledUnderFace_2(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = brown
  ctx.fillStyle = brown
  ctx.moveTo(240, 193)
  ctx.bezierCurveTo(270, 210, 290, 250, 317, 205)
  ctx.fill()
  ctx.stroke();
}

function drawBody(ctx) {
  ctx.beginPath();
  ctx.lineWidth = 7;
  ctx.strokeStyle = brown
  ctx.fillStyle = pink
  ctx.arc(181, 268, 20, 2, 4.2);
  ctx.moveTo(172, 283)
  ctx.bezierCurveTo(160, 310, 180, 335, 240, 318)
  ctx.moveTo(237, 318)
  ctx.bezierCurveTo(310, 340, 310, 310, 307, 283)
  ctx.moveTo(307, 250)
  ctx.arc(300, 270, 20, 5.3, 7.5);
  ctx.fill()
  ctx.stroke();
}

function fillBody(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = pink
  ctx.fillStyle = pink
  ctx.moveTo(240, 315)
  ctx.lineTo(305, 280)
  ctx.lineTo(305, 255)
  ctx.lineTo(174, 255)
  ctx.lineTo(174, 283)
  ctx.lineTo(240, 315)
  ctx.fill()
  ctx.stroke();
}

function drawTail(ctx) {
  ctx.beginPath();
  ctx.lineWidth = 7;
  ctx.strokeStyle = brown
  ctx.moveTo(310, 265)
  ctx.bezierCurveTo(400, 180, 420, 320, 295, 320)
  ctx.stroke();
}

function fillTail(ctx) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = lightPink
  ctx.fillStyle = lightPink
  ctx.moveTo(310, 263)
  ctx.lineTo(340, 312)
  ctx.lineTo(365, 299)
  ctx.lineTo(340, 243)
  ctx.lineTo(310, 263)
  ctx.fill()
  ctx.stroke();
}

function fillTail_2(ctx) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = purple
  ctx.fillStyle = purple
  ctx.moveTo(310, 265)
  ctx.bezierCurveTo(400, 180, 420, 320, 295, 320)
  ctx.lineTo(310, 265)
  ctx.fill()
  ctx.stroke();
}

function drawText(ctx) {
  ctx.font = '30px Comic Sans MS';
  ctx.fillStyle = brown;
  ctx.fillText('Hello DOGURI~!!', 90, 80);
}