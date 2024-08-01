#!/usr/bin/env node
import figlet from 'figlet';
import gradient from 'gradient-string';

import resumeTemplate from './pages/resumeTemplate.js';
import { Experience } from './pages/experience.js';
import { Education } from './pages/education.js';
import { Skills } from './pages/skills.js';
import { Projects } from './pages/projects.js';
import { Contact } from './pages/contact.js';

async function welcome() {
    console.log(gradient.mind(figlet.textSync('Hunter Crandall\'s\nResume\n', {
        font: 'standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted',
        whitespaceBreak: true
    })));

    const sections = [
        new Experience(),
        new Education(),
        new Skills(),
        new Projects(),
        new Contact()
    ];

    const resume = new resumeTemplate('Resume', sections);
    await resume.askResume();
}

await welcome();
