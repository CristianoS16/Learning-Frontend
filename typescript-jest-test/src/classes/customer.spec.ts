import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  fistName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => new IndividualCustomer(fistName, lastName, cpf);

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => new EnterpriseCustomer(name, cnpj);

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Test', 'Fake', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Test');
    expect(sut).toHaveProperty('lastName', 'Fake');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Test', 'Fake', '111.111.111-11');
    expect(sut.getName()).toBe('Test Fake');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('createEnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());
  it('should have firstName, lastName and cpf', () => {
    const sut = createEnterpriseCustomer('Test Company', '111.111');
    expect(sut).toHaveProperty('name', 'Test Company');
    expect(sut).toHaveProperty('cnpj', '111.111');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer('Test Company', '111.111');
    expect(sut.getName()).toBe('Test Company');
    expect(sut.getIDN()).toBe('111.111');
  });
});
