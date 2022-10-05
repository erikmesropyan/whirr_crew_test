import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GiphyComponent} from './giphy.component';
import {GiphyImagesComponent} from './giphy-images/giphy-images.component';

const routes: Routes = [
  {
    path: '',
    component: GiphyComponent,
    children: [
      {
        path: '',
        redirectTo: 'images',
        pathMatch: 'full'
      },
      {
        path: 'images',
        component: GiphyImagesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiphyRoutingModule {
}
