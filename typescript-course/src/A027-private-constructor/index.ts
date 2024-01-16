// Singleton = GoF | Factory Method - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }

  connect(): void {
    console.log(`Connect to: ${this.host} ${this.user} ${this.password}`);
  }
}

const db1 = Database.getDatabase('localhost', 'root', '12345');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '12345');
db2.connect();

console.log(db1 === db2);
