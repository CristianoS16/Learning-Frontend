/* eslint-disable @typescript-eslint/no-namespace */
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.nameEspaceName = 'Test';
    console.log('MyNamespace');
    var PessonInNamespace = /** @class */ (function () {
        function PessonInNamespace(name) {
            this.name = name;
        }
        return PessonInNamespace;
    }());
    MyNamespace.PessonInNamespace = PessonInNamespace;
    var person = new PessonInNamespace('Test Namespace');
    console.log(person);
    var OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.nameEspaceName = 'Other Namespace';
    })(OtherNamespace = MyNamespace.OtherNamespace || (MyNamespace.OtherNamespace = {}));
})(MyNamespace || (MyNamespace = {}));
var namespacePerson = new MyNamespace.PessonInNamespace('Test out namespace');
console.log(namespacePerson);
console.log(MyNamespace.nameEspaceName);
console.log(MyNamespace.OtherNamespace.nameEspaceName);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module.ts" />
console.log(MyNamespace.nameEspaceName);
