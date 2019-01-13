#!/usr/bin/env node

import RunCommandModule = require('./classes/RunCommand');

let command = process.argv;

new RunCommandModule.RunCommand().init(command);