#!/usr/bin/env node

import inquirer from 'inquirer';
import { execSync } from 'child_process';

const questions = [
    {
      type: 'input',
      name: 'dirName',
      message: 'What is your project named?',
      default: 'my-chat-fu-app'
    }
  ];

inquirer.prompt(questions).then(answers => {
    const { dirName } = answers;

    console.log(`Creating a new Chat-Fu app in directory ${dirName}...`);

    execSync(`git clone https://github.com/Chat-fu/chat-fu.git ${dirName} && cd ${dirName} && npm install`);

    console.log(`Successfully created a new Chat-Fu app in ${dirName}!`);
});