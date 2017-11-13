import { NgModule } from '@angular/core' ;
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { FormComponent} from '../form/form.component';

let myRoutes:Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'wish',component:FormComponent}
]; 

@NgModule({
    imports: [RouterModule.forRoot(myRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
