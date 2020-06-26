import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { WorkoutGear } from './workout-gear/workout-gear.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {path: 'workout-gear/:id', component: WorkoutGear},
  {path: 'workout-gear', component: WorkoutGear},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
