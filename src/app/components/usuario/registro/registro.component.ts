import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

authError: any;
  constructor(private router:Router, private auth: AuthService) { }

  ngOnInit() {
    
  }
  createUser(frm){
   this.auth.createUser(frm.value);
    
  }


}
