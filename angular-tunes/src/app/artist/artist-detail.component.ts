import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
  templateUrl: 'artist-detail.component.html'
})
export class ArtistDetailComponent {

  artist;

  constructor(private route: ActivatedRoute,
    private artistService: ArtistService) {

    console.log("params:", route.snapshot.params);

    const artistId = route.snapshot.params['artistId'];
    
    this.artist = this.artistService.getArtist(artistId);
  }


}
