import Race from './Race';

class Elf extends Race {
  _maxLifePoints: number;
  static counter = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.counter;
  }
}

export default Elf;
