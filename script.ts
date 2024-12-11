const loader = document.getElementById('loader') as HTMLElement;
const mainContent = document.getElementById('main-content') as HTMLElement;

function showContent(): void {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 1s ease-in-out';

    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1000);
}

window.addEventListener('load', (): void => {
    showContent();
});

const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;

function toggleTheme(): void {
    document.body.classList.toggle('dark-mode');
}

themeToggle?.addEventListener('click', toggleTheme);