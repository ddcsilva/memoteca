import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';

export const routes: Routes = [
  { path: '', component: CriarPensamentoComponent },
  { path: 'criar-pensamento', component: CriarPensamentoComponent },
];
