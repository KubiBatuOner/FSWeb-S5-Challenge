import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const kartKismi = document.createElement("div");
  kartKismi.classList.add("card");

  const baslikKismi = document.createElement("div");
  baslikKismi.classList.add("headline");
  baslikKismi.textContent = makale.anabaslik;

  const yazarKismi = document.createElement("div");
  yazarKismi.classList.add("author");

  const resimKismi = document.createElement("div");
  resimKismi.classList.add("img-container");

  const imgKismi = document.createElement("img");
  imgKismi.src = makale.yazarFoto;

  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = makale.yazarAdi + " tarafından";

  resimKismi.appendChild(imgKismi);
  yazarKismi.appendChild(resimKismi);
  yazarKismi.appendChild(yazarAdi);
  kartKismi.appendChild(baslikKismi);
  kartKismi.appendChild(yazarKismi);

  kartKismi.addEventListener("click", (event) => {
    console.log(kartKismi.querySelector(".headline").textContent);
  });

  return kartKismi;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const kartEkle = document.querySelector(secici);
  axios.get("http://localhost:5001/api/makaleler").then((response) => {
    const obj = response.data.makaleler;
    for (let key in obj) {
      for (let i = 0; i < obj[key].length; i++) {
        kartEkle.appendChild(Card(obj[key][i]));
      }
    }
  });
};

export { Card, cardEkleyici };
