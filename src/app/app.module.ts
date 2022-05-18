import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainMenuComponent } from "./pages/main-menu/main-menu.component";
import { RandomImagesComponent } from "./pages/random-images/random-images.component";
import { HttpGeneratorComponent } from "./pages/http-generator/http-generator.component";
import { FormsModule } from "@angular/forms";
import { CatsFullScreenComponent } from "./pages/cats-full-screen/cats-full-screen.component";
import { BackButtonComponent } from "./components/back-button/back-button.component";
import { SpinnerInterceptorService } from "./services/spinner-interceptor-service";
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    RandomImagesComponent,
    HttpGeneratorComponent,
    CatsFullScreenComponent,
    BackButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
