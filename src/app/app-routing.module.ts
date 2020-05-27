import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LearningResourcesComponent} from './learning-resources/learning-resources.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {OverseasTrainingComponent} from './overseas-training/overseas-training.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'learning-resources', component: LearningResourcesComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'overseas-training', component: OverseasTrainingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
