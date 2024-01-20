export class Car {
  private readonly engine = new Engine();

  start(): void {
    this.engine.start();
  }
  turnOff(): void {
    this.engine.turnOff();
  }

  stop(): void {
    this.engine.stop();
  }
  speedUp(): void {
    this.engine.speedUp();
  }
}
class Engine {
  start(): void {
    console.log('Start the engine...');
  }
  turnOff(): void {
    console.log('Turn off the engine...');
  }

  stop(): void {
    console.log('Stop the engine...');
  }
  speedUp(): void {
    console.log('Speed up the engine...');
  }
}

const car = new Car();
car.start();
car.speedUp();
car.stop();
car.turnOff();
