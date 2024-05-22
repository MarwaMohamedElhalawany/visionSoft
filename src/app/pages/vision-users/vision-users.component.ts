import { Component } from '@angular/core';

type Tabs =
  | 'kt_table_widget_7_tab_1'
  | 'kt_table_widget_7_tab_2'
  | 'kt_table_widget_7_tab_3';

  type Tabs2 =
  | 'kt_table_widget_9_tab_1'
  | 'kt_table_widget_9_tab_2'
  | 'kt_table_widget_9_tab_3';

@Component({
  selector: 'app-vision-users',
  templateUrl: './vision-users.component.html',
  styleUrls: ['./vision-users.component.scss']
})
export class VisionUsersComponent {

  activeTab: Tabs = 'kt_table_widget_7_tab_1';
  activeTab2: Tabs2 = 'kt_table_widget_9_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  setTab2(tab: Tabs2) {
    this.activeTab2 = tab;
  }

  activeClass2(tab: Tabs2) {
    return tab === this.activeTab2 ? 'show active' : '';
  }

}
