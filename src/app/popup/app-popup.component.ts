import {Component, Injector, OnInit} from '@angular/core';
import {createCustomElement} from "@angular/elements";
import {PopupComponent} from "./popup.component";
import {PopupService} from "./popup.service";

@Component({
  selector: 'app-popup',
  templateUrl: './app-popup.component.html',
  styleUrls: ['./app-popup.component.scss']
})
export class AppPopupComponent implements OnInit {

  constructor(injector: Injector, public popup: PopupService) {
      // Convert `PopupComponent` to a custom element.
      const PopupElement = createCustomElement(PopupComponent, {injector});
      // Register the custom element with the browser.
      customElements.define('popup-element', PopupElement);

  }

  ngOnInit() {
  }

}
