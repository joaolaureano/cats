import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from "@angular/core";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
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
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
