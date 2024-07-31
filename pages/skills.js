import chalk from 'chalk';

import resumeTemplate from './resumeTemplate.js';

export class Skills extends resumeTemplate {

    constructor() {
        super('Skills');
    }

    async populate() {
        console.log("Hello from skills.js");
    }
}