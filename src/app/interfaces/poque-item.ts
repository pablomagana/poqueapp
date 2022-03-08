import { Sprites, Type } from './poque-item-resp';

export interface PoqueItem {
  name: string;
  sprites: Sprites;
  types: Type[];
  weight: number;
}
