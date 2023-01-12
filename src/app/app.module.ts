import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from "./components/footer/footer.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';
@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavComponent,
        HomeComponent,
        UpdateComponent,
        CreateComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [ 
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }
