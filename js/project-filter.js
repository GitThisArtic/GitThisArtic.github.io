const filterButtons = [...document.querySelectorAll(".project-filter")];
const projectCards = [
    ...document.querySelectorAll(
        ".item-project-box[data-project-type], .project-card[data-project-type]"
    ),
];
const emptyMessage = document.querySelector(".project-empty");

const updateVisibleProjects = () => {
    const selectedFilters = new Set(
        filterButtons
            .filter((button) => button.getAttribute("aria-pressed") === "true")
            .map((button) => button.dataset.filter)
    );

    projectCards.forEach((card) => {
        card.hidden = !selectedFilters.has(card.dataset.projectType);
    });

    if (emptyMessage) {
        emptyMessage.hidden = projectCards.some((card) => !card.hidden);
    }
};

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const isSelected = button.getAttribute("aria-pressed") === "true";
        button.setAttribute("aria-pressed", String(!isSelected));
        updateVisibleProjects();
    });
});

updateVisibleProjects();
