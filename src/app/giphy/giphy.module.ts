import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphyComponent } from './giphy.component';
import { GiphyImagesComponent } from './giphy-images/giphy-images.component';


@NgModule({
  declarations: [
    GiphyComponent,
    GiphyImagesComponent
  ],
  imports: [
    CommonModule,
    GiphyRoutingModule
  ]
})
export class GiphyModule { }
