import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  mainSidebar = {
    show: false,
    showSub: false,
    selectedIndex: 0,
    menu:[
      // Dau so
      {
        selectedIndex: 0,
        icon: 'address book ',
        title: 'Đầu số',
        menu:[
          {
            title: 'Đang hoạt động',
            action: function(){
              console.log('online clicked');
            }
          },
          {
            title: 'Không hoạt động',
            action: function(){
              console.log('offline clicked');
            }
          }
        ]
      },
      // Call
      {
        selectedIndex: 0,
        icon: 'call',
        title: 'Cuộc gọi',
        menu:[]
      },
      // Devel
      {
        selectedIndex: 0,
        icon: 'spy',
        menu: [],
        title: 'Devel',
        action: function(){
          console.log('spy clicked');
        }
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }
  sidebarToggle(){
    this.mainSidebar.show = !this.mainSidebar.show;

    var content = document.getElementById('content');
    if(this.mainSidebar.show){
      content.style.marginLeft = "69px";
    }else{
      content.style.marginLeft = "5px";
    }
  }
  sidebarItemClicked(level: any, index: any){
    // console.log(`sidebar lever ${level} index ${index}`);
    var action = undefined;
    if(level == 0){
      if(this.mainSidebar.selectedIndex != index){
        this.mainSidebar.selectedIndex = index; 
        this.mainSidebar.showSub = true;
      }else{
        this.mainSidebar.showSub = !this.mainSidebar.showSub;
      }
      action = this.mainSidebar.menu[this.mainSidebar.selectedIndex]["action"];
    }else if(level == 1){
      this.mainSidebar.menu[this.mainSidebar.selectedIndex].selectedIndex = index;
      action = this.mainSidebar.menu[this.mainSidebar.selectedIndex].menu[this.mainSidebar.menu[this.mainSidebar.selectedIndex].selectedIndex]['action'];
    }
    if(action) action();
  }

}
