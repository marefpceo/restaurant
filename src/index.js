import defaultExport from './home';
import { loadPage } from './pageload';


function component() {
    
    loadPage();
    defaultExport.loadHome();
    return console.log('index.js test');
}

component();