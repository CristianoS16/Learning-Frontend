import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from './customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;
  constructor(fistName: string, lastName: string, cpf: string) {
    this.firstName = fistName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}
export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  name: string;
  cnpj: string;
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
