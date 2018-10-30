import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Province } from '../../../models/province.model';
import { ProvinceService } from '../../../services/province/province.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {

  
  provincs: Province[] = [];
  display:string ="none";
  province: Province;
  id:any;


  constructor(
    public _provService: ProvinceService,
    public router: Router

  ) { }

  ngOnInit() {
    this._provService.list().subscribe((resp:any) => {
      this.provincs = resp.entities;
    });
    this.province  = new Province(null,'0');
  }
  add(){
    let date = new Date();
    this.display = 'block';
    this.province = new Province(null, '0');
    
  }
  edit(province:Province){
    this.province = province;
  }
  save(form?: NgForm) {
    
    
    if(form.value.id==='0') {
      this._provService.update(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getProvinces();
      });
    } else {
      this._provService.create(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getProvinces();
        });
    }
    
  }
  getProvinces(){
    this._provService.list().subscribe((resp:any) => {
      this.provincs = resp.entities as Province[];
    });
  }
  close(){
    this.display = 'none';
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      //this.getUsers();
    }
  }

}
