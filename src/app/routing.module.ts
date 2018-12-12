import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
// import { PageThreeComponent } from './page-three.component';
// import { HelloComponent } from './hello.component';


const routes: Routes = [
  { path: '', redirectTo: 'page-one', pathMatch: 'full'},
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  // { path: 'page-three', component: PageThreeComponent },
];

// Angular tutorial setup 
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class RoutingModule {}

// Animation
//
export const RoutingModule = RouterModule.forRoot(routes, {
  // useHash: true
});