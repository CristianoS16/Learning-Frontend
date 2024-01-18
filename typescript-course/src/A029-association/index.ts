export abstract class Tool {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  abstract write(): void;
}

export class Pen extends Tool {
  write(): void {
    console.log(`Writing with ${this.name}...`);
  }
}

export class Typewriter extends Tool {
  write(): void {
    console.log(`Writing with ${this.name}...`);
  }
}

export class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    this.tool ? this.tool.write() : console.log('Writer without tool....');
  }
}

const writer_1 = new Writer('Machado');
const pen_1 = new Pen('Bic');
const typewriter_1 = new Typewriter('IBM Typewriter');

// console.log(writer_1);
// console.log(pen_1);
// console.log(typewriter_1);

writer_1.write();
writer_1.tool = pen_1;
writer_1.write();
writer_1.tool = typewriter_1;
writer_1.write();
writer_1.tool = null;
writer_1.write();
