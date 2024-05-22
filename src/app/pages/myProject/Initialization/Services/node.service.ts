import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core'; // Import TranslateService

@Injectable({
    providedIn: 'root'
})
export class NodeService {

    constructor(private translateService: TranslateService) {} // Inject TranslateService

    // Example method to fetch files
    getFiles(): Promise<TreeNode[]> {
        // Example file data
        const files: TreeNode[] = [
            {
                key: '0',
                label: this.translateService.instant('INITIALIZATION.POWERS_TEMPLATES.INITIALIZATION'), // Translate label dynamically
                data: 'Documents Folder',
                icon: 'pi pi-fw pi-inbox',
                children: [
                    {
                        key: '0-0',
                        label: 'Work',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-cog',
                        children: [
                            { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                            { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                        ]
                    },
                    {
                        key: '0-1',
                        label: 'Home',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-home',
                        children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
                    }
                ]
            }
        ];

        // Resolve the promise with the file data
        return Promise.resolve(files);
    }
}


