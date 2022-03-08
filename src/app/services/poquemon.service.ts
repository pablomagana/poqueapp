import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { poqueBasic } from '../interfaces/poque-basic';
import { PoqueItem } from '../interfaces/poque-item';
import { PoqueItemResp } from '../interfaces/poque-item-resp';
import { PoqueListResp } from '../interfaces/poque-list-resp';

const API_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root',
})
export class PoquemonService {
  constructor(private http: HttpClient) {}

  getPoquemons(
    limit: number = 25,
    offset: number = 0
  ): Observable<poqueBasic[]> {
    return this.http
      .get<PoqueListResp>(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        map((pokemons: PoqueListResp) =>
          pokemons.results.map((pokemon: poqueBasic) => {
            return {
              name: pokemon.name,
              url: pokemon.url,
            } as poqueBasic;
          })
        )
      );
  }

  getPoquemon(urlPoquemon: string): Observable<PoqueItem> {
    return this.http.get<PoqueItemResp>(`${urlPoquemon}`).pipe(
      map((poquemon: PoqueItemResp) => {
        return {
          name: poquemon.name,
          sprites: poquemon.sprites,
          types: poquemon.types,
          weight: poquemon.weight,
        } as PoqueItem;
      })
    );
  }
}
