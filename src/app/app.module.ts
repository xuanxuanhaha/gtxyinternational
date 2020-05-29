import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OverseasTrainingComponent } from './overseas-training/overseas-training.component';
import { OverseasStudentsComponent } from './overseas-students/overseas-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LearningResourcesComponent,
    AboutUsComponent,
    OverseasTrainingComponent,
    OverseasStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
