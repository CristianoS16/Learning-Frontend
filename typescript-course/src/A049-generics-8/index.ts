// Record --> <key, value>
const obj1: Record<string, string | number> = {
  firstName: 'Test',
  lastName: 'Fake',
  age: 30,
};
console.log(obj1);

type PersonProtocol = {
  firstName?: string;
  lastName?: string;
  age?: number;
};
// Required --> turn optional values to mandatory
type PersonRequired = Required<PersonProtocol>;

// Partial --> turn mandatory values to optional
type PersonPartial = Partial<PersonRequired>;

// Readonly --> turn all values to Readonly mode
type PersonReadonly = Readonly<PersonPartial>;

// Pick --> select some keys/values of the object
type PersonPick = Pick<PersonRequired, 'firstName' | 'lastName'>;

const obj2: PersonReadonly = {
  firstName: 'Test',
  lastName: 'Fake',
  age: 30,
};

console.log(obj2);

// Extract and Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type ExcludeType = Exclude<ABC, CDE>;
type ExtractType = Extract<ABC, CDE>;

type MongoAccount = {
  _id: string;
  name: string;
  age: number;
};

type ApiAccount = Pick<MongoAccount, Exclude<keyof MongoAccount, '_id'>> & {
  id: string;
};

const mongoAccount: MongoAccount = {
  _id: 'agdjlfvnawuiofgvnsdafjknsa',
  name: 'Test',
  age: 12,
};

function mapAccount(mongoAccount: MongoAccount): ApiAccount {
  const { _id, ...accoundData } = mongoAccount;
  return { ...accoundData, id: _id };
}

const apiAccount = mapAccount(mongoAccount);
console.log('apiAccount: ', apiAccount);

// Module mode
export default 1;
