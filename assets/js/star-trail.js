/* 小星星鼠标拖尾：淡金色小星星跟随鼠标，渐隐下落 */
(function() {
  var canvas = document.getElementById('star-trail');
  if (!canvas) return;
  var ctx = canvas.getContext('2d'), stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var lastX = -9999, lastY = -9999;

  document.addEventListener('mousemove', function(e) {
    var dx = e.clientX - lastX, dy = e.clientY - lastY;
    // 移动距离够大才生成，避免静止时堆积
    if (dx * dx + dy * dy > 36) {
      for (var k = 0; k < 2; k++) {
        stars.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 0.8 + 0.2,
          r: Math.random() * 2 + 1,
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
          rot: Math.random() * 6.283,
          vr: (Math.random() - 0.5) * 0.1
        });
      }
      lastX = e.clientX; lastY = e.clientY;
    }
    if (stars.length > 300) stars.splice(0, stars.length - 300);
  });

  function drawStar(x, y, r, rot, alpha, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    for (var i = 0; i < 5; i++) {
      var a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      var px = Math.cos(a) * r, py = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function isDark() {
    return document.documentElement.getAttribute('data-bs-theme') === 'dark';
  }

  (function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var color = isDark() ? '#e8d48b' : '#b08d4f';
    for (var i = stars.length - 1; i >= 0; i--) {
      var s = stars[i];
      s.x += s.vx; s.y += s.vy; s.rot += s.vr;
      s.life -= s.decay;
      if (s.life <= 0) { stars.splice(i, 1); continue; }
      drawStar(s.x, s.y, s.r * s.life + 0.5, s.rot, s.life * 0.85, color);
    }
    requestAnimationFrame(tick);
  })();
})();
