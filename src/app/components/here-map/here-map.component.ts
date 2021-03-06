import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;


@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

  @ViewChild('map')
  public mapElement: ElementRef;

  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  // Inicializando el servicio de búsqueda
  private ui: any;
  private search: any;
  private platform: any;
  private map: any;
  public currentPosition: any;
  
  public constructor() { }

  // Inicializando funcionalidad de búsqueda antes de que la interfaz esté lista
  public ngOnInit() {
    this.platform = new H.service.Platform({
        'app_id': this.appId,
        'app_code': this.appCode,
        useHTTPS: true
    });
    this.search = new H.places.Search(this.platform.getPlacesService());
    // Geolocalización
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((showPosition)=>{
            this.lat = showPosition.coords.latitude;
            this.lng = showPosition.coords.longitude;
            this.mapLocation();
        });
    } else {
        alert('Tu navegador no soporta geolocalización, por favor intenta con otro navegador');
    }
}

  // Preparando para algunos comportamientos de UI y eventos
  public mapLocation() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
            zoom: 15,
            center: { lat: this.lat, lng: this.lng }
        }
    );
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
  }


  // Eliminando cualquier objeto que ya exista en el mapa (marcadorres, eventos, etc.)
  public places(query: string) {
    this.map.removeObjects(this.map.getObjects());
    this.search.request({ 'q': query, 'at': this.lat + ',' + this.lng }, {}, data => {
        for(let i = 0; i < data.results.items.length; i++) {
            this.dropMarker({ 'lat': data.results.items[i].position[0], 'lng': data.results.items[i].position[1] }, data.results.items[i]);
        }
    }, error => {
      console.error(error);
    });
  }

  // Esperamos información de coordenadas, y datos para crear la burbuja de información
  private dropMarker(coordinates: any, data: any) {
      let marker = new H.map.Marker(coordinates);
      marker.setData('<p>' + data.title + '<br>' + data.vicinity + '</p>');
      marker.addEventListener('tap', event => {
          let bubble =  new H.ui.InfoBubble(event.target.getPosition(), {
              content: event.target.getData()
          });
          this.ui.addBubble(bubble);
      }, false);
      this.map.addObject(marker);
  }  
}
