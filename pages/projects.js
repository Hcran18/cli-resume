import chalk from 'chalk';

import resumeTemplate from './resumeTemplate.js';

export class Projects extends resumeTemplate {

    constructor() {
        super('Projects');
    }

    async populate() {
        console.log("Hello from projects.js");
        const _project1 = chalk.bold.blue('Tweeter: \n') + chalk.white('\tTweeter is a Twitter clone I built for android as part of a course project.\n\tUsers can view other users profiles, follow them, see their posts, and make posts of their own for their friends to see in their feeds.\n\tTechnologies Used: Java, Android Studio, AWS S3, AWS API Gateway, AWS Lambda, AWS DynamoDB, AWS SQS\n');
        const _project2 = chalk.bold.blue('SQL_GPT: \n') + chalk.white('\tSQLGPT is an application that uses GPT-3 to generate answers about a database based on user input.\n\tUsers can ask questions about a database and SQLGPT will use the provided schema to generate a SQL query.\n\tThe query is then run on the database and the results returned to GPT-3 to generate a response. The response is then returned to the user.\n\tTechnologies Used: GPT-3, MySQL, Java\n');

        console.log(`\n\t- ${_project1}\n\t- ${_project2}\n`);
        
    }
}