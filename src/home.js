import { buildFooter, content, section } from './pageload';

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
  const logo = document.createElement('img');
  logo.src = '/src/images/logo.svg';
  logo.width = '249';
  logo.height = '169';
  section.appendChild(logo);

  const p = document.createElement('p');
  p.textContent = 'Farm to table. . . Fresh to dressed!!';

  section.appendChild(p);
  section.appendChild(buildHours());

  content.appendChild(section);
  content.appendChild(buildFooter());

  return content;
}

export default { loadHome };