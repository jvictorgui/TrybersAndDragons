import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.counter += 1;
  }

  static createdRacesInstances() {
    return Halfling.counter; 
  }
}

export default Halfling;