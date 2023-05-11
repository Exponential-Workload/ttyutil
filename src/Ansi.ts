export const enum AnsiColor {
  Black = 30,
  Red,
  Green,
  Yellow,
  Blue,
  Magenta,
  Cyan,
  White,
  BrightBlack = 90,
  BrightRed,
  BrightGreen,
  BrightYellow,
  BrightBlue,
  BrightMagenta,
  BrightCyan,
  BrightWhite,
}
export const enum BgAnsiColor {
  Black = 40,
  Red,
  Green,
  Yellow,
  Blue,
  Magenta,
  Cyan,
  White,
  BrightBlack = 100,
  BrightRed,
  BrightGreen,
  BrightYellow,
  BrightBlue,
  BrightMagenta,
  BrightCyan,
  BrightWhite,
}

export default class Ansi {
  // basics
  static readonly #Reset = '\x1b[0m';
  static readonly #Bright = '\x1b[1m';
  static readonly #Dim = '\x1b[2m';
  static readonly #Underline = '\x1b[4m';
  static readonly #Strikethrouhg = '\x1b[9m';
  static readonly #Blink = '\x1b[5m';

  // get basics
  static reset() {
    return Ansi.#Reset;
  }
  static bright() {
    return Ansi.#Bright;
  }
  static bold() {
    return Ansi.#Bright;
  }
  static dim() {
    return Ansi.#Dim;
  }
  static underline() {
    return Ansi.#Underline;
  }
  static strikethrough() {
    return Ansi.#Strikethrouhg;
  }
  static blink() {
    return Ansi.#Blink;
  }

  // colors
  static color(ansiColor: AnsiColor) {
    return `\x1b[${ansiColor}m`;
  }
  static black() {
    return Ansi.color(AnsiColor.Black);
  }
  static red() {
    return Ansi.color(AnsiColor.Red);
  }
  static green() {
    return Ansi.color(AnsiColor.Green);
  }
  static yellow() {
    return Ansi.color(AnsiColor.Yellow);
  }
  static blue() {
    return Ansi.color(AnsiColor.Blue);
  }
  static magenta() {
    return Ansi.color(AnsiColor.Magenta);
  }
  static cyan() {
    return Ansi.color(AnsiColor.Cyan);
  }
  static white() {
    return Ansi.color(AnsiColor.White);
  }
  static brightBlack() {
    return Ansi.color(AnsiColor.BrightBlack);
  }
  static brightRed() {
    return Ansi.color(AnsiColor.BrightRed);
  }
  static brightGreen() {
    return Ansi.color(AnsiColor.BrightGreen);
  }
  static brightYellow() {
    return Ansi.color(AnsiColor.BrightYellow);
  }
  static brightBlue() {
    return Ansi.color(AnsiColor.BrightBlue);
  }
  static brightMagenta() {
    return Ansi.color(AnsiColor.BrightMagenta);
  }
  static brightCyan() {
    return Ansi.color(AnsiColor.BrightCyan);
  }
  static brightWhite() {
    return Ansi.color(AnsiColor.BrightWhite);
  }
  // ^ thank you copilot

  // bg colors
  static bg(ansiColor: BgAnsiColor) {
    return `\x1b[${ansiColor}m`;
  }
  static bgBlack() {
    return Ansi.bg(BgAnsiColor.Black);
  }
  static bgRed() {
    return Ansi.bg(BgAnsiColor.Red);
  }
  static bgGreen() {
    return Ansi.bg(BgAnsiColor.Green);
  }
  static bgYellow() {
    return Ansi.bg(BgAnsiColor.Yellow);
  }
  static bgBlue() {
    return Ansi.bg(BgAnsiColor.Blue);
  }
  static bgMagenta() {
    return Ansi.bg(BgAnsiColor.Magenta);
  }
  static bgCyan() {
    return Ansi.bg(BgAnsiColor.Cyan);
  }
  static bgWhite() {
    return Ansi.bg(BgAnsiColor.White);
  }
  static bgBrightBlack() {
    return Ansi.bg(BgAnsiColor.BrightBlack);
  }
  static bgBrightRed() {
    return Ansi.bg(BgAnsiColor.BrightRed);
  }
  static bgBrightGreen() {
    return Ansi.bg(BgAnsiColor.BrightGreen);
  }
  static bgBrightYellow() {
    return Ansi.bg(BgAnsiColor.BrightYellow);
  }
  static bgBrightBlue() {
    return Ansi.bg(BgAnsiColor.BrightBlue);
  }
  static bgBrightMagenta() {
    return Ansi.bg(BgAnsiColor.BrightMagenta);
  }
  static bgBrightCyan() {
    return Ansi.bg(BgAnsiColor.BrightCyan);
  }
  static bgBrightWhite() {
    return Ansi.bg(BgAnsiColor.BrightWhite);
  }

  // rgb
  static rgb(r: number, g: number, b: number) {
    return `\x1b[38;2;${r};${g};${b}m`;
  }
  static bgRgb(r: number, g: number, b: number) {
    return `\x1b[48;2;${r};${g};${b}m`;
  }
}