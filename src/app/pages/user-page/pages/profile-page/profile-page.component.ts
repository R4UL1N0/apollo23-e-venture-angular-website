import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit{

  constructor() {}
  
  selectedSection: string = ''

  ngOnInit(): void {
    if (this.selectedSection == '') {
      this.selectedSection = 'events'
    }
  }

  goToSection(sectionName: string) {
    this.selectedSection = sectionName
  }
}
