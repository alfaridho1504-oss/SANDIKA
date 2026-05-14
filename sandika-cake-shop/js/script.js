/* filepath: c:\Users\HP EliteBook 840 G3\Desktop\Wabsite alfa\sandika-cake-shop\js\script.js */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("order-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value;
    const notes = document.getElementById("message").value.trim();

    if (!name || !email || !product) {
      message.textContent =
        "Mohon lengkapi semua kolom sebelum mengirim pesanan.";
      message.style.color = "#b14f2f";
      return;
    }

    const text = [
      "Halo Sandika,",
      "Saya ingin memesan Kue Semprong.",
      `Nama: ${name}`,
      `Email: ${email}`,
      `Paket: ${product}`,
      notes ? `Catatan: ${notes}` : "",
      "Terima kasih.",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/6283184706382?text=${encodeURIComponent(text)}`;

    message.textContent = "Sedang mengarahkan ke WhatsApp...";
    message.style.color = "#4b6d48";

    window.location.href = whatsappUrl;
  });
});
