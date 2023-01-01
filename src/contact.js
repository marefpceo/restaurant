import { section } from './pageload';
import map from './images/map.png';

const address = `1234 Corn Row Dr.<br>
                Some City, CA 90034<br>
                (123) 456-7890`;

function contactLoad() {
  const activeTab = document.getElementById('Contact');
  activeTab.id = 'current';

  const div = document.createElement('div');
  div.className = 'map';

  const img = document.createElement('img');
  img.src = map;

  const addressDiv = document.createElement('div');
  addressDiv.className = 'address-div';

  const p = document.createElement('p');
  
  div.appendChild(img);
  p.innerHTML = address;
  addressDiv.appendChild(p);

  section.appendChild(div);
  section.appendChild(addressDiv);  
}

export default { contactLoad };