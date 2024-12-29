import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InscriptionService} from "../services/inscription.service";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent implements OnInit {
  @Output() onClose = new EventEmitter<void>();
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      birthdate: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.inscriptionService.registerUser(this.signupForm.value).subscribe({
        next: (value) => {
          console.log('Observable emitted the next value: ', value);
          this.router.navigate(['/mypage']);
          alert('Inscription réussie !');
        },
        error: err => console.error('Observable emitted an error: ', err),
        complete: () => console.log('Observable emitted the complete notification')
      })
    }
  }


  close() {
    this.onClose.emit();
  }
}
