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
  let motionPreference = 'system';
  let pointerFrame = 0;
  let pointerX = 0;
  let pointerY = 0;
  try {
    const saved = localStorage.getItem('homepage-motion');
    if (saved === 'paused' || saved === 'running') motionPreference = saved;
  } catch { /* Optional preference. */ }
  function motionDisabled() {
    return motionPreference === 'paused' || (motionPreference === 'system' && reduceMotion.matches);
  }
  function motionStopped() { return motionDisabled() || document.hidden; }
  function updateMotion() {
    const paused = motionDisabled();
    const systemReduced = motionPreference === 'system' && reduceMotion.matches;
    document.documentElement.dataset.motionPreference = motionPreference;
    document.documentElement.dataset.motion = motionStopped() ? 'paused' : 'running';
    motionButton.hidden = false;
    motionButton.disabled = false;
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.textContent = systemReduced
      ? (language === 'zh' ? '动效：已减弱 · 点击开启 ↗' : 'FX: REDUCED · PLAY ↗')
      : language === 'zh'
        ? (paused ? '动效：关 · 开启 ↗' : '动效：开 · 暂停 Ⅱ')
        : (paused ? 'FX: OFF · PLAY ↗' : 'FX: ON · PAUSE Ⅱ');
    motionButton.title = systemReduced
      ? (language === 'zh' ? '默认遵循系统设置；点击可为本站开启动效' : 'Following your system preference; click to enable motion on this site')
      : (language === 'zh' ? '控制背景网格、轨道光点和光盘动画' : 'Control the animated grid, orbital signals and compact disc');
    if (motionStopped()) {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      background.style.removeProperty('--pointer-x');
      background.style.removeProperty('--pointer-y');
    }
  }
  motionButton.addEventListener('click', () => {
    motionPreference = motionDisabled() ? 'running' : 'paused';
    try { localStorage.setItem('homepage-motion', motionPreference); } catch { /* Optional preference. */ }
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
  const figureViewer = document.getElementById('figure-viewer');
  if (typeof figureViewer.showModal === 'function') {
    const fullFigure = document.getElementById('figure-full');
    let figureOpener = null;
    document.querySelectorAll('.paper-image').forEach(link => {
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        figureOpener = link;
        const preview = link.querySelector('img');
        fullFigure.src = link.href;
        fullFigure.alt = preview.alt;
        document.getElementById('figure-title').textContent = link.closest('.publication').querySelector('h3').textContent;
        document.getElementById('figure-original').href = link.href;
        figureViewer.showModal();
        document.documentElement.classList.add('figure-open');
      });
    });
    document.getElementById('figure-close').addEventListener('click', () => figureViewer.close());
    figureViewer.addEventListener('click', event => {
      const bounds = figureViewer.getBoundingClientRect();
      if (event.target === figureViewer && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) figureViewer.close();
    });
    figureViewer.addEventListener('close', () => {
      document.documentElement.classList.remove('figure-open');
      figureOpener?.focus({ preventScroll: true });
    });
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
