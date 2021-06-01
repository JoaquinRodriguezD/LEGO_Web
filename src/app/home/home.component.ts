import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/marvel.jpg',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.dualshockers.com%2Fwp-content%2Fuploads%2F2017%2F12%2FGuardiansVol2-Horizontal_1513621180.jpg&f=1&nofb=1',
  'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_ds_22/SI_NDS_LegoHarryPotterYears1To4_enGB_image1600w.jpg'];
}

