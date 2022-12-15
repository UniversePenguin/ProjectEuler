class myDate {
    daysIncremented = 0;
    dayNames = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ]
    monthLengths = {
        january: 31,
        february: 28,
        march: 31,
        april: 30,
        may: 31,
        june: 30,
        july: 31,
        august: 31,
        september: 30,
        october: 31,
        november: 30,
        december: 31
    }

    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    increment = function() {
        this.daysIncremented++;

        if (this.month == 'february' && this.year % 4 == 0 && this.day == 28) {
            this.day = 29;
            return;
        }

        if (this.monthLengths[this.month] <= this.day) {
            this.day = 1;
            if (this.month == 'december') {
                this.month = 'january';
                this.year++;
            } else {
                this.month = Object.keys(this.monthLengths)[Object.keys(this.monthLengths).indexOf(this.month)+1];
            }
            return;
        }

        this.day++;


    }
    
    dayOfWeek = function() {
        return this.dayNames[this.daysIncremented%7];
    }

    printDate = function() {
        return `${this.month}/${this.day}/${this.year}`;
    }
}

function Problem19() {

    let dateObj = new myDate(1, 'january', 1901);
    let dates = [];

    while (dateObj.printDate() != 'december/31/2000'){
        dates.push(`${dateObj.printDate()} - ${dateObj.dayOfWeek()}`);
        dateObj.increment();
    }

    let mondayCount = 0;

    dates.forEach(x => {
        let dayOfWeek = x.split(' - ')[1];
        let dayOfMonth = parseInt(x.split('/')[1]);
        if (dayOfWeek == 'monday' && dayOfMonth == 1) {
            console.log(x);
            mondayCount++;
        }
    });

    return mondayCount;

}

module.exports = {Problem19};