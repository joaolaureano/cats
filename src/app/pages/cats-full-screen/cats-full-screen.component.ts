import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";

@Component({
  standalone: false,
  selector: "app-cats-full-screen",
  templateUrl: "./cats-full-screen.component.html",
  styleUrls: ["./cats-full-screen.component.css"],
})
export class CatsFullScreenComponent implements OnInit {
  groupCat: string[] = [];
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.generateCat();
  }

  generateCat() {
    for (let i = 0; i < 5; i++)
      this.http.getCats(10).subscribe((res) => {
        this.groupCat.push(...res.map((cat) => cat.url));
      });
  }
}
