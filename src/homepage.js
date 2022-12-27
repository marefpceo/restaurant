const content = document.getElementById('content');
const header = document.createElement('header');
const section = document.createElement('section');
const footer = document.createElement('footer');

function buildMenu() {
  const menu = ['Home', 'Breakfast', 'Lunch'];
  const ul = document.createElement('ul');

  for (let i = 0; i < menu.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = menu[i];
    ul.appendChild(li);
  }
  return ul;
}

function buildHours() {
  const hours = '7am - 3pm';
  const wHours = '6am - 6pm';
  const day = [`Monday ${hours}`,
              `Tuesday ${hours}`, 
              `Wednesday ${hours}`,
              `Thursday ${hours}`,
              `Friday ${wHours}`,
              `Saturday ${wHours}`,
              `Sunday ${wHours}`];
  const ul = document.createElement('ul');

  for (let i = 0; i < day.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = day[i];
    ul.appendChild(li);
  }
  return ul;
}

function buildFooter() {
  const serviceOpt = ['Dine In', 'Carry Out', 'Delivery'];
  
  for (let i = 0; i < serviceOpt.length; i += 1) {
    const p = document.createElement('p');
    p.innerHTML = serviceOpt[i];
    footer.appendChild(p);
  }
  return footer;
}

function loadHomepage() {
  const h1 = document.createElement('h1');
  h1.innerText = 'The Veggie Table';
  header.appendChild(h1);
  header.appendChild(buildMenu());

  const logo = document.createElement('img');
  logo.src = '/src/images/logo.svg';
  section.appendChild(logo);

  const p = document.createElement('p');
  p.textContent = 'Farm to table. . . Fresh to dressed!!';
  section.appendChild(p);
  section.appendChild(buildHours());

  content.appendChild(header);
  content.appendChild(section);
  content.appendChild(buildFooter());
  
  return content;
}

export { buildMenu, loadHomepage, content, header, section };