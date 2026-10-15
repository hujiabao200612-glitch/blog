/* 浅色模式全站暖色微粒背景：与首页 hero 同参数的金色粒子网络 */
(function() {
  var canvas = document.getElementById('ambient-particles');
  if (!canvas) return;
  var ctx = canvas.getContext('2d'), pts = [];

  function isLight() {
    return document.documentElement.getAttribute('data-bs-theme') !== 'dark';
  }
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var N = 110;
  for (var i = 0; i < N; i++) {
    pts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.5
    });
  }

  (function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (isLight()) {
      var i, j, p;
      for (i = 0; i < N; i++) {
        p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = 'rgba(139,94,52,0.30)';
        ctx.fill();
      }
      for (i = 0; i < N; i++) for (j = i + 1; j < N; j++) {
        var a = pts[i], b = pts[j],
            dx = a.x - b.x, dy = a.y - b.y,
            d2 = dx * dx + dy * dy;
        if (d2 < 110 * 110) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = 'rgba(139,94,52,' + (0.12 * (1 - d2 / 12100)).toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(tick);
  })();
})();
