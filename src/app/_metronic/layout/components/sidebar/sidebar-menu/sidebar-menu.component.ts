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

  icons: any = {
    1: 'fa-home',
    3: 'fa-solid fa-list',
    4: 'fas fa-users-cog',
    5: 'fas fa-users-cog',
    24: 'fas fa-users-cog',
    6:'pi pi-building',
    
   12018:'fa-solid fa-cart-plus',
    17:'fa-solid fa-cart-shopping',
    1201:'fa-solid fa-cart-shopping',
    1608:'fa-solid fa-cart-shopping',
    16013:'fa-solid fa-cart-shopping',
    12:' class="fa-solid fa-truck',
    15:'far fa-money-bill',
    13:'far fa-money-bill',
    7:'fab fa-opencart',
    // 1201:'fa-solid fa-cart-shopping',
    // 1201:'fa-solid fa-cart-shopping',
    // 1201:'fa-solid fa-cart-shopping',
    // 1201:'fa-solid fa-cart-shopping',
    // 1201:'fa-solid fa-cart-shopping',
    // وهكذا لبقية القوائم
  };

  constructor(private authService: AuthService,
              private cdf: ChangeDetectorRef,
              private translation: TranslationService) { }

  ngOnInit(): void {
    this.getMenueList();
  }

  transform(menus: any[], parentID: number): any[] {
    return menus.filter(item => item.menu_ParentID === parentID);
  }

  getIcon(menuId: number): string {
    return this.icons[menuId];
  }

  getMenueList() {
    this.authService.currentUserSubject.pipe(takeUntil(this.unsubscribe)).subscribe((response: any) => {
      this.menueList = response.result.user.menus;
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