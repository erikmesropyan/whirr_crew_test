import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {GiphyResponse} from '../model/model';
import {PageRequest} from '../model/pageRequest';
import {environment} from '../../../environments/environment';
import {buildQuery} from '../util/queryBuilder';

@Injectable()
export class GiphyService {

  constructor(private readonly http: HttpClient) { }

  public getImages(pageRequest: PageRequest, searchText: string): Observable<GiphyResponse> {
    return this.http.get<GiphyResponse>(`${environment.apiHost}gifs/search?${buildQuery(pageRequest, searchText)}`)
  }
}
