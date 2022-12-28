document.write("Hello World !");
console.log("Log Bilgisi Dönülmüştür");


var Name = window.prompt("Name : ");
var Surname = window.prompt("Surname : ");
    if( (Name != "") && (Name != null))
    alert("Welcome " + " " +Name + " " +Surname + " !");
    else if(Name =="")
    alert("Tüm İşaretli Alanları Doldurunuz");
    else if(Name == null)
    alert("Giriş Yapmaktan Vazgeçtiniz");


"use strict";
  var _sayilar = document.getElementsByTagName("button"),
    _sayiUzunluk = _sayilar.length,
    i = 0;

  for (i = 0; i < _sayiUzunluk; i++) {
    _sayilar[i].onclick = hesapla;
  }

"use strict";
  var _sonuc = document.getElementById("sonuc");

  function hesapla() {
    var _deger = this.innerHTML;

    if (_deger == "=") {
      try {
        _sonuc.value = eval(_sonuc.value);
      } catch (e) {
        _sonuc.value = "0";
      }
      return;
    }

    _sonuc.value += _deger;
  }
