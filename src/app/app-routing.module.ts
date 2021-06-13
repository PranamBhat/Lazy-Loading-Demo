import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// We have registered the LazyModule. For loading the LazyModule, we specify the path.

const routes: Routes = [

// Point the app routing to the lazy loading module.

  {
    path: 'lazy',
    loadChildren: () => import('src/app/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
