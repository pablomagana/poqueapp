import { poqueBasic } from './poque-basic';

export interface PoqueListResp {
  count: number;
  next: string;
  previous: null;
  results: poqueBasic[];
}
