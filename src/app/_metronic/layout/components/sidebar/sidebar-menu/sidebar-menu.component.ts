
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/modules/i18n';
import { AuthService } from 'src/app/pages/myProject/auth/Services/auth.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit, OnDestroy {
  menueList: any;
  private unsubscribe: Subscription[] = [];
  submenuVisibility: { [key: number]: boolean } = {};

  constructor(private authService: AuthService,
              private cdf: ChangeDetectorRef,
              private translation: TranslationService) { }

  ngOnInit(): void {
    this.getMenueList();
  }

  transform(menus: any[], parentID: number): any[] {
    return menus.filter(item => item.menu_ParentID === parentID);
  }

  getMenueList() {
    this.authService.currentUserSubject.pipe(takeUntil(this.unsubscribe)).subscribe((response: any) => {
      this.menueList = response.result.user.menus;
      this.menueList.forEach((menu:any) => {
        this.submenuVisibility[menu.menuID] = false;
      });
      this.cdf.detectChanges();
    });
    console.log(this.menueList);
  }

  currentLanguage() {
    return this.translation.getSelectedLanguage();
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}