import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(event: any) {
    if (!event.target.classList.contains('active')) {
      document.querySelector('.active')?.classList.remove('active');
      event.target.classList.add('active');

      return;
    }

    return;
  }

  changeMode(event: any) {
    if (event.target.value === '1') {
      document.body.classList.add('dark-theme')
      console.log('um')
      return;
    }

    document.body.classList.remove('dark-theme')
  }
}
