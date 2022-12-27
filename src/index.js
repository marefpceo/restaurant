import { loadHomepage } from './homepage';

function component() {
    loadHomepage();
    return console.log('index.js test');
}

component();