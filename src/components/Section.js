export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = containerSelector;
        this._renderItems = this._items;
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._renderItems.forEach((item) => {
            this._renderer(item);
        });
    }
}