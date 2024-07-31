#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import { createSpinner } from 'nanospinner';

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

let resume;

async function welcome() {
    console.log(gradient.mind(figlet.textSync('Hunter Crandall\'s\nResume\n', {
        font: 'standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
        whitespaceBreak: true
    })));

    await askResume();
}

export async function askResume() {
    const answers = await inquirer.prompt({
        type: 'list',
        name: 'resume',
        message: 'What would you like to do?',
        choices: [
            'Job Experience',
            'Education',
            'Skills',
            'Projects',
            'Contact',
            'Exit'
        ]
    });

    resume = answers.resume;

    switch (resume) {
        case 'Job Experience':
            handleAnswer(viewExperience);
            break;
        case 'Education':
            handleAnswer(viewEducation);
            break;  
        case 'Skills':
            handleAnswer(viewSkills);
            break;
        case 'Projects':
            handleAnswer(viewProjects);
            break;
        case 'Contact':
            handleAnswer(contact);
            break;
        case 'Exit':
            handleAnswer(exit);
    }
}

async function viewExperience() {
    console.log(gradient.mind(figlet.textSync('Experience\n', {
        font: 'standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
        whitespaceBreak: true
    })));

    const jobTitle = chalk.bold.blue('Lead Web Developer');
    const company = chalk.italic.cyan('BYU College of Fine Arts');
    const date = chalk.white('August 2023 - Current');
    const description = chalk.white('Description');

    console.log(`\n\t- ${jobTitle}\n\t  - ${company}\n\t  - ${date}\n\t  - ${description}\n`);

    await askResume();

    return;
}

async function viewEducation() {
    console.log(gradient.mind(figlet.textSync('Education\n', {
        font: 'standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
        whitespaceBreak: true
    })));

    const degree = chalk.bold.blue('B.S. in Computer Science');
    const university = chalk.italic.cyan('Brigham Young University');
    const gradYear = chalk.white('Graduating December 2024');

    console.log(`\n\t- ${degree}\n\t  - ${university}\n\t  - ${gradYear}\n`);

    await askResume();

    return;
}

async function viewSkills() {
    console.log(gradient.mind(figlet.textSync('Skills\n', {
        font: 'standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
        whitespaceBreak: true
    })));
    //TODO: Add skills
    await askResume();

    return;
}

async function viewProjects() {
    console.log(gradient.mind(figlet.textSync('Projects\n', {
        font: 'standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
        whitespaceBreak: true
    })));
    //TODO: Add projects
    await askResume();

    return;
}

async function contact() {
    console.log(gradient.mind(figlet.textSync('Contact\n', {
        font: 'standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
        whitespaceBreak: true
    })));

    const email = chalk.bold.blue('Email: ') + chalk.white('hunter.crandall18@gmail.com');
    const phone = chalk.bold.blue('Phone: ') + chalk.white('801-682-5641');
    const linkedin = chalk.bold.blue('LinkedIn: ') + chalk.white('linkedin.com/in/hcrandall');
    const github = chalk.bold.blue('GitHub: ') + chalk.white('github.com/hcran18');
    const website = chalk.bold.blue('Website: ') + chalk.white('huntercrandall.com');

    console.log(`\n\t- ${email}\n\t- ${phone}\n\t- ${linkedin}\n\t- ${github}\n\t- ${website}\n`);

    await askResume();

    return;
}

async function exit() {
    console.log(gradient.mind(figlet.textSync('Goodbye!\n', {
        font: 'standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
        whitespaceBreak: true
    })));
    process.exit(0);
}

async function handleAnswer(functionToCall) {
    const spinner = createSpinner('Loading...\n').start();
    await sleep();
    console.clear();

    if (functionToCall) {
        spinner.success();
        await functionToCall();
    }
    else {
        spinner.error({ text: '404 Page not Found' });
        await askResume();
    }

    return;
}

await welcome();