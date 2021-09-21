import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-parcours-sciences',
  templateUrl: './parcours-sciences.component.html',
  styleUrls: ['./parcours-sciences.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParcoursSciencesComponent implements OnInit {

  results: any[] = [];

  map:  SafeResourceUrl = "";
  

  constructor(private httpClient: HttpClient, private dom:DomSanitizer) {
    this.httpClient.get('https://bioparcours.herokuapp.com/map/1').subscribe(
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
