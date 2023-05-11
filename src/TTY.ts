import stripAnsi from "./strip-ansi";

export default class TTYText {
  stdin: NodeJS.ReadStream = process.stdin;
  stdout: NodeJS.WriteStream = process.stdout;
  stderr: NodeJS.WriteStream = process.stderr;
  // center text
  #centerLine(text: string, width: number = process.stdout.columns ?? 80) {
    const stripped = stripAnsi(text)
    const textWidth = stripped.length;
    const padding = Math.floor((width - textWidth) / 2);
    const padding2 = Math.ceil((width - textWidth) / 2);
    if (padding <= 0) return text;
    return ' '.repeat(padding) + text + ' '.repeat(padding2);
  }
  center(text: string, width: number = process.stdout.columns ?? 80) {
    const inLines = text.replace(/\r?\n/g, '\n').split('\n');
    const outLines = []
    for (const line of inLines) {
      outLines.push(this.#centerLine(line, width))
    }
    return outLines.join('\n')
  }
  trimLines(text: string) {
    const lines = text.replace(/\r?\n/g, '\n').split('\n');
    const outLines = []
    for (const line of lines) {
      outLines.push(line.trim())
    }
    return outLines.join('\n')
  }
  align(text: string) {
    let maxLen = '';
    const lines = text.replace(/\r?\n/g, '\n').split('\n');
    for (const line of lines) {
      if (line.length > maxLen.length) maxLen = line;
    }
    const width = maxLen.length;
    const outLines = []
    for (const line of lines) {
      outLines.push(line + (' '.repeat(width - line.length)))
    }
    return outLines.join('\n')
  }
  readkey(ctrlC: boolean = true) {
    return new Promise<string>((resolve, reject) => {
      this.stdin.setEncoding('utf8');
      this.stdin.resume();
      this.stdin.setRawMode(true);
      const listener = (text: Buffer) => {
        if (ctrlC && text.toString() === '\u0003') {
          process.exit();
        }
        this.stdin.pause();
        this.stdin.setRawMode(false);
        this.stdin.removeListener('data', listener);
        resolve(text.toString().trim());
      }
      this.stdin.addListener('data', listener);
    });
  }
}