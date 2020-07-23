// Write your code here
class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink
    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert
    }
}

let devinsBreakfast = new Breakfast("eggs", "coke")
let shawnsBreakfast = new Breakfast("sausage", "sprite")

let ethansLunch = new Lunch("french", "sopa de res", "horchata")
let johnsLunch = new Lunch("ranch", "lobster bisque", "root beer")

let gaudysDinner = new Dinner("ceaser", "clam chowder", "chicken parm", "vanilla cheesecake")
let jrsDinner = new Dinner("italian", "potato soup", "veggie burger", "fried oreos")


devinsBreakfast;
ethansLunch;
johnsLunch;
gaudysDinner;