const clientData: [number, string] = [1, 'Test'];
const clientData2: readonly [number, string, string?] = [1, 'Test'];

clientData[0] = 100;
console.log(clientData);
console.log(clientData2);
