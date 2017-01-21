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

    route.params.subscribe( params => {
      this.artist = this.artistService.getArtist(params['artistId']);
    });

  }


}
