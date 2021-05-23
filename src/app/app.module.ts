import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component'
// services
import { PubsubService } from './services/pub-sub.service';
import { CommonService } from './services/common.service';
// custom directive
import { NumberOnlyDirective } from './directives/number.directive';
import { DetailsChildComponent } from './details-child/details-child.component';
import { OthersComponent } from './others/others.component';
// custom pipes
import { FilterName } from './pipes/namesearch.pipe';
import { TableComponentComponent } from './table-component/table-component.component';
@NgModule({
  declarations: [
    // components
    AppComponent,
    TopNavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DetailsComponent,
    // directives
    NumberOnlyDirective,
    DetailsChildComponent,
    OthersComponent,
    // pipes
    FilterName,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PubsubService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
