#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RunCommandModule = require("./classes/RunCommand");
var command = process.argv;
new RunCommandModule.RunCommand().init(command);
