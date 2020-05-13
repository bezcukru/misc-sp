document.addEventListener('DOMContentLoaded', () => {
    const scroller = new Scroller('#root');

    document.addEventListener('wheel', (event) => scroller.listenScroll(event));

});