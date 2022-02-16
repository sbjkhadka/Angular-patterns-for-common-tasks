import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicControlsComponent } from './dynamic-controls/dynamic-controls.component';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { MenuComponent } from './menu/menu.component';
import { RxjsCombineLatestComponent } from './rxjs-combine-latest/rxjs-combine-latest.component';

const routes: Routes = [
  { path: '', component: MenuComponent, pathMatch: 'full' },
  { path: 'inline-editing', component: InlineEditingComponent },
  { path: 'dynamic-control', component: DynamicControlsComponent },
  { path: 'combine-latest', component: RxjsCombineLatestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
