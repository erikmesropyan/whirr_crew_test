import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphyComponent } from './giphy.component';
import { GiphyImagesComponent } from './giphy-images/giphy-images.component';
import {GiphyService} from './service/giphy.service';
import {MaterialModule} from '../shared/material/material.module';


@NgModule({
  declarations: [
    GiphyComponent,
    GiphyImagesComponent
  ],
  imports: [
    CommonModule,
    GiphyRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    GiphyService
  ]
})
export class GiphyModule { }
