import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  bioText: string = 'Texto biografia blablabla';

  constructor() { }

  ngOnInit(): void {
  }

}
