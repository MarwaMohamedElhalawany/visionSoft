import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalConfig } from 'src/app/_metronic/partials';
import { AddEditPermissionComponent } from '../../modals/add-edit-permission/add-edit-permission.component';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { NodeService } from '../Services/node.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  // standalone: true,
  // imports: [TreeModule],
  
  providers: [NodeService],
  styleUrls: ['./permission.component.scss']
})




export class PermissionComponent implements OnInit {
  files!: TreeNode[];

  selectedFiles!: TreeNode[];
  constructor(private NodeService: NodeService) { }

  ngOnInit() {
    this.NodeService.getFiles().then((data:any) => (this.files = data));
  }

  permissionModalConfig: ModalConfig = {
    modalTitle: 'حذف',
    dismissButtonLabel: 'حذف',
    closeButtonLabel: 'الغاء'
  };

  @ViewChild('modalPermission') private modalPermissionComponent: AddEditPermissionComponent;

  async openModalPermission() {
    // event.stopPropagation();
    return await this.modalPermissionComponent.open();
  }
}
