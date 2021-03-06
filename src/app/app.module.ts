import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService} from '../../services/profile.service';
import { NavComponent } from './nav/nav.component';
import { TextstyleDirective } from './textstyle.directive';
import { TextcolorPipe } from './textcolor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavComponent,
    TextstyleDirective,
    TextcolorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
