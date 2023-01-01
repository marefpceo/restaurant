import { loadPage , header , section, buildMenu } from './pageload';
import home from './home';
import menuLoad from './menu';
import contact from './contact';


function clearSection() {
    header.lastElementChild.replaceWith(buildMenu());
    section.innerHTML = '';
}

function component() {
    loadPage();
    home.loadHome();

    header.addEventListener('click', (e)=> { 
        if (e.target.id === 'Menu'){
            clearSection();
            menuLoad.menuLoad();
        }

        if (e.target.id === 'Contact') {
            clearSection();
            contact.contactLoad();
        }

        if (e.target.id === 'Home') {
            clearSection();
            home.loadHome();
        }
    });
}

component();