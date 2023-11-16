import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {}

  keyboardIconSrc = '../../assets/img/general-img/keyboard-icon.png'

  isSmallScreen = false;
  showButtons = true;

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isSmallScreen = result.matches;
      this.showButtons = !result.matches;
    });
  }

}
