import { Component } from '@angular/core';
import { BorderedBlockComponent } from "../../components/layout/bordered-block/bordered-block.component";
import { ProfileInfoComponent } from "../../components/profile-info/profile-info.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    BorderedBlockComponent,
    ProfileInfoComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
