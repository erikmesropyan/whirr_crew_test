import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../service/giphy.service';
import {PageRequest} from '../model/pageRequest';

@Component({
  selector: 'app-giphy-images',
  templateUrl: './giphy-images.component.html',
  styleUrls: ['./giphy-images.component.scss']
})
export class GiphyImagesComponent implements OnInit {

  constructor(private readonly giphyService: GiphyService) { }

  ngOnInit(): void {
    this.giphyService.getImages(PageRequest.default(), '').subscribe(response => {
      console.log(response);
    })
  }

}
