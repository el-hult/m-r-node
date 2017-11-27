import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {AddComponent} from "./add/add.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "addItem", component: AddComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}