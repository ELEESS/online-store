import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name:'Fridge'},
            {id:3, name:'Chocolate'},
            {id:4, name:'Apples'},
            {id:5, name:'Food'},
            

        ]
        this._brands = [
            {id:1, name: "LG"},
            {id:2, name: "Nestlea"},
            {id:3, name: "Danone"},
            {id:4, name: "Kraft"},

        ]
        this._devices = [
            {id:1, name:"Филе Куриное", price: 450, rating: 5, img: `https://static1-repo.aif.ru/1/46/1197540/c/b121d03466316db11a433bac89e4a3c2.jpg`},
            {id:2, name:"Филе Куриное", price: 450, rating: 5, img: `https://static1-repo.aif.ru/1/46/1197540/c/b121d03466316db11a433bac89e4a3c2.jpg`},
            {id:3, name:"Филе Куриное", price: 450, rating: 5, img: `https://static1-repo.aif.ru/1/46/1197540/c/b121d03466316db11a433bac89e4a3c2.jpg`},
            {id:4, name:"Филе Куриное", price: 450, rating: 5, img: `https://static1-repo.aif.ru/1/46/1197540/c/b121d03466316db11a433bac89e4a3c2.jpg`},
            {id:5, name:"Филе Куриное", price: 450, rating: 5, img: `https://static1-repo.aif.ru/1/46/1197540/c/b121d03466316db11a433bac89e4a3c2.jpg`},
            {id:6, name:"Филе Куриное", price: 450, rating: 5, img: `https://static1-repo.aif.ru/1/46/1197540/c/b121d03466316db11a433bac89e4a3c2.jpg`},


        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }


    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}