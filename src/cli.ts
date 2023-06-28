#!/usr/bin/env node
import commander from "commander";
import {translate} from "./main";

const program = new commander.Command();

program.version('0.1.0')
    .name('fy-bd')
    .usage('<a Word>')
    .arguments('<Word>')
    .action(function (word) {
        translate(word)
    });


// parse就是对参数进行解析
program.parse(process.argv);