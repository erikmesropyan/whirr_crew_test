import {PageRequest} from '../model/pageRequest';
import {environment} from '../../../environments/environment';

export function buildQuery(pageRequest: PageRequest, searchText: string) {
  const apiKey = environment.apiKey
  if (!apiKey) {
    console.error('please add api key')
  }

  return `api_key=${apiKey}&q=${searchText}&${pageRequest.toString()}&rating=g&lang=en`
}
