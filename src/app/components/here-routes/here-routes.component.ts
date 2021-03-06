import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;


@Component({
  selector: 'app-here-routes',
  templateUrl: './here-routes.component.html',
  styleUrls: ['./here-routes.component.css']
})
export class HereRoutesComponent implements OnInit {

  @ViewChild("map")
  public mapElement: ElementRef;

  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public start: any;

  @Input()
  public finish: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  public directions: any;

  private platform: any;
  private map: any;
  private router: any;

  public constructor() { }

  ngOnInit() {
      this.platform = new H.service.Platform({
        "app_id": this.appId,
        "app_code": this.appCode
    });
    this.directions = [];
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
            zoom: 4,
            center: { lat: "37.0902", lng: "-95.7129" }
        }
    );
}

  public ngOnChanges(changes: SimpleChanges) { }

}
