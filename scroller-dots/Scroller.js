class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        this.sections = document.querySelectorAll('section');
        this.currentSectionIndex = 0;
        this.isThrottled = false;

        this.listenScroll = this.listenScroll.bind(this);
        this.scroll = this.scroll.bind(this);
        this.scrollToCurrentSection = this.scrollToCurrentSection.bind(this);

        this.isScrolledIntoView(this.sections[0]);
    }

    isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = Math.floor(rect.bottom);
        
        const isVisible = (elemTop>= 0) && (elemBottom <= window.innerHeight);

        console.log(isVisible);
        

        }

    listenScroll(e) {
        if (this.isThrottled) return;
        this.isThrottled = true;
        setTimeout(() => {
            this.isThrottled = false;
        }, 1000);

        const direction = e.wheelDelta < 0 ? 1 : -1;



        this.scroll(direction);
    }

    scroll(direction) {

        if (direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if (isLastSection) return;

        } else if (direction === -1) {

            const firstSection = this.currentSectionIndex === 0;
            if (firstSection) return;

        }

        this.currentSectionIndex = this.currentSectionIndex + direction;

        this.scrollToCurrentSection();

    }

    scrollToCurrentSection() {

        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}