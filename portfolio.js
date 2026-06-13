const panels = [
    { btn: "a_propos_panel",     sub: "sub_a_propos"     },
    { btn: "projets_panel",      sub: "sub_projets"      },
    { btn: "competences_panel",  sub: "sub_competences"  },
    { btn: "contact_panel",      sub: "sub_contact"      },
    { btn: "experience_panel",   sub: "sub_experience"   },
];

// Cache tous les sub-panels au chargement
panels.forEach(({ sub }) => {
    document.getElementById(sub).style.display = "none";
});

function closePanel(subPane) {
    subPane.classList.remove("open");
    // Attend la fin de la transition avant de masquer complètement
    subPane.addEventListener("transitionend", function handler() {
        if (!subPane.classList.contains("open")) {
            subPane.style.display = "none";
        }
        subPane.removeEventListener("transitionend", handler);
    });
}

function openPanel(subPane) {
    subPane.style.display = "grid"; // Rend visible avant d'animer
    // Petit délai pour que le navigateur prenne en compte display:grid avant la transition
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            subPane.classList.add("open");
        });
    });
}

panels.forEach(({ btn, sub }) => {
    const button  = document.getElementById(btn);
    const subPane = document.getElementById(sub);

    button.addEventListener("click", () => {
        const isOpen = subPane.classList.contains("open");

        // Ferme tous les panels
        panels.forEach(({ sub: otherId }) => {
            const other = document.getElementById(otherId);
            if (other.classList.contains("open")) closePanel(other);
        });

        // Si ce n'était pas déjà ouvert, on l'ouvre
        if (!isOpen) {
            openPanel(subPane);
        }
    });
});