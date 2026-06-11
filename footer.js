        const links = document.querySelectorAll(".nav-link");

        links.forEach(link => {

            link.addEventListener("click", function (e) {

                e.preventDefault();

                links.forEach(item =>
                    item.classList.remove("active")
                );

                this.classList.add("active");

            });

        });
                                                                                                                                  document
        .getElementById("registro")
        .addEventListener("submit", function(e){

        e.preventDefault();

         alert(
            "🎄 ¡Gracias por registrarte! Pronto recibirás nuevas ideas de regalos."
            );

            this.reset();

        });