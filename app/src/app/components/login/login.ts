import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  // pestaña activa: 'login' o 'register'.
  public pestana: 'login' | 'register' = 'login';

  public formularioLogin: FormGroup;
  public formularioRegistro: FormGroup;

  // eventos hacia el componente padre
  @Output() public cerrar = new EventEmitter<void>();
  @Output() public ingresar = new EventEmitter<{ email: string; password: string; recordar: boolean }>();
  @Output() public registrar = new EventEmitter<{ nombre: string; email: string; password: string }>();

  public constructor(private fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      recordar: [true],
    });

    this.formularioRegistro = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public cambiarPestana(pestana: 'login' | 'register'): void {
    this.pestana = pestana;
  }

  public enviarLogin(): void {
    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }
    this.ingresar.emit(this.formularioLogin.value);
  }

  public enviarRegistro(): void {
    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      return;
    }
    this.registrar.emit(this.formularioRegistro.value);
  }

  public cerrarModal(): void {
    this.cerrar.emit();
  }

  // ayuda para mostrar errores solo cuando el campo fue clickeado
  public tieneError(formulario: FormGroup, campo: string): boolean {
    const control = formulario.get(campo);
    return !!control && control.invalid && control.touched;
  }
}
