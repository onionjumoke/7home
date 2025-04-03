// Handle icon clicks
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.dataset.action === 'settings') {
            document.getElementById('home-screen').style.display = 'none';
            document.getElementById('settings-app').style.display = 'block';
        } else if (icon.dataset.url) {
            window.open(icon.dataset.url, '_blank');
        }
    });
});

// Handle back button in settings
document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('settings-app').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
});

// Handle wallpaper change
document.getElementById('set-wallpaper').addEventListener('click', () => {
    const url = document.getElementById('wallpaper-url').value.trim();
    if (url) {
        document.body.style.backgroundImage = `url('${url}')`;
    }
});