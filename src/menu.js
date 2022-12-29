import { section } from './pageload';
import menuItems from './menuItems';



function menuLoad() {
  
  for (let i = 0; i < menuItems.menuItems.length; i += 1){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const card = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    div.className = 'items';
    card.className = 'card';
    img.src = menuItems.menuItems[i].image;
    h2.textContent = menuItems.menuItems[i].item;
    p.textContent = menuItems.menuItems[i].description;
    div.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    div.appendChild(card);
    section.appendChild(div);
  }
  return console.log(menuItems.menuItems);
}

export default{ menuLoad };