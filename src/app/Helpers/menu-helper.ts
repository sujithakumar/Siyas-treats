import { getKeyByValue } from "./genericHelpers";
import { BASE_BUBBLETEA_MENU, BASE_KIDS_MENU, BASE_MENU_IMAGES_URL, BASE_MOUSSE_MENU, BASE_TEACOFFEE_MENU } from "./urls";

const MENU = {
    "Hot": "Hot Beverages",
    "Cold": "Cold Beverages",
    "Kids": "Kids Cakes",
    "love": "Lovers special",
    "swiss": "Swiss Rolls",
    "bday": "birthday Cakes",
    "Mousse": "Mousse"
}

export function getMenuKeyByValue(val: string | number) {
    return getKeyByValue(MENU, val);
}

export function getCategoriesAsArray(inp: any) {
    let cat: string[] = [];
    inp.forEach((element: { category: string; }) => {
        cat.push(element.category)
    });
    return cat;
}

export function mapCategoryNames(inp: any) {
    let out: any[] = [];
    inp.forEach((element: string) => {
        out.push(MENU[element as keyof typeof MENU]);
    });
    return out;
}

export function getSubCategories(inp: any, data: any) {
    let out: any = {};
    let subcat = '';
    out = data.filter((x: { category: any; }) => x.category == inp);
    out.map((e: any) => {
        e.subCat.forEach((element: any) => {
            subcat = element.catName;
            element.items.forEach((el: { imageURL: string; }) => {
                el.imageURL = imageURLMapping(el, subcat);
            });
        });
    });
    return out;
}

export function getFilters(inp: any[]) {
    let out: any[] = [];
    inp.forEach(element => {
        element.identifier.forEach((el: any) => {
            out.push(el);
        });
    });
    out = [...new Set(out)];
    return out.sort();
}

function imageURLMapping(e: any, subcat: string) {
    let out = BASE_MENU_IMAGES_URL + "/";
    switch (subcat) {
        case 'Coffee':
        case 'Tea':
            out = out + BASE_TEACOFFEE_MENU + "/" + e.image;
            break;

        case 'Bubble Tea':
            out = out + BASE_BUBBLETEA_MENU + "/" + e.image;
            break;

        case 'Mousse':
            out = out + BASE_MOUSSE_MENU + "/" + e.image;
            break;

        case 'Kids':
            out = out + BASE_KIDS_MENU + "/" + e.image;
            break;

        default:
            out = out + BASE_TEACOFFEE_MENU + "/" + e.image;
            break;

    }
    return out;
}

