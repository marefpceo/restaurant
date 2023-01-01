import { section } from './pageload';
import menuItems from './menuItems';

function menuLoad() {
  const activeTab = document.getElementById('Menu');
  activeTab.id = 'current';
  for (let i = 0; i < menuItems.menuItems.length; i += 1){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const imgDiv = document.createElement('div');
    const card = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    div.className = 'items';
    imgDiv.className = 'image-div';
    card.className = 'card';
    img.src = menuItems.menuItems[i].image;
    h2.textContent = menuItems.menuItems[i].item;
    p.textContent = menuItems.menuItems[i].description;
    imgDiv.appendChild(img);
    div.appendChild(imgDiv);
    card.appendChild(h2);
    card.appendChild(p);
    div.appendChild(card);
    section.appendChild(div);
  }
  return section;
}

export default { menuLoad };