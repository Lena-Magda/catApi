import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  data: string;
  err: any;

  constructor( private dataService: DataService, private http: HttpClient ) { }

  ngOnInit() {

  }

  clearStorage() {
    //tymczasowe do testów
    localStorage.clear();
  }

  checkKey( newKey: HTMLInputElement ) {
    //Funkcja odpowiedzialna za sprawdzenie klucza
    //newKey - parametr funkcji przechowujący tymczasowy klucz podany przez użytkownika

    console.log(newKey.value);
    this.dataService.verifyKey(newKey.value).subscribe(
      (res) => {
        console.log("OK response:", res);
        localStorage.setItem('apiKey', newKey.value);
        //zapisz do local storage poprawny klucz
        window.location.reload();
      },
      (err) => {
        console.log("Error reposnse:", err);
        document.getElementById('err-message').innerHTML='<p>Podany klucz jest niepoprawny</p>'
      }
    )
  }
}
