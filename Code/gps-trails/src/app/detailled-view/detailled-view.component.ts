import { Component, OnInit } from '@angular/core';
import { DetailServiceClass } from '../home/details.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-detailled-view',
  templateUrl: './detailled-view.component.html',
  styleUrls: ['./detailled-view.component.css'],
  providers: []
})
export class DetailledViewComponent implements OnInit {

  map?: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number = 51.678418;
  lng: number = 7.809007;

  selectedParkItem: any;

  searchresult: string = "Yos";
  subtrialsList: any;

  constructor(private detailService: DetailServiceClass) {

    this.selectedParkItem = this.detailService.selectedString;
    this.searchresult = this.selectedParkItem.parkname;
    this.subtrialsList = this.selectedParkItem.subtrails;
  }

  ngOnInit() {

    this.selectedParkItem = this.detailService.selectedString;
    this.searchresult = this.selectedParkItem.parkname;
    this.subtrialsList = this.detailService.selectedString.subtrails;

    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 8,
      center: [-119.5383, 51.678418]

    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    var marker = new mapboxgl.Marker()
      .setLngLat([-119.5383, 51.678418])
      .addTo(this.map);
  }


  goToSubTrials(trail: any) {
    this.detailService.selectedSubTrail = trail;
  }

}
