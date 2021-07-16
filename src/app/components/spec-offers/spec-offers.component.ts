import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-spec-offers',
  templateUrl: './spec-offers.component.html',
  styleUrls: ['./spec-offers.component.css']
})
export class SpecOffersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
        let param = this.route.snapshot.paramMap.get('name');
    //console.log('Param value: ' + param);
    window.alert('Param value: ' + param);
  }

}
