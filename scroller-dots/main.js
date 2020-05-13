document.addEventListener('DOMContentLoaded', () => {
    const scroller = new Scroller('#root');

    document.addEventListener('wheel', (event) => scroller.listenScroll(event));
    document.addEventListener('swipeUp', () => scroller.scroll(1));
    document.addEventListener('swipeDown', () => scroller.scroll(-1));

});