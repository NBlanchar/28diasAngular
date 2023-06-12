import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  myField = new FormControl();
  name!: string;
  departments: string[] = [];
  selectedCity$=this.dataSvc.selectedCity$;
  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private dataSvc: DataService
  ) {}

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['departmets'];
    this.contactForm = this.initForm();
    this.route.queryParams.subscribe((params: Params) => {
      this.name = params['name'];
    });
    //this.onPathValue();
    //this.onSethValue();
  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: 'Nefer' });
  }

  onSethValue(): void {
    // Se requiere Cargar todos los datos del Formulario
    this.contactForm.setValue({ name: 'Nefer' });
  }

  onSubmit(): void {
    console.log('Form->', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: [false],
      department: [''],
      comment: ['', [Validators.required]],
    });
  }
}
