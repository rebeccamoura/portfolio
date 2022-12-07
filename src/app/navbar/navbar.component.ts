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
    event.target.value === '1' ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')
  }

  menuToggle() {
    document.querySelector('.menu-toggle')?.classList.toggle('open')
    document.querySelector('.navbar-wrapper')?.classList.toggle('on')
    document.querySelector('.list-wrapper')?.classList.toggle('d-block')
  }

  scroll(event: any) {
    if (event.target.classList?.contains('initial')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      return;
    }

    if (event.target.classList?.contains('contact-us')) {
      window.scrollTo({
        top: 2087,
        behavior: 'smooth'
      });

      return;
    }

    event.target.classList?.contains('skills') ? window.scrollTo({
      top: 680,
      behavior: 'smooth'
    }) : window.scrollTo({
      top: 1338,
      behavior: 'smooth'
    });
  }
}
