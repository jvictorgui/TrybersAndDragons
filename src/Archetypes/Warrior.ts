import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private static counter = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.counter;
  }
}