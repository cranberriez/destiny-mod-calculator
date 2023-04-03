class Totals {
    constructor(data) {
        this.data = data;
    }
  
    getData() {
        return this.data;
    }
  
    isEqual(otherTotals) {
        return JSON.stringify(this.data) === JSON.stringify(otherTotals.getData());
    }

    getValue(use, key) {
        return this.data[use][key]
    }
    updateValue(use, key, value) {
        this.data[use][key] = value;
    }
}

export default Totals;