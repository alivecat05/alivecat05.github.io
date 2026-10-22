(() => {
  'use strict';
  const toggle = document.getElementById('language-toggle');
  const filters = document.querySelector('.filters');
  let language = 'en';
  let selectedFilter = 'all';
  const motionButton = document.getElementById('motion-toggle');
  const background = document.querySelector('.ambient-grid');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let motionPaused = false;
  let pointerFrame = 0;
  let pointerX = 0;
  let pointerY = 0;
  try { motionPaused = localStorage.getItem('homepage-motion') === 'paused'; } catch { /* Optional preference. */ }
  function motionStopped() { return motionPaused || reduceMotion.matches || document.hidden; }
  function updateMotion() {
    document.documentElement.dataset.motion = motionStopped() ? 'paused' : 'running';
    motionButton.hidden = reduceMotion.matches;
    motionButton.setAttribute('aria-pressed', String(motionPaused));
    motionButton.textContent = language === 'zh'
      ? (motionPaused ? '开启动效 ↗' : '暂停动效 Ⅱ')
      : (motionPaused ? 'Play motion ↗' : 'Pause motion Ⅱ');
    if (motionStopped()) {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      background.style.removeProperty('--pointer-x');
      background.style.removeProperty('--pointer-y');
    }
  }
  motionButton.addEventListener('click', () => {
    motionPaused = !motionPaused;
    try { localStorage.setItem('homepage-motion', motionPaused ? 'paused' : 'running'); } catch { /* Optional preference. */ }
    updateMotion();
  });
  reduceMotion.addEventListener('change', updateMotion);
  document.addEventListener('visibilitychange', updateMotion);
  window.addEventListener('pointermove', event => {
    if (motionStopped() || !finePointer.matches) return;
    pointerX = (event.clientX / window.innerWidth - .5) * 28;
    pointerY = (event.clientY / window.innerHeight - .5) * 22;
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      background.style.setProperty('--pointer-x', `${pointerX.toFixed(1)}px`);
      background.style.setProperty('--pointer-y', `${pointerY.toFixed(1)}px`);
      pointerFrame = 0;
    });
  }, { passive: true });
  const storage = {
    get() { try { return localStorage.getItem('homepage-language'); } catch { return null; } },
    set(value) { try { localStorage.setItem('homepage-language', value); } catch { /* Browsing without storage still works. */ } }
  };
  function updateStatus() {
    const count = [...document.querySelectorAll('.publication')].filter(paper => !paper.hidden).length;
    document.getElementById('filter-status').textContent = language === 'zh' ? `显示 ${count} 篇论文` : `Showing ${count} publications`;
  }
  function setLanguage(value) {
    language = value === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(element => {
      element.textContent = element.dataset[language];
    });
    toggle.textContent = language === 'en' ? '中文 ↗' : 'EN ↗';
    toggle.setAttribute('aria-label', language === 'en' ? '切换到中文' : 'Switch to English');
    filters.setAttribute('aria-label', language === 'en' ? 'Filter publications' : '筛选论文');
    document.title = language === 'en' ? 'Dawei Su · Robotics & Embodied Intelligence' : 'Dawei Su · 机器人学与具身智能';
    updateStatus();
    updateMotion();
  }
  toggle.hidden = false;
  filters.hidden = false;
  setLanguage(storage.get() || 'en');
  toggle.addEventListener('click', () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
    storage.set(language);
  });
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    selectedFilter = button.dataset.filter;
    filters.querySelectorAll('button').forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.publication').forEach(paper => {
      paper.hidden = selectedFilter !== 'all' && paper.dataset.category !== selectedFilter;
    });
    updateStatus();
    updateMotion();
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
