// import defaultExport from './home';
import { loadPage } from './pageload';
import menuLoad from './menu';


function component() {
    
    loadPage();
    menuLoad.menuLoad();
    // defaultExport.loadHome();
    return console.log('index.js test');
}

component();