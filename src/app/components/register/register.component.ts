import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  result: boolean;
  user = new User();
  

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  
  userRegister() {


    this.user.name = $('#name1').val();

    this.user.lastName = $('#soyad2').val();

    this.user.nickName = $('#nickName2').val();

    this.user.position = $('#position').val();

    this.user.email = $('#email').val();

    this.user.password = $('#password').val();

    this.user.tel = $('#tel').val();

    this.user.adress = $('#adress').val();

    this.user.team = $('#takım').val();

    this.user.citiesId = $('#cityId').val();

    this.userService.registerUser(this.user).subscribe((res) => {
      this.result = res.success;

      if (this.result) {
        window.location.href = '/login';
      } else {
        window.alert('Kayıt Yapılamadı Lütfen Bilgilerinizi Kontrol Ediniz');
      }
    });
  }
} 















