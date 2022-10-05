import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {GiphyService} from './service/giphy.service';
import {PageRequest} from './model/pageRequest';
import {GiphyResponse} from './model/model';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiphyComponent implements OnDestroy {

  private pageRequest: PageRequest = PageRequest.default();
  private searchText: string = '';
  private destroy$ = new Subject<void>();

  public giphyResponse: GiphyResponse | undefined;

  constructor(private readonly giphyService: GiphyService,
              private readonly cdr: ChangeDetectorRef) { }

  onTextChanged(searchText: string): void {
    this.searchText = searchText;
    this.pageRequest = PageRequest.default();
    this.getGiphyImages();
  }

  onPageChanged(pageRequest: PageRequest): void {
    this.pageRequest = pageRequest;
    this.getGiphyImages();
  }

  private getGiphyImages(): void {
    this.giphyService.getImages(this.pageRequest, this.searchText).pipe(takeUntil(this.destroy$)).subscribe(response => {
      this.giphyResponse = response;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
