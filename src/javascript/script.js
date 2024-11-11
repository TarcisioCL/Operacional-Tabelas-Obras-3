document.querySelectorAll(".toggle-link").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        
        // Extrair a classe do link clicado
        const targetClass = `main-${link.id.replace('nav-', '')}`;
        const targetDiv = document.querySelector(`.${targetClass}`);
        
        // Alternar a visibilidade da div correspondente
        targetDiv.classList.toggle("main-hidden");
        
        document.querySelectorAll(".main-section").forEach(div => {
            if (!div.classList.contains(targetClass)) {
                div.classList.add("main-hidden");
            }
        });
    });
});







