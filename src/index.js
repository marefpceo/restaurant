// import defaultExport from './home';
import { loadPage } from './pageload';
// import menuLoad from './menu';
import contact from './contact';


function component() {
    
    loadPage();
    // menuLoad.menuLoad();
    // defaultExport.loadHome();
    contact.contactLoad();
}

component();