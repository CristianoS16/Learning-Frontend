import './form-control';

export function function1(this: Date, msg: string): void {
  console.log(this);
  console.log(msg);
}

function1.call(new Date(), 'test');
function1.apply(new Date(), ['test']);
