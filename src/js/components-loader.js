function loadComponent(selector, file) {
    fetch(file)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then((data) => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch((error) => console.error(error));
}

// Carrega os componentes
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("#header", "./components/header.html");
    loadComponent("#consultancy", "./components/consultancy.html");
    loadComponent("#about", "./components/about.html");
    loadComponent("#services", "./components/services.html");
    //loadComponent("#environmental-programs", "./components/environmental-programs.html");
    loadComponent("#contact", "./components/contact.html");
    loadComponent("#social-media", "./components/social-media.html");
    loadComponent("#footer", "./components/footer.html");
});
