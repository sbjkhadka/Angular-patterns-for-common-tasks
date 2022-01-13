import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicControlsComponent } from './dynamic-controls/dynamic-controls.component';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'inline-editing', component: InlineEditingComponent },
  { path: 'dynamic-control', component: DynamicControlsComponent },
  { path: '', component: MenuComponent, pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
