const abas = document.querySelectorAll(".aba");
const paginas = document.querySelectorAll(".pagina");

abas.forEach((aba) => {
    aba.addEventListener("click", () => {

        abas.forEach((a) => {
            a.classList.remove("ativa");
        });

        paginas.forEach((p) => {
            p.classList.remove("ativa");
        });

        aba.classList.add("ativa");

        document
            .getElementById(aba.dataset.pagina)
            .classList.add("ativa");

    });
});