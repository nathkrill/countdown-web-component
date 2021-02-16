class Countdown extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({mode: 'open'});
        this.endDate = this.hasAttribute('date') ? new Date(this.getAttribute('date')) : Date.now();
        this.format = this.hasAttribute('format') ? this.getAttribute('format') : 'days:hours:minutes:seconds';
        
        this.wrapper = document.createElement('span');
        this.shadowRoot.append(this.wrapper);
        
        window.setInterval(this.tick.bind(this), 100);
    }

    tick() {
        let diff = this.endDate.getTime() - new Date().getTime();
        this.setClock(this.formatMilliseconds(diff));
    }

    formatMilliseconds(milliseconds) {
        let days = (milliseconds / (1000*60*60*24));
        let hours = (milliseconds / (1000*60*60));
        let minutes = (milliseconds / (1000*60));
        let seconds = (milliseconds / (1000));
        return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
        }
    }

    setClock(time) {
        let returnString,days = null,hours = null,minutes = null,seconds = null, milliseconds = null;
        let total = time.milliseconds;
        if (this.format.includes('${days}')) {
        days = Math.floor(time.days);
        hours = Math.floor(time.hours % 24);
        total = total - (days * (1000*60*60*24));
        }
        time = this.formatMilliseconds(total);
        if (this.format.includes('${hours}')) {
        hours = hours == null ? Math.floor(time.hours) : hours;
        minutes = Math.floor(time.minutes % 60);
        total = total - (hours * (1000*60*60));
        }
        time = this.formatMilliseconds(total);
        if (this.format.includes('${minutes}')) {
        minutes = minutes == null ? Math.floor(time.minutes) : minutes;
        seconds = Math.floor(time.seconds % 60);
        total = total - (minutes * (1000*60));
        }
        time = this.formatMilliseconds(total);
        if (this.format.includes('${seconds}')) {
        seconds = seconds == null ? Math.floor(time.seconds) : seconds;
        milliseconds = Math.floor(time.milliseconds % 1000);
        total = total - (seconds * (1000));
        }
        time = this.formatMilliseconds(total);
        if (this.format.includes('${milliseconds}')) {
        milliseconds = milliseconds == null ? Math.floor(time.milliseconds) : milliseconds;
        }
        returnString = this.format.replace('${days}', days);
        returnString = returnString.replace('${hours}', hours);
        returnString = returnString.replace('${minutes}', minutes);
        returnString = returnString.replace('${seconds}', seconds);
        returnString = returnString.replace('${milliseconds}', milliseconds);
        this.wrapper.innerHTML = returnString;
    }
}

if (customElements) {
    customElements.define('countdown-clock', Countdown);
}