import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FirstChildComponent } from './second-component/first-child/first-child.component';
import { SecondChildComponent } from './second-component/second-child/second-child.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  {
    path: "firstComponent",
    component: FirstComponentComponent
  },
  {
    path: "secondComponent",
    component: SecondComponentComponent,
    children: [
      {
        path: 'child-a', // child route path
        component: FirstChildComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: SecondChildComponent, // another child route component that the router renders
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
