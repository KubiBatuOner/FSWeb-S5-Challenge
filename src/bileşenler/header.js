const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const headerKismi = document.createElement("div");
  headerKismi.classList.add("header");

  const tarihKismi = document.createElement("span");
  tarihKismi.classList.add("date");
  tarihKismi.textContent = tarih;

  const h1Kismi = document.createElement("h1");
  h1Kismi.textContent = baslik;

  const yaziKismi = document.createElement("span");
  yaziKismi.classList.add("temp");
  yaziKismi.textContent = yazi;

  headerKismi.appendChild(tarihKismi);
  headerKismi.appendChild(h1Kismi);
  headerKismi.appendChild(yaziKismi);

  return headerKismi;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const seciciEkle = document.querySelector(secici);
  seciciEkle.appendChild(
    Header("Teknoloji Zamanı", "11 Kasım 2022", "sağdaki yazı")
  );
  return seciciEkle;
};

export { Header, headerEkleyici };
