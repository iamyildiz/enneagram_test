const btn = document.getElementById("buton");
const yazi = document.getElementById("metin");

btn.addEventListener("click", () => {
  yazi.textContent = "Butona başarıyla tıklandı!";
  yazi.style.color = "green";
});