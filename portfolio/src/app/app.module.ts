import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SkillComponent } from './components/common/skill/skill.component';
import { ProjectComponent } from './components/common/project/project.component';
import { VerticalBannerComponent } from './components/common/vertical-banner/vertical-banner.component';
import { OneProjectComponent } from './components/one-project/one-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    HeaderComponent,
    SkillComponent,
    ProjectComponent,
    VerticalBannerComponent,
    OneProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
