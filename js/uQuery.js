class uquery {
    constructor (el) {
        if (el[0] == '.') {
            this.elements = document.getElementsByClassName(el.slice(1,));
        } else if (el[0] == '#') {
            this.elements = [document.getElementById(el.slice(1,))];
        } else {
            this.elements = document;
        }
    }

    addClass(cl) {
        for (let count = 0; count < this.elements.length; count++) {
            if (this.elements[count].className) {
                this.elements[count].className += " " + cl;
            } else {
                this.elements[count].className = cl;
            }
        }
    }

    createId(id){
        for (let count = 0; count < this.elements.length; count++) {
            this.elements[count].id = id;
        }
    }
}

function uQuery(el) {
    var element = new uquery(el);
    return element;
}