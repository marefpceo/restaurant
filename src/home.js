import { section } from './pageload';
import logo from './images/logo.svg';

function buildHours() {
  const hours = '7am - 3pm';
  const wHours = '6am - 6pm';
  const day = [`Monday:  ${hours}`,
              `Tuesday:  ${hours}`, 
              `Wednesday:  ${hours}`,
              `Thursday:  ${hours}`,
              `Friday:  ${wHours}`,
              `Saturday:  ${wHours}`,
              `Sunday:  ${wHours}`];
  const ul = document.createElement('ul');

  for (let i = 0; i < day.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = day[i];
    ul.appendChild(li);
  }
  return ul;
}

function loadHome() {
  const logoImg = document.createElement('img');
  const activeTab = document.getElementById('Home');
  activeTab.id = 'current';
  logoImg.src = logo;
  logoImg.width = '249';
  logoImg.height = '169';
  section.appendChild(logoImg);

  const p = document.createElement('p');
  p.textContent = 'Farm to table. . . Fresh to dressed!!';

  section.appendChild(p);
  section.appendChild(buildHours());
}

export default { loadHome };
