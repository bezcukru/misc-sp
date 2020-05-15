document.addEventListener("DOMContentLoaded", () => {
    const animBg = new AnimBg('.anim-bg')

    document.addEventListener('mousemove', (event) => animBg.listenCursorMove(event))
})