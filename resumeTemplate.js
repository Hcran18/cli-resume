import gradient from 'gradient-string';
import figlet from 'figlet';
import inquirer from 'inquirer';
import { askResume } from './index.js';

class resumeTemplate {
    _title;

    constructor(title) {
        this._title = title;
    }

    async view() {
        console.log(gradient.mind(figlet.textSync(`${this._title}\n`, {
            font: 'standard',
            horizontalLayout: 'fitted',
            verticalLayout: 'fitted',
            whitespaceBreak: true
        })));
        
        this.populate();

        await askResume();
    
        return;
    }

    async populate() {
        throw new Error('You have to implement the method populate in the subclasses!');
    }

    

}

export default resumeTemplate;