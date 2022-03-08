import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { PoqueItem } from '../interfaces/poque-item';

@Component({
  selector: 'app-poque-card',
  templateUrl: './poque-card.component.html',
  styleUrls: ['./poque-card.component.scss'],
})
export class PoqueCardComponent implements OnInit, IModalDialog {
  @Input() poquemon: PoqueItem = {} as PoqueItem;

  urlImage: string = '';

  constructor() {}

  dialogInit(
    reference: ComponentRef<IModalDialog>,
    options: Partial<IModalDialogOptions<any>>
  ): void {
    console.log(options);
    this.poquemon = options.data;
    this.urlImage = this.poquemon.sprites.front_default;
  }

  ngOnInit(): void {}
}
