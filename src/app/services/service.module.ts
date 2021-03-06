import { SectorService } from './sector/sector.service';

import { ModalUploadService } from './../components/modal-upload/modal-upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SharedService,
    SidebarService,
    UserService,
    LoginGuard,
    RoleService,
    SubirArchivoService,
    VerificaTokenGuard,
    PersonService,
    ProvinceService,
    RegionService,
    InstitutionService
 } from './service.index';
 
import { HttpClientModule } from '@angular/common/http';
// import { UserService } from './user/user.service';



@NgModule({
    imports:[
        CommonModule,
        HttpClientModule
    ],
    providers: [
        SharedService,
        SidebarService,
        UserService,
        RoleService,
        LoginGuard,
        SubirArchivoService,
        ModalUploadService,
        VerificaTokenGuard,
        PersonService,
        InstitutionService,
        ProvinceService,
        RegionService,
        SectorService

       
    ],
    declarations:[]
})
export class ServiceModule{}