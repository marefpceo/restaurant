const content = document.getElementById('content');
const header = document.createElement('header');
const section = document.createElement('section');
const footer = document.createElement('footer');

function buildMenu() {
  const menu = ['Home', 'Menu', 'Contact'];
  const ul = document.createElement('ul');

  for (let i = 0; i < menu.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = menu[i];
    ul.appendChild(li);
  }
  return ul;
}

function buildFooter() {
  const serviceOpt = ['Dine In', 'Carry Out', 'Delivery'];
  
  for (let i = 0; i < serviceOpt.length; i += 1) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerHTML = serviceOpt[i];
    div.appendChild(p);
    footer.appendChild(div);
  }
  return footer;
}

function loadPage() {
  const h1 = document.createElement('h1');
  h1.innerText = 'The Veggie Table';
  header.appendChild(h1);
  header.appendChild(buildMenu());

  content.appendChild(header);

  content.appendChild(section);
  content.appendChild(buildFooter());
  return content;
}

export { buildMenu, buildFooter, loadPage, content, header, section };