
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
  icons: any = {
    1: 'fa-solid fa-chart-simple',
    3: 'fa-solid fa-list',
    4: 'fas fa-users-cog',
    24: 'fas fa-users-cog',
    6:'fas fa-cart-plus',  
   12018:'fa-solid fa-cart-plus',
    17:'fas fa-users-cog',
    1201:'fas fa-users-cog',
    1608:'fas fa-users-cog',
    16013:'fas fa-users-cog',
    12:' fas fa-luggage-cart',
    15:'far fa-money-bill-alt',
    13:'far fa-money-bill-alt',
    7:'fab fa-opencart',
    22:'fa-solid fa-cart-shopping',
    9:'fa-solid fa-cart-shopping',
    23:'fas fa-shipping-fast',
    11:'fas fa-qrcode',
   19:'fas fa-truck-loading',
    16:'fas fa-chart-line',
    5: 'fas fa-users-cog',
    10:'fas fa-truck-moving',
    // 1201:'fa-solid fa-cart-shopping',
    // 1201:'fa-solid fa-cart-shopping',
    // 1201:'fa-solid fa-cart-shopping',
    // 1201:'fa-solid fa-cart-shopping',
    // وهكذا لبقية القوائم
  };  

getIcon(menuId: number): string {
    return this.icons[menuId];
  }

}