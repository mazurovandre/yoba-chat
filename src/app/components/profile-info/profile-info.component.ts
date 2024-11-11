import { Component } from '@angular/core';
import { AvatarModule } from "primeng/avatar";

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [
    AvatarModule
  ],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent {

}
