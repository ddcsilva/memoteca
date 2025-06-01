import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {}

  autoriaTemLetra(): boolean {
    const regex = /[a-zA-ZÀ-ÿ]/;
    return regex.test(this.pensamento.autoria);
  }

  autoriaEhValida(): boolean {
    return (
      this.pensamento.autoria.length >= 2 &&
      this.pensamento.autoria.length <= 50 &&
      this.autoriaTemLetra()
    );
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
