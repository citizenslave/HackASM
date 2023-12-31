export const jmpMap = {
  'JMP': 0b111,
  'JLE': 0b110,
  'JNE': 0b101,
  'JLT': 0b100,
  'JGE': 0b011,
  'JEQ': 0b010,
  'JGT': 0b001,
};

export const dstMap = {
  'A': 0b100000,
  'D': 0b010000,
  'M': 0b001000
};

export const cmdMap = {
  '0': 0b0101010,
  '1': 0b0111111,
  '-1': 0b0111010,
  'D': 0b0001100,
  'A': 0b0110000,
  'M': 0b1110000,
  '!D': 0b0001101,
  '!A': 0b0110001,
  '!M': 0b1110001,
  '-D': 0b0001111,
  '-A': 0b0110011,
  '-M': 0b1110011,
  'D+1': 0b0011111,
  'A+1': 0b0110111,
  'M+1': 0b1110111,
  'D-1': 0b0001110,
  'A-1': 0b0110010,
  'M-1': 0b1110010,
  'D+A': 0b0000010,
  'D+M': 0b1000010,
  'D-A': 0b0010011,
  'D-M': 0b1010011,
  'A-D': 0b0000111,
  'M-D': 0b1000111,
  'D&A': 0b0000000,
  'D&M': 0b1000000,
  'D|A': 0b0010101,
  'D|M': 0b1010101
};

export const defaultSymbols = {
  'R0': 0x0000,
  'R1': 0x0001,
  'R2': 0x0002,
  'R3': 0x0003,
  'R4': 0x0004,
  'R5': 0x0005,
  'R6': 0x0006,
  'R7': 0x0007,
  'R8': 0x0008,
  'R9': 0x0009,
  'R10': 0x000A,
  'RA': 0x000A,
  'R11': 0x000B,
  'RB': 0x000B,
  'R12': 0x000C,
  'RC': 0x000C,
  'R13': 0x000D,
  'RD': 0x000D,
  'R14': 0x000E,
  'RE': 0x000E,
  'R15': 0x000F,
  'RF': 0x000F,
  'SP': 0x0000,
  'LCL': 0x0001,
  'ARG': 0x0002,
  'THIS': 0x0003,
  'THAT': 0x0004,
  'SCREEN': 0x4000,
  'KBD': 0x6000
};