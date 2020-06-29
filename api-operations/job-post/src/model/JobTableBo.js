class JobTable {
    constructor(keyvalues) {
        this.keyvalues = keyvalues;
    }

    createRecord() {
        let record = {}
        if (this.keyvalues) {
            this.keyvalues.forEach(element => {
                record[element.name] = element.value;
            });
        }
        return record;
    }

    toString() {
        return JSON.stringify(this.createRecord());
    }
}

// let record = new JobTable([{ name: 'id', value: '1' }, { name: 'category', value: '12' }])
// console.log(record.toString())

module.exports = JobTable;