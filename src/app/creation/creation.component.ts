import {Component, inject} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDivider} from "@angular/material/divider";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {CatService} from "../services/cat.service";
import {Cat} from "../services/cat.interface";

@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDivider,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
  ],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.scss',

})
export class CreationComponent{
  isRotated: boolean = false
  showSliders: boolean = false;
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  isFileUploaded: boolean = false;

  sliders =  [
    { text: 'Autoriser les utilisateurs à commenter', isActive: false },
    { text: 'Afficher des produits similaires', isActive: false },
  ];

  private catService: CatService = inject(CatService);

  onSubmit() {

    if (!this.selectedFile) {
      console.error('Aucune image sélectionnée.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        const catImage = e.target.result as string;

        // Simuler des dimensions ou récupérer celles de l'image
        const newCat: Cat = {
          url: catImage
        };

        // Envoyer au service
        this.catService.addCats(newCat).subscribe({
          next: value => console.log('Observable emitted the next value: ' , value),
          error: err => console.error('Observable emitted an error: ' , err),
          complete: () => console.log('Observable emitted the complete notification')
        });
      }
    };
    reader.readAsDataURL(this.selectedFile as File);
  }


  toggleSlider(index: number) {
    this.sliders[index].isActive = !this.sliders[index].isActive;
  }

  toggleInfoForm(event: Event): void {
    event.stopPropagation();
    this.showSliders = !this.showSliders;
    this.isRotated = !this.isRotated;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          this.imageUrl = e.target.result as string;
        }
      }
      reader.readAsDataURL(file);
    }
    this.isFileUploaded = true;
  }
}
