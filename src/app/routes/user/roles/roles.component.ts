import { Component, OnInit } from '@angular/core';
import { Role } from '../../../models/role.model';
import { RoleService } from '../../../services/service.index';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roles: Role[] = [];
  display:string ="none";
  role: Role;
  id:any;


  constructor(
    public _rolService: RoleService,
    public router: Router

  ) { }

  ngOnInit() {
    this._rolService.list().subscribe((resp:any) => {
      this.roles = resp.entities;
    });
    this.role  = new Role(null,'0');
  }
  add(){
    let date = new Date();
    this.display = 'block';
    this.role = new Role(null, '0',date.toString());
    
  }
  edit(role:Role){
    this.role = role;
  }
  save(form?: NgForm) {
    
    
    if(form.value.id) {
      this._rolService.update(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getRoles();
      });
    } else {
      this._rolService.create(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getRoles();
        });
    }
    
  }
  getRoles(){
    this._rolService.list().subscribe((resp:any) => {
      this.roles = resp.entities as Role[];
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
