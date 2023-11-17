import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  keyboardIconSrc = '../../assets/img/general-img/keyboard-icon.png'

  customBreakpoints = {
    extraSmall: '(max-width: 599px)',
    small: '(min-width: 600px) and (max-width: 700px)',
  };

  isSmallScreen = false;
  showButtons = true;
  isDropdownOpen = false;

  ngOnInit() {
    this.breakpointObserver.observe([this.customBreakpoints.extraSmall, this.customBreakpoints.small]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.showButtons = !result.matches;
      this.isDropdownOpen = false;
    });
  }
  // toggleMenu() {
  //   this.isDropdownOpen = false; // Cierra el menú desplegable al hacer clic en el botón de hamburguesa
  // }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen; // Cambia el estado del menú desplegable
  // }

}
