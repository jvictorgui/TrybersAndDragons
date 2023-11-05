import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  private static counter = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }
}