import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LearningResourcesComponent} from './learning-resources/learning-resources.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {OverseasTrainingComponent} from './overseas-training/overseas-training.component';
import {OverseasStudentsComponent} from './overseas-students/overseas-students.component';
import {NewsComponent} from './news/news.component';
import {NewsdetailpageComponent} from './newsdetailpage/newsdetailpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'learning-resources', component: LearningResourcesComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'overseas-training', component: OverseasTrainingComponent},
  {path: 'overseas-students', component: OverseasStudentsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'newsdetailpage/:id', component: NewsdetailpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
