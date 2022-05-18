import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainMenuComponent } from "./pages/main-menu/main-menu.component";
import { RandomImagesComponent } from "./pages/random-images/random-images.component";
import { HttpGeneratorComponent } from "./pages/http-generator/http-generator.component";
import { CatsFullScreenComponent } from "./pages/cats-full-screen/cats-full-screen.component";
const routes: Routes = [
  { path: "httpGenerator", component: HttpGeneratorComponent },
  { path: "imageGenerator", component: RandomImagesComponent },
  { path: "fullCats", component: CatsFullScreenComponent },
  { path: "**", component: MainMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
