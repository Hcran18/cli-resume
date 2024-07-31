import chalk from 'chalk';

import resumeTemplate from './resumeTemplate.js';

export class Experience extends resumeTemplate {
    constructor() {
        super('Experience');
    }

    async populate() {
        const _jobTitle = chalk.bold.blue('Lead Web Developer');
        const _company = chalk.italic.cyan('BYU College of Fine Arts');
        const _date = chalk.white('August 2023 - Current');
        const _description = chalk.white('Description');

        console.log(`\n\t- ${_jobTitle}\n\t  - ${_company}\n\t  - ${_date}\n\t  - ${_description}\n`);
    }
}