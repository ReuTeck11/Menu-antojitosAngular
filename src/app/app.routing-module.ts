import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PlatillosComponent } from './components/platillos/platillos.component';
 
const routes: Routes = [
  {path: 'categoria' , component: CategoriaComponent },
  {path: 'platillos/:id' , component: PlatillosComponent },
  {path: '**' , pathMatch: 'full' , redirectTo: 'categoria' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}