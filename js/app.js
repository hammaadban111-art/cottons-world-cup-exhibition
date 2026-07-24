/* Global Bakes Style Controller — BCBS Centenary Block Exhibition */
import { awardsData, topTeamsData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  renderAwards();
  renderTeams();
});

/* LOADER SCREEN */
function initLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    if (loader) loader.classList.add('done');
  }, 1000);
}

/* 1. 2026 WORLD CUP AWARDS WITH VERIFIED PLAYER FACE PORTRAITS */
function renderAwards() {
  const container = document.getElementById('awardsGrid');
  if (!container) return;

  container.innerHTML = awardsData.map(award => `
    <div class="award-card">
      <div style="height:240px; overflow:hidden; background:var(--bg3);">
        <img src="${award.img}" alt="${award.winner}" class="award-card-img" style="width:100%; height:100%; object-fit:cover; object-position:top center;" loading="eager">
      </div>
      <div class="award-card-content">
        <div class="award-title">${award.title}</div>
        <div class="award-winner">${award.winner}</div>
        <div class="award-detail">${award.detail}</div>
      </div>
    </div>
  `).join('');
}

/* 2. TOP 8 TEAMS WITH VERIFIED NATIONAL TEAM CELEBRATION PHOTOS */
function renderTeams() {
  const container = document.getElementById('teamsGrid');
  if (!container) return;

  container.innerHTML = topTeamsData.map(team => `
    <div class="team-editorial-card">
      <div style="height:200px; overflow:hidden; border-radius:6px; margin-bottom:16px; border:1px solid var(--line); background:var(--bg3);">
        <img src="${team.img}" alt="${team.name}" style="width:100%; height:100%; object-fit:cover; display:block;" loading="eager">
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <h3 class="team-editorial-title">${team.name}</h3>
        <span class="team-editorial-rank">${team.rank}</span>
      </div>

      <div style="font-size:0.85rem; color:var(--accent); margin-bottom:8px; text-transform:uppercase; font-family:'Cormorant Garamond', serif;">
        Key Stars: ${team.star}
      </div>

      <div style="font-size:0.82rem; color:var(--text3); margin-bottom:12px;">
        Tactical Style: <span style="color:var(--text2);">${team.tactics}</span>
      </div>

      <div style="font-size:0.85rem; color:var(--text2); border-top:1px solid var(--line); padding-top:10px;">
        <strong>Pathway:</strong> ${team.pathway}
      </div>
    </div>
  `).join('');
}
