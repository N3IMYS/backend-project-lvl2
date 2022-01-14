#!/usr/bin/env node
import { readFileSync } from 'fs';
import * as path from 'path';
import * as _ from 'lodash';

const differ = (filepath1, filepath2) => {

    const file1 = JSON.parse((readFileSync(path.resolve(process.cwd(), filepath1))));
    const file2 = JSON.parse((readFileSync(path.resolve(process.cwd(), filepath2))));
    let result = _.defaults(file1, file2);
    return result;
};

console.log(differ('examples/ex1.json', 'examples/ex2.json'));
