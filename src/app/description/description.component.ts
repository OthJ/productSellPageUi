import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private _iconService: NzIconService) {
    this._iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
   }


  count = 0;
  dot = true;

  addCount(): void {
    this.count++;
  }

  ngOnInit() {
  }

}
