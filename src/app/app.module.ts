import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSidebarFrameComponent } from './Master-View/left-sidebar-frame/left-sidebar-frame.component';
import { HeaderBarComponent } from './Master-View/header-bar/header-bar.component';
import { FooterBarComponent } from './Master-View/footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarFrameComponent,
    HeaderBarComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
