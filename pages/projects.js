import chalk from 'chalk';

import resumeTemplate from './resumeTemplate.js';

export class Projects extends resumeTemplate {

    constructor() {
        super('Projects');
    }

    async populate() {
        console.log("Hello from projects.js");
    }
}