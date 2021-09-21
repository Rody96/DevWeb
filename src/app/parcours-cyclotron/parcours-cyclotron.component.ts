import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-parcours-cyclotron',
  templateUrl: './parcours-cyclotron.component.html',
  styleUrls: ['./parcours-cyclotron.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParcoursCyclotronComponent implements OnInit {

  results: any[] = [];

  map:  SafeResourceUrl = "";
  

  constructor(private httpClient: HttpClient, private dom:DomSanitizer) {
    this.httpClient.get('https://bioparcours.herokuapp.com/map/5').subscribe(
          (res) => {
            
            this.results.push(res);
            this.map = this.dom.bypassSecurityTrustResourceUrl(this.results[0]['map_url_data']); 
          },
          (error) => { console.log(error);}
          );
  }

  ngOnInit(): void {
  }

}
