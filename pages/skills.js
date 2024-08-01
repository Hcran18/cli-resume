import chalk from 'chalk';

import resumeTemplate from './resumeTemplate.js';

export class Skills extends resumeTemplate {

    constructor() {
        super('Skills');
    }

    async populate() {
        const _codingLanguages = chalk.bold.blue('Languages: ') + chalk.white('C, C++, Java, Python, JavaScript, HTML, CSS');
        const _frameworks = chalk.bold.blue('Frameworks: ') + chalk.white('React, Node.js, Express');
        const _databases = chalk.bold.blue('Databases: ') + chalk.white('MySQL, DynamoDB, MongoDB');
        const _tools = chalk.bold.blue('Tools: ') + chalk.white('Git, AWS, Netlify');

        console.log(`\n\t- ${_codingLanguages}\n\t- ${_frameworks}\n\t- ${_databases}\n\t- ${_tools}\n`);

    }
}