import {GET} from "./axios";


export enum EApiStatus  {
    initial,
    loading,
    error,
    ready
}
export abstract class Model {

    abstract url: string
    protected readonly id: string
    protected constructor(id: string) {
        this.id = id
    }

    static filter(args:object) {
        this.
    }
}

class User extends Model {
    url = 'users'
    name: string
    constructor(id: string, name: string) {
        super(id);
        this.name = name
    }
}
























