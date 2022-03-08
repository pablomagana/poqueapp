import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { IModalDialogButton, ModalDialogService } from 'ngx-modal-dialog';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { poqueBasic } from '../interfaces/poque-basic';
import { PoqueCardComponent } from '../poque-card/poque-card.component';

import { PoquemonService } from '../services/poquemon.service';

@Component({
  selector: 'app-poquelist',
  templateUrl: './poquelist.component.html',
  styleUrls: ['./poquelist.component.scss'],
})
export class PoquelistComponent implements OnInit {
  poquemons: poqueBasic[] = [];
  actionButtons: IModalDialogButton[];
  searchTerm: string = '';
  constructor(
    private poquemonService: PoquemonService,
    private modalService: ModalDialogService,
    private viewRef: ViewContainerRef
  ) {
    this.actionButtons = [{ text: 'Cerrar' }];
  }

  ngOnInit(): void {
    this.loadPoquemons();
  }

  loadPoquemons(): void {
    firstValueFrom(this.poquemonService.getPoquemons()).then((poquemons) => {
      this.poquemons = poquemons;
      console.log(this.poquemons);
    });
  }

  openCard(poquemon: poqueBasic): void {
    firstValueFrom(this.poquemonService.getPoquemon(poquemon.url)).then(
      (poquemonInfo) => {
        this.modalService.openDialog(this.viewRef, {
          title: `${poquemonInfo.name}`,
          childComponent: PoqueCardComponent,
          actionButtons: this.actionButtons,
          data: poquemonInfo,
        });
      }
    );
  }
}
