function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section-container');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}
