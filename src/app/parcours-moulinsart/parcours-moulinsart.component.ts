import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-parcours-moulinsart',
  templateUrl: './parcours-moulinsart.component.html',
  styleUrls: ['./parcours-moulinsart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParcoursMoulinsartComponent implements OnInit {

  results: any[] = [];

  map:  SafeResourceUrl = "";
  

  constructor(private httpClient: HttpClient, private dom:DomSanitizer) {
    this.httpClient.get('https://bioparcours.herokuapp.com/map/3').subscribe(
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
