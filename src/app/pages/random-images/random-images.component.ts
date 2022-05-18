import { Component, OnInit } from "@angular/core";
import { SpinnerHandlerService } from "src/app/services/spinner-handler-service";
import { HttpService } from "../../http.service";
@Component({
  selector: "app-random-images",
  templateUrl: "./random-images.component.html",
  styleUrls: ["./random-images.component.css"],
})
export class RandomImagesComponent implements OnInit {
  randomimage = "../../assets/FUNNYCAT.jpg";
  nyan_cat = "../../assets/nyan_cat.gif";
  spinnerActive: boolean = true;
  constructor(
    public spinnerHandler: SpinnerHandlerService,
    private serviceImage: HttpService
  ) {
    this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
  }
  imagesUrl = [];
  ngOnInit() {}

  generateImg() {
    this.serviceImage.getImage().subscribe((res) => {
      this.randomimage = res["file"];
    });
  }
  saveImage() {
    this.imagesUrl.push(this.randomimage);
  }
  deleteImage() {
    this.imagesUrl.splice(-1, 1);
  }

  showSpinner(state: boolean) {
    this.spinnerActive = state;
  }
}
