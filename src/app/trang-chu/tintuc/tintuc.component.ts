import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.scss'],
})
export class TintucComponent implements OnInit {
  loaiTinTuc: string = 'DienAnh';
  constructor() {}
  ChonLoaiTin(val: any) {
    this.loaiTinTuc = val;
  }
  ngOnInit(): void {}
}
