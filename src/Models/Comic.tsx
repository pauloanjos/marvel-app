export class ComicItem {
    resourceURI: string;
    name: string;
    constructor(resourceURI: string, name: string){
        this.resourceURI = resourceURI;
        this.name = name;
    }
}


export class Comic {
    available: number;
    collectionURI: string;
    items: ComicItem [];

    constructor(available:number, collectionURI: string, items: ComicItem[]){
        this.available = available;
        this.collectionURI = collectionURI;
        this.items = items;
    }
}