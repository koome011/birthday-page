    // Create stars background
    const stars = document.querySelector('.stars');
    for(let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3}px;
        height: ${Math.random() * 3}px;
        background: white;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random()};
        animation: twinkle ${1 + Math.random() * 3}s infinite;
      `;
      stars.appendChild(star);
    }

    // Create butterflies
    setInterval(() => {
      const butterfly = document.createElement('div');
      butterfly.className = 'butterfly';
      butterfly.style.left = `${Math.random() * 100}%`;
      document.body.appendChild(butterfly);
      setTimeout(() => butterfly.remove(), 20000);
    }, 3000);

    // Music and visualizer setup
    let isPlaying = false;
    const audio = document.getElementById('birthday-music');
    const visualizer = document.getElementById('visualizer');
    
    // Create visualizer bars
    for(let i = 0; i < 30; i++) {
      const bar = document.createElement('div');
      bar.className = 'bar';
      visualizer.appendChild(bar);
    }

    function toggleMusic() {
      const btn = document.getElementById('musicBtn');
      const bars = document.querySelectorAll('.bar');
      
      if (isPlaying) {
        audio.pause();
        btn.textContent = '🎵 Play Music';
        bars.forEach(bar => bar.style.animation = 'none');
        visualizer.style.display = 'none';
      } else {
        audio.play();
        btn.textContent = '🎵 Pause Music';
        visualizer.style.display = 'flex';
        bars.forEach((bar, i) => {
          bar.style.animation = `barDance ${0.5 + Math.random()}s ease-in-out infinite`;
          bar.style.animationDelay = `${i * 0.1}s`;
        });
      }
      isPlaying = !isPlaying;
    }

    document.getElementById('photo-upload').addEventListener('change', function(e) {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById('photo').src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    });

    // Add stars twinkling animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      @keyframes barDance {
        0%, 100% { height: 20px; }
        50% { height: 50px; }
      }
    `;
    document.head.appendChild(style);