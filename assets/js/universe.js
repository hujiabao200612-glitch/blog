/* 星空 + 流星背景：仅在暗色模式下生效（改编自百里飞洋的 universe.js 教程） */
(function() {
  var canvas = document.getElementById('universe');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W, H, stars = [], COUNT_RATIO = 0.216;

  function isDark() {
    return document.documentElement.getAttribute('data-bs-theme') === 'dark';
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rnd(a, b) { return Math.random() * (b - a) + a; }
  function maybe(p) { return Math.floor(Math.random() * 1000) + 1 < 10 * p; }

  var COLOR_GIANT = '180,184,240', COLOR_STAR = '226,225,142', COLOR_COMET = '226,225,224';

  function Star() {
    this.reset = function(init) {
      this.giant = maybe(3);
      this.comet = !this.giant && !init && maybe(10);
      this.x = rnd(0, W - 10);
      this.y = rnd(0, H);
      this.r = rnd(1.1, 2.6);
      var speed = rnd(0.05, 0.3);
      this.dx = speed + (this.comet ? 1 : 0) * speed * rnd(50, 120) + 2 * speed;
      this.dy = -speed - (this.comet ? 1 : 0) * speed * rnd(50, 120);
      this.opacity = 0;
      this.opacityMax = rnd(0.2, 1 - 0.4 * (this.comet ? 1 : 0));
      this.fadeSpeed = rnd(0.0005, 0.002) + 0.001 * (this.comet ? 1 : 0);
      this.fadingIn = true;
      this.fadingOut = false;
    };
    this.fadeIn = function() {
      if (this.fadingIn) {
        this.fadingIn = !(this.opacity > this.opacityMax);
        this.opacity += this.fadeSpeed;
      }
    };
    this.fadeOut = function() {
      if (this.fadingOut) {
        this.fadingOut = !(this.opacity < 0);
        this.opacity -= this.fadeSpeed / 2;
        if (this.x > W || this.y < 0) { this.fadingOut = false; this.reset(false); }
      }
    };
    this.move = function() {
      this.x += this.dx;
      this.y += this.dy;
      if (this.fadingOut === false && this.opacity <= 0 && !this.fadingIn) this.reset(false);
      if (this.x > W - W / 4 || this.y < 0) this.fadingOut = true;
    };
    this.draw = function() {
      ctx.beginPath();
      if (this.giant) {
        ctx.fillStyle = 'rgba(' + COLOR_GIANT + ',' + this.opacity + ')';
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      } else if (this.comet) {
        ctx.fillStyle = 'rgba(' + COLOR_COMET + ',' + this.opacity + ')';
        ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);
        for (var t = 0; t < 30; t++) {
          ctx.fillStyle = 'rgba(' + COLOR_COMET + ',' + (this.opacity - this.opacity / 20 * t) + ')';
          ctx.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2);
          ctx.fill();
        }
      } else {
        ctx.fillStyle = 'rgba(' + COLOR_STAR + ',' + this.opacity + ')';
        ctx.rect(this.x, this.y, this.r, this.r);
      }
      ctx.closePath();
      ctx.fill();
    };
    this.reset(true);
  }

  function init() {
    resize();
    stars = [];
    var n = Math.floor(COUNT_RATIO * W);
    for (var i = 0; i < n; i++) stars.push(new Star());
  }

  function frame() {
    if (isDark()) {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.move();
        s.fadeIn();
        s.fadeOut();
        s.draw();
      }
    } else {
      ctx.clearRect(0, 0, W, H);
    }
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', function() { init(); });

  // 主题切换时无需重建，frame 循环里每帧检查即可
  init();
  requestAnimationFrame(frame);
})();
