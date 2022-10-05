import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';
import {PageRequest} from '../model/pageRequest';
import {GiphyResponse} from '../model/model';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-giphy-images',
  templateUrl: './giphy-images.component.html',
  styleUrls: ['./giphy-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiphyImagesComponent {

  @Input()
  public data: GiphyResponse | undefined;

  @Output()
  onPageChanged: EventEmitter<PageRequest> = new EventEmitter<PageRequest>();

  @Output()
  onTextChanged: EventEmitter<string> = new EventEmitter<string>();

  textFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  onSubmit() {
    this.onTextChanged.emit(this.textFormControl.value);
  }

  pageChanged(pageEvent: PageEvent) {
    this.onPageChanged.emit(PageRequest.of(pageEvent.pageIndex * pageEvent.pageSize, pageEvent.pageSize))
  }
}
