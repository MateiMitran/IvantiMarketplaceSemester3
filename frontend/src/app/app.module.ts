import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DealsComponent } from './home/deals/deals.component';
import { IntroComponent } from './home/intro/intro.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { StoreComponent } from './store/store.component';
import { PackageComponent } from './store/package/package.component';
import { PackageDetailsComponent } from './store/package-details/package-details.component';
import { StoreIntroComponent } from './store/store-intro/store-intro.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotificationService } from './auth/service/notification.service';
import { AuthenticationGuard } from './auth/guard/authentication.guard';
import { AuthenticationService } from './auth/service/authentication.service';
import { UserService } from './auth/service/user.service';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { NotificationModule } from './notification.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UpdateProfileInfoComponent } from './profile-page/update-profile-info/update-profile-info.component';
import { ResetPasswordProfileComponent } from './profile-page/reset-password-profile/reset-password-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DealsComponent,
    IntroComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    StoreComponent,
    PackageComponent,
    PackageDetailsComponent,
    StoreIntroComponent,
    LoginComponent,
    RegistrationComponent,
    ProfilePageComponent,
    UpdateProfileInfoComponent,
    ResetPasswordProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule, 
    NotificationModule,
    FormsModule
  ],
  providers: [NotificationService, AuthenticationGuard, AuthenticationService, UserService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
