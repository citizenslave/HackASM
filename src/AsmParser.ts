import { cmdMap, defaultSymbols, dstMap, jmpMap } from "./HackCmdMap";

type SymbolLookupTable = {
  [symbol: string]: number;
};

export class AsmParser {
  asmData: string;
  symbols: SymbolLookupTable = Object.assign({}, defaultSymbols);
  variableIdx: number = 0x10;

  constructor(asmData: string) {
    this.asmData = asmData;
  }

  parse(): string {
    const lines = this.asmData.split('\n').filter(l => l.trim() && !l.trim().startsWith('//'));

    const parsedLines = this.extractLabels(lines).map((l, idx) => this.parseLine(l, idx));

    return parsedLines.join('\n');
  }

  extractLabels(lines: string[]): string[] {
    const labelPattern = /\((\S+)\)/;

    const linesWithoutLabels = [];

    lines.forEach(l => {
      const labelMatch = labelPattern.exec(l);
      if (!labelMatch) { linesWithoutLabels.push(l); return; }

      this.symbols[labelMatch[1].trim()] = linesWithoutLabels.length;
    });

    return linesWithoutLabels;
  }

  parseLine(line: string, idx: number): string {
    const aCmdPattern = /@(\S+)/;

    const strippedComments = line.split('//')[0];

    const aCmdData = aCmdPattern.exec(strippedComments);
    if (aCmdData) {
      const aValue = aCmdData[1].trim();
      if (!isNaN(Number(aValue))) return Number(aValue).toString(2).padStart(16, '0');
      if (this.symbols[aValue] !== undefined) return this.symbols[aValue].toString(2).padStart(16, '0');
      return (this.symbols[aValue] = this.variableIdx++).toString(2).padStart(16, '0');
    }

    return this.parseCCommand(line);
  }

  parseCCommand(line: string): string {
    let cmd = 0xE000;

    const cmdParts = line.split('=');
    if (cmdParts.length > 1) {
      const dstParam = cmdParts[0].trim();
      if (dstParam.includes('D')) cmd |= dstMap['D'];
      if (dstParam.includes('A')) cmd |= dstMap['A'];
      if (dstParam.includes('M')) cmd |= dstMap['M'];
    } else cmdParts.push(cmdParts[0]);

    const jmpParts = cmdParts[1].split(';');
    if (jmpParts.length > 1) {
      const jmpParam = jmpParts[1].trim();
      cmd |= jmpMap[jmpParam];
    }

    const compPart = jmpParts[0].trim().replace(/ /g, '');
    cmd |= (cmdMap[compPart] << 6);

    return cmd.toString(2).padStart(16, '0');
  }
}