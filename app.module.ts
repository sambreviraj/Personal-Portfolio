import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>
      <app-home></app-home>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-contact></app-contact>
    </main>
  `
})
export class AppComponent {
  title = 'viraj-portfolio';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav>
        <div class="logo">
          <img src="assets/images/virajsambrelogo.png" alt="Viraj Sambre Logo">
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: white;
      padding: 20px 50px;
      position: fixed;
      width: 100%;
      box-sizing: border-box;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo img {
      height: 60px;
    }

    ul {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin-left: 30px;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }
  `]
})
export class HeaderComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section id="home">
      <h1>Management & Design Professional</h1>
      <h2>Bringing clarity to <span class="highlight">complexity</span> & ideas to <span class="highlight">reality!</span></h2>
      <p>Know a bit of Korean thanks to my interest in K-pop and K-dramas</p>
      <a href="#projects" class="cta-button">View Projects</a>
    </section>
  `,
  styles: [`
    section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 80px 50px;
    }

    .highlight {
      color: #FFA500;
    }

    .cta-button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #333;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      width: fit-content;
    }
  `]
})
export class HomeComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about">
      <h2>About Me</h2>
      <div class="about-content">
        <img src="assets/images/viraj.jpeg" alt="Viraj">
        <div class="about-text">
          <h3>I am <span class="highlight">Viraj</span>. A Master of Information Systems student at Pace University</h3>
          <p>From Engineering to Product Management</p>
          <p>With a background in ETC, my journey began with an interest in understanding how systems work at a core level.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: 80px 50px;
    }

    .about-content {
      display: flex;
      gap: 30px;
      margin-top: 20px;
    }

    img {
      width: 300px;
      height: 400px;
      object-fit: cover;
    }

    .highlight {
      color: #FFA500;
    }
  `]
})
export class AboutComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects">
      <h2>Projects</h2>
      <div class="projects-grid">
        <div class="project-item">
          <img src="assets/images/project1.png" alt="Project 1">
          <h3>Savour & Slumber</h3>
          <p>Role: UI/UX Designer</p>
        </div>
        <div class="project-item">
          <img src="assets/images/project2.png" alt="Project 2">
          <h3>Museum of Raw Thoughts</h3>
          <p>Role: Product Manager</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: 80px 50px;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-top: 20px;
    }

    .project-item {
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
    }
  `]
})
export class ProjectsComponent {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }