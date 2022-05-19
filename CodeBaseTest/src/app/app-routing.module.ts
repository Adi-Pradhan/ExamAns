import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [
  {path:'addLoan',component:AddComponent},
  {path:'removeLoan',component:RemoveComponent},
  {path:'listLoan',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
