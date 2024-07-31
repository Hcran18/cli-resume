import chalk from 'chalk';

import resumeTemplate from './resumeTemplate.js';

export class Education extends resumeTemplate {
    constructor() {
        super('Education');
    }

    async populate() {
        const _degree = chalk.bold.blue('B.S. in Computer Science');
        const _university = chalk.italic.cyan('Brigham Young University');
        const _gradYear = chalk.white('Graduating December 2024');

        console.log(`\n\t- ${_degree}\n\t  - ${_university}\n\t  - ${_gradYear}\n`);
    }
}