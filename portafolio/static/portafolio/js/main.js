document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      navigation.classList.toggle("is-open", !isOpen);
    });
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
        navigation.classList.remove("is-open");
      }
    });
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll(".project-card[data-tags]");
  const filterStatus = document.querySelector("#filter-status");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      let visibleCount = 0;
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      projectCards.forEach((card) => {
        const visible = filter === "all" || card.dataset.tags.split(" ").includes(filter);
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (filterStatus) filterStatus.textContent = `${visibleCount} proyectos visibles.`;
    });
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    const fields = {
      name: { input: form.elements.name, error: document.querySelector("#name-error"), message: "Escribe tu nombre." },
      email: { input: form.elements.email, error: document.querySelector("#email-error"), message: "Escribe un correo válido." },
      message: { input: form.elements.message, error: document.querySelector("#message-error"), message: "Escribe un mensaje." },
    };
    const feedback = document.querySelector("#form-feedback");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let isValid = true;
      Object.entries(fields).forEach(([name, field]) => {
        const value = field.input.value.trim();
        const emailValid = name !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const fieldValid = value.length > 0 && emailValid;
        field.input.setAttribute("aria-invalid", String(!fieldValid));
        field.error.textContent = fieldValid ? "" : field.message;
        if (!fieldValid) isValid = false;
      });
      if (feedback) {
        feedback.textContent = isValid
          ? "¡Gracias! El formulario es una demostración y no envía datos. Escríbeme directamente al correo indicado."
          : "Revisa los campos señalados antes de continuar.";
        feedback.classList.toggle("is-success", isValid);
      }
    });

    Object.values(fields).forEach(({ input, error }) => {
      input.addEventListener("input", () => {
        input.removeAttribute("aria-invalid");
        error.textContent = "";
      });
    });
  }
});
