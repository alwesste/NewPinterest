import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {InscriptionComponent} from "../inscription/inscription.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    RouterLink,
    RouterLinkActive,
    InscriptionComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems: string[] = ['Accueil', 'Creer'];
  selectedIndex: number | null = null;
  isModalOpen = false;

  openModalInscription() {
    this.isModalOpen = true;
    console.log(this.isModalOpen)
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSelect(index: number) {
    this.selectedIndex = index;
  }
}
