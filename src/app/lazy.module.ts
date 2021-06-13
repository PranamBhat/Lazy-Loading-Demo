import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from '../app/lazy-parent/lazy-parent.component';
import { LazyChildComponent } from '../app/lazy-child/lazy-child.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'load-parent', component: LazyParentComponent
  }
];
@NgModule({
  declarations: [
    LazyParentComponent,
    LazyChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // We have created a new route in the module file.
  ]
})
export class LazyModule { }
