type MyDocument = {
  title: string;
  text: string;
  date?: Date;
};

const doc: MyDocument = {
  title: 'Title Test',
  text: 'Text Test',
};

console.log(doc.date?.toDateString() ?? 'Without Date');

console.log(undefined ?? '?? Test 1');
console.log(null ?? '?? Test 2');
console.log(false ?? '?? Test 3');
console.log(0 ?? '?? Test 4');
console.log('' ?? '?? Test 5');
