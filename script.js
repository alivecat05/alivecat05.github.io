(() => {
  'use strict';
  const toggle = document.getElementById('language-toggle');
  const filters = document.querySelector('.filters');
  let language = 'en';
  let selectedFilter = 'all';
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
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
