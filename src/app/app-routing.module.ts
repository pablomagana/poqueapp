import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoquelistComponent } from './poquelist/poquelist.component';

const routes: Routes = [
  {
    path: '',
    component: PoquelistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
