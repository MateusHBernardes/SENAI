document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("selectGraficos");
    select.addEventListener("change", function () {
      const pagina = this.value;
      if (pagina) {
        window.location.href = pagina;
      }
    });
  });