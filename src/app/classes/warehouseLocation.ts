import { StockItem } from "./stockItem";

export class WarehouseLocation {
    private _stockItem!: StockItem;

    constructor(public aisle: number, public slot: string) {
    }

    get stockItem() {
        return this._stockItem;
    }

    set stockItem(item: StockItem) {
        this._stockItem = item;
    }

}