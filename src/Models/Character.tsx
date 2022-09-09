

import { Thumbnail } from "./Thumbnail";
import { Comic } from "./Comic";

export class Character {
    private _id: string;
    private _name: string;
    private _description: string;
    
    private _resourceURI: string; 
    
    private _thumbnail: Thumbnail;
   
    private _comics: Comic[];
    

    constructor(id: string, name:string, description: string, resourcesURI:string, thumbnail: Thumbnail, comics: Comic[]){
        this._id=id;
        this._name=name;
        this._description = description;
        this._resourceURI = resourcesURI;
        this._thumbnail = thumbnail;
        this._comics = comics;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get resourceURI(): string {
        return this._resourceURI;
    }
    public set resourceURI(value: string) {
        this._resourceURI = value;
    }
    public get thumbnail(): Thumbnail {
        return this._thumbnail;
    }
    public set thumbnail(value: Thumbnail) {
        this._thumbnail = value;
    }
    public get comics(): Comic[] {
        return this._comics;
    }
    public set comics(value: Comic[]) {
        this._comics = value;
    }
}



