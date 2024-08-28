// https://surfwear.sooruz.com/

// types here are a work around as not calling data from an API (otherwise this would be in the context file)

export type OptionsType = {
    option: string,
    stock: number,
}

export interface productObject {
    id: number,
    item: string,
    price: number,
    picturePath: string,
    alt: string,
    desc: string,
    optionType: string,
    options: OptionsType[]
}

export const wetsuitsArray: productObject[] = [
    {
        id: 1,
        item: "Fighter 5/4/3MM Blue",
        price: 299.95,
        picturePath: "/productpics/wetsuits/Fighter53Blue.png",
        alt: "Fighter 5/4/3MM Blue Wetsuit",
        desc: "Oysterprene wetsuits chest zip",
        optionType: "Size",
        options: [
            {
                option: "S",
                stock: 4,
            },
            {
                option: "M",
                stock: 5,
            },
            {
                option: "L",
                stock: 0,
            },
            {
                option: "XL",
                stock: 6,
            },
        ]
    },
    {
        id: 2,
        item: "Fighter 5/4/3MM Black",
        price: 299.95,
        picturePath: "/productpics/wetsuits/Fighter53Black.png",
        alt: "Fighter 5/4/3MM Black Wetsuit",
        desc: "Oysterprene wetsuits chest zip",
        optionType: "Size",
        options: [
            {
                option: "S",
                stock: 0,
            },
            {
                option: "M",
                stock: 8,
            },
            {
                option: "L",
                stock: 4,
            },
            {
                option: "XL",
                stock: 2,
            },
        ]
    },
    {
        id: 3,
        item: "Fighter 4/3MM Blue",
        price: 295.95,
        picturePath: "/productpics/wetsuits/Fighter43Blue.png",
        alt: "Fighter 4/3MM Blue Wetsuit",
        desc: "Oysterprene wetsuits chest zip",
        optionType: "Size",
        options: [
            {
                option: "S",
                stock: 4,
            },
            {
                option: "M",
                stock: 5,
            },
            {
                option: "L",
                stock: 0,
            },
            {
                option: "XL",
                stock: 0,
            },
        ]
    },
    {
        id: 4,
        item: "Fighter 4/3MM Black",
        price: 295.95,
        picturePath: "/productpics/wetsuits/Fighter43Black.png",
        alt: "Fighter 4/3MM Black Wetsuit",
        desc: "Oysterprene wetsuits chest zip",
        optionType: "Size",
        options: [
            {
                option: "S",
                stock: 3,
            },
            {
                option: "M",
                stock: 4,
            },
            {
                option: "L",
                stock: 5,
            },
            {
                option: "XL",
                stock: 1,
            },
        ]
    },
    {
        id: 5,
        item: "Fighter 3/2MM Blue",
        price: 289.95,
        picturePath: "/productpics/wetsuits/Fighter32Blue.png",
        alt: "Fighter 3/2MM Blue Wetsuit",
        desc: "Oysterprene wetsuits chest zip",
        optionType: "Size",
        options: [
            {
                option: "S",
                stock: 9,
            },
            {
                option: "M",
                stock: 9,
            },
            {
                option: "L",
                stock: 3,
            },
            {
                option: "XL",
                stock: 7,
            },
        ]
    },
    {
        id: 6,
        item: "Fighter 3/2MM Black",
        price: 289.95,
        picturePath: "/productpics/wetsuits/Fighter32Black.png",
        alt: "Fighter 3/2MM Black Wetsuit",
        desc: "Oysterprene wetsuits chest zip",
        optionType: "Size",
        options: [
            {
                option: "S",
                stock: 4,
            },
            {
                option: "M",
                stock: 6,
            },
            {
                option: "L",
                stock: 5,
            },
            {
                option: "XL",
                stock: 2,
            },
        ]
    },  
]