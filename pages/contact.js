import chalk from 'chalk';

import resumeTemplate from './resumeTemplate.js';

export class Contact extends resumeTemplate {
    constructor() {
        super('Contact');
    }

    async populate() {
        const _email = chalk.bold.blue('Email: ') + chalk.white('hunter.crandall18@gmail.com');
        const _phone = chalk.bold.blue('Phone: ') + chalk.white('801-682-5641');
        const _linkedin = chalk.bold.blue('LinkedIn: ') + chalk.white('linkedin.com/in/hcrandall');
        const _github = chalk.bold.blue('GitHub: ') + chalk.white('github.com/hcran18');
        const _website = chalk.bold.blue('Website: ') + chalk.white('huntercrandall.com');

        console.log(`\n\t- ${_email}\n\t- ${_phone}\n\t- ${_linkedin}\n\t- ${_github}\n\t- ${_website}\n`);
    }
}