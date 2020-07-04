class Utils {
    static parseElement(element) {
        try {
            return JSON.parse(element);
        } catch (ex) {
            return element;
        }
    }
}

module.exports = Utils