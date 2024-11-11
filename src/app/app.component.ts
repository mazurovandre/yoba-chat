import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "primeng/button";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, MainPageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yoba-chat';
  count = 0

  onButtonClick(event: MouseEvent) {
    console.log(event)
    this.count++;
  }
}
