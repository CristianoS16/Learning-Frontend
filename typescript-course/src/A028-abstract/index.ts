export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attackPoints: number,
    protected lifePoints: number,
  ) {}

  attack(character: Character): void {
    this.shout();
    character.lostLife(this.attackPoints);
  }

  lostLife(attackValue: number): void {
    this.lifePoints -= attackValue;
    console.log(`${this.name} has ${this.lifePoints} of life.`);
  }

  abstract shout(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1f9dd}';
  shout(): void {
    console.log(this.emoji + 'Warrior!!!!');
  }
}
export class Monster extends Character {
  protected emoji = '\u{1f9df}';

  shout(): void {
    console.log(this.emoji + 'Monster!!!!');
  }
}

const warrior = new Warrior('warrior', 100, 100);
const monster = new Monster('monster', 88, 1000);

warrior.attack(monster);
warrior.attack(monster);
warrior.attack(monster);
monster.attack(warrior);
monster.attack(warrior);
monster.attack(warrior);
