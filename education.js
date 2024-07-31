import chalk from 'chalk';

import resumeTemplate from './resumeTemplate.js';

export class Education extends resumeTemplate {
    _degree = chalk.bold.blue('B.S. in Computer Science');
    _university = chalk.italic.cyan('Brigham Young University');
    _gradYear = chalk.white('Graduating December 2024');

    constructor() {
        super('Education');
    }

    async populate() {
        console.log(`\n\t- ${this._degree}\n\t  - ${this._university}\n\t  - ${this._gradYear}\n`);
    }
}