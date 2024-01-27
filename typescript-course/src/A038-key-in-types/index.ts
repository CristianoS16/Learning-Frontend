type Vehicle = {
  brand: string;
  year: string;
};

type Car = {
  marca: Vehicle['brand'];
  ano: Vehicle['year'];
  nome: string;
};

const car: Car = {
  marca: 'Ford',
  ano: '2020',
  nome: 'nome',
};

console.log(car);
