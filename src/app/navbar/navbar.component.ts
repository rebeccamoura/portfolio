import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _isMobile!: boolean;

  constructor() { }

  ngOnInit(): void {
    this._isMobile = window.matchMedia("(max-width: 920px)").matches;
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

  scroll(event: any, section: string) {
    if (this._isMobile) {
      this.menuToggle();
    }

    if (section === "home") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const sectionToScroll = document.getElementById(section)
    sectionToScroll?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
}
