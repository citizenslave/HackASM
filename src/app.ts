import fs from 'fs';
import { AsmParser } from './AsmParser';

if (process.argv.length < 3) { console.error("No file provided.  Quitting."); process.exit(); }

const filename = process.argv[2];

if (!fs.existsSync(filename)) { console.error ("File not found.  Quitting."); process.exit(); }

const file = fs.readFileSync(filename);

const parsedFile = new AsmParser(file.toString()).parse();

const nameParts = filename.split('.');
nameParts[nameParts.length - 1] = 'hack';
const outputName = nameParts.join('.');

fs.writeFileSync(outputName, parsedFile);

console.log(`Assembled Machine Code Written to:\n${outputName}`);
