import { Component } from '@angular/core';

@Component({
  selector: 'angular-tunes',
  template: `
    <div class="container" [ngSwitch]="state" >
      <artist-list *ngSwitchCase="'artist-list'"
        (artistSelect)="showArtistDetail($event)"></artist-list>
      <artist-detail *ngSwitchCase="'artist-detail'"
        [artistId]='selectedArtist'></artist-detail>
    </div>
  `
})
export class AppComponent { 

  state = 'artist-list';
  selectedArtist;

  showArtistDetail(artistId){
    this.selectedArtist = artistId;
    this.state = 'artist-detail';  
  }

}
