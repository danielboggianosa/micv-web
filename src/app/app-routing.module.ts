import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component: LayoutComponent, 
  children:[
    {path:'main', component: MainComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
