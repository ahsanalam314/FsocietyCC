import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSidebarFrameComponent } from './Master-View/left-sidebar-frame/left-sidebar-frame.component';
import { HeaderBarComponent } from './Master-View/header-bar/header-bar.component';
import { FooterBarComponent } from './Master-View/footer-bar/footer-bar.component';
import { HomeComponent } from './Home-View/home/home.component';
import { ApplicantAppliedComponent } from './Home-View/applicant-applied/applicant-applied.component';
import { ApplicantRejectedComponent } from './Home-View/applicant-rejected/applicant-rejected.component';
import { ShortListedApplicantComponent } from './Home-View/short-listed-applicant/short-listed-applicant.component';
import { PendingApplicantComponent } from './Home-View/pending-applicant/pending-applicant.component';
import { GridViewComponent } from './Home-View/grid-view/grid-view.component';
import { CreateInterviewComponent } from './Create-Interview/create-interview/create-interview.component';
import { SearchBarComponent } from './Create-Interview/search-bar/search-bar.component';
import { AboutInterviewComponent } from './Create-Interview/about-interview/about-interview.component';
import { AddQuestionsComponent } from './Create-Interview/add-questions/add-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarFrameComponent,
    HeaderBarComponent,
    FooterBarComponent,
    HomeComponent,
    ApplicantAppliedComponent,
    ApplicantRejectedComponent,
    ShortListedApplicantComponent,
    PendingApplicantComponent,
    GridViewComponent,
    CreateInterviewComponent,
    SearchBarComponent,
    AboutInterviewComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
