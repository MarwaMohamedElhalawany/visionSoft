import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslationService } from 'src/app/modules/i18n';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.scss']
})
export class StaffManagementComponent {
  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef

  ) { 
  }
}
