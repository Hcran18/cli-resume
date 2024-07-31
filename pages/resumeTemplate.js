import gradient from 'gradient-string';
import figlet from 'figlet';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

class resumeTemplate {
    title;
    sections;

    constructor(title, sections = []) {
        this._title = title;
        this._sections = sections;
    }

    async view(sections) {
        this._sections = sections;

        console.log(gradient.mind(figlet.textSync(`${this._title}\n`, {
            font: 'standard',
            horizontalLayout: 'fitted',
            verticalLayout: 'fitted',
            whitespaceBreak: true
        })));
        
        this.populate();

        await this.askResume();
    
        return;
    }

    async populate() {
        throw new Error('You have to implement the method populate in the subclasses!');
    }

    async askResume() {
        const sectionChoices = this._sections.map(section => section._title).concat('Exit');

        const answers = await inquirer.prompt({
            type: 'list',
            name: 'resume',
            message: 'What would you like to do?',
            choices: sectionChoices
        });
    
        const selectedSection = answers.resume;

        if (selectedSection === 'Exit') {
            console.clear();
            console.log(gradient.mind(figlet.textSync('Goodbye!\n', {
                font: 'standard',
                horizontalLayout: 'fitted',
                verticalLayout: 'fitted',
                whitespaceBreak: true
            })));

            process.exit(0);
        } 
        else {
            const section = this._sections.find(section => section._title === selectedSection);
            await this.handleAnswer(section, this._sections);
        }
    }

    async handleAnswer(section, sections) {
        const spinner = createSpinner('Loading...\n').start();
        await sleep();
        console.clear();

        if (section) {
            spinner.success();
            await section.view(sections);
        } else {
            spinner.error({ text: '404 Page not Found' });
            await this.askResume();
        }

        return;
    }

}

export default resumeTemplate;