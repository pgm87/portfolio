const app = {};

app.openButton = document.querySelector('.openButton');
app.closeButton = document.querySelector('.closeButton');
app.slideOutNav = document.querySelector('.slideOutNav');

app.openButton.addEventListener('click', () => {
    console.log('hi')
    app.slideOutNav.className = app.slideOutNav.className.add === 'slideOutReveal' ? 'slideOutHidden' : 'slideOutNav slideOutReveal'
})

app.closeButton.addEventListener('click', () => {
    app.slideOutNav.className = app.slideOutNav.className.add === 'slideOutReveal' ? 'slideOutHidden' : 'slideOutNav slideOutHidden'
})