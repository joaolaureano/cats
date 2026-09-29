import { Component, OnInit, signal } from "@angular/core";
import { SpinnerHandlerService } from "../../services/spinner-handler-service";
import { HttpService } from "../../http.service";
@Component({
  standalone: false,
  selector: "app-random-images",
  templateUrl: "./random-images.component.html",
  styleUrls: ["./random-images.component.css"],
})
export class RandomImagesComponent implements OnInit {
  randomimage = signal("assets/FUNNYCAT.jpg");
  nyan_cat = "assets/nyan_cat.gif";
  spinnerActive = signal(false);
  constructor(
    public spinnerHandler: SpinnerHandlerService,
    private serviceImage: HttpService
  ) {
    this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
  }
  imagesUrl = signal<string[]>([]);
  ngOnInit() {}

  generateImg() {
    this.serviceImage.getImage().subscribe((res) => {
      this.randomimage.set(res[0].url);
    });
  }
  saveImage() {
    this.imagesUrl.update((urls) => [...urls, this.randomimage()]);
  }
  deleteImage() {
    this.imagesUrl.update((urls) => urls.slice(0, -1));
  }

  showSpinner(state: boolean) {
    this.spinnerActive.set(state);
  }
}
