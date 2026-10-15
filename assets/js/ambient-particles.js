/* 浅色模式全站暖色微粒背景：极淡的金色尘埃缓慢漂浮 */
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

  var N = 40;
  for (var i = 0; i < N; i++) {
    pts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.12,
      r: Math.random() * 1.8 + 0.6,
      a: Math.random() * 0.5 + 0.5,
      ph: Math.random() * 6.283
    });
  }

  (function tick(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (isLight()) {
      for (var i = 0; i < N; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy; p.ph += 0.008;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
        var tw = 0.5 + 0.5 * Math.sin(p.ph);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = 'rgba(176,141,79,' + (0.10 + 0.10 * tw * p.a).toFixed(3) + ')';
        ctx.fill();
      }
    }
    requestAnimationFrame(tick);
  })();
})();
