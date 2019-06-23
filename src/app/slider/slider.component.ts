import {Component, Directive, Input, ViewChild, OnInit, ElementRef} from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  constructor() { }

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  links = ['https://cdn.shopify.com/s/files/1/0377/2037/products/Mens35.Front_bff3a157-e83e-411b-a3e4-609a318e96eb_1024x.jpg?v=1510684666',
  'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_2048x2048.jpg?v=1542911430',
  'https://b34959663f5a3997bd0d-2668915a1d3a077262c88fab6aa0aa02.ssl.cf3.rackcdn.com/17170385_1_640.jpg'
]

// links = ['1',
// '2',
// '3'
// ]

  ngOnInit() {
  }

  

  goNext(){
    console.log(this.mapElement.nativeElement);

    
  }

}
