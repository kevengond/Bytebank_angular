
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() transferencias: any[];

  constructor() {}

  ngOnInit(): void {
    
  }
}





// ng s -o é tipo um ng server so que ja a pag no navegador





