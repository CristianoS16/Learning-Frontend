/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  export const nameEspaceName = 'Test';
  console.log('MyNamespace');

  export class PessonInNamespace {
    constructor(public name: string) {}
  }

  const person = new PessonInNamespace('Test Namespace');
  console.log(person);

  export namespace OtherNamespace {
    export const nameEspaceName = 'Other Namespace';
  }
}

const namespacePerson = new MyNamespace.PessonInNamespace('Test out namespace');
console.log(namespacePerson);
console.log(MyNamespace.nameEspaceName);
console.log(MyNamespace.OtherNamespace.nameEspaceName);
