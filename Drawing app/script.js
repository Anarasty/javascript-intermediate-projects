window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  /// Example 1
  // ctx.strokeStyle = "red";
  // ctx.lineWidth = 5;
  // ctx.strokeRect(100, 100, 200, 500);
  // ctx.strokeStyle = "blue";
  // ctx.lineWidth = 23;
  // ctx.strokeRect(200, 200, 200, 500);

  /// Example 2
  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(200, 100);
  // ctx.lineTo(200, 150);
  // ctx.closePath();
  // ctx.stroke();

  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "blue";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);
});
