export interface Menu {
    "items": Items[];
}

export interface Items {
    "category": String;
    "categoryID": String;
    "subCat": subcat[];
}

interface subcat {
    "catName": String;
    "items": subCatItems[];
}

export interface subCatItems {
    "name": String;
    "image": String;
    "price": number;
    "identifier": string[];
    "hasOffer": number;
    "offerPrice": number;
    "quantity": number;
    "subCatID": number;
}
