import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphyComponent } from './giphy.component';
import { GiphyImagesComponent } from './giphy-images/giphy-images.component';
import {GiphyService} from './service/giphy.service';


@NgModule({
  declarations: [
    GiphyComponent,
    GiphyImagesComponent
  ],
  imports: [
    CommonModule,
    GiphyRoutingModule
  ],
  providers: [
    GiphyService
  ]
})
export class GiphyModule { }
