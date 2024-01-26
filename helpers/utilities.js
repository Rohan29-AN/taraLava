module.exports = {
    createErrorResponse(code, description, details, data) {
        return {
            "code": code,
            "description": description,
            "details": details,
            "data": data
        };
    },
    sanitizeInput(input) {
        const sanitizeInput = input.replace(/<[^>]*>/g, "");
        return sanitizeInput;
    },
    sortMap(input) {
        const entries = [...input.entries()];
        entries.sort((a, b) => b[1] - a[1]);
        return new Map(entries);
    },
    getCurrentISODate() {
        const currentDate = new Date();
        return currentDate.toISOString();
    },

    addYearsToDate(years, date) {
        date.setFullYear(date.getFullYear() + years);
        return date.toISOString().split("T")[0];
    },
    addDaysToDate(date, daysToAdd) {
        daysToAdd = parseInt(daysToAdd)
        return date.setDate(date.getDate() + daysToAdd)
    },
    calculateNumberPages(value, limitPerPage) {
        const totalPages = Math.ceil(value / limitPerPage);
        return totalPages
    },

    deleteFile(file) {
        file &&
            unlink(file?.path ? file.path : file, (err) => {
                if (err) {
                    console.error(err);
                }
            });
    },
    generateRandomNDigits(n) {
        //generate n+1 digits
        return Math.floor(Math.random() * (9 * Math.pow(10, n))) + Math.pow(10, n);
    },
    formatDate(date) {
        var element = date.split(/[\s,-/]+/);
        return Date.parse(element[1] + "-" + element[0] + "-" + element[2]);
    },
    generatePin(length) {
        let pin = "";
        for (var i = 0; i < length; i++) {
            pin += Math.floor(Math.random() * Math.floor(9));
        }
        return pin;
    },
    replaceAll(string, search, replace) {
        return string.split(search).join(replace);
    },
    formatString(text, separator, groupBy) {
        if (!text) return "";

        let ret = "";
        for (let i = text.length; i > 0; i = i - groupBy) {
            let j = i - groupBy < 0 ? 0 : i - groupBy;
            groupBy = i - groupBy < 0 ? i : groupBy;

            let s = text.substr(j, groupBy);
            const sep = ret == "" ? "" : separator;
            ret = s + sep + ret;
        }
        return ret;
    },
    formatPhoneNumber(number) {
        return (
            "(+261) " +
            number.substr(1, 2) +
            " " +
            number.substr(3, 2) +
            " " +
            number.substr(5, 3) +
            " " +
            number.substr(8, 2)
        );
    },
    nowTimestampFormat() {
        let andro = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
        var jour = new Date(andro).getUTCDate();
        var mois = new Date(andro).getUTCMonth() + 1;
        var annee = new Date(andro).getFullYear();
        var h = new Date(andro).getHours();
        var m = new Date(andro).getMinutes();
        var s = new Date(andro).getSeconds();

        let date = `${annee}-${mois}-${jour}_${h}-${m}-${s}`;
        return date;
    },

    currentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    },
}