import { Component, OnInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  links = ['https://images-na.ssl-images-amazon.com/images/I/71QHGTKiwAL._UX342_.jpg',
  'https://www.philipwatch.net/i/default/65927/2-montre-philip-watch-caribe-r8253597008.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/41-DDEn-MPL.jpg'
]

// links = ['1',
// '2',
// '3'
// ]

  ngOnInit() {
  }

}
