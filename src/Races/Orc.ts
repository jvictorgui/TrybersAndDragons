import Race from './Race';

class Orc extends Race {
  maxLifePoints: number;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.counter += 1;
  }

  static createdRacesInstances() {
    return Orc.counter; 
  }
}

export default Orc;