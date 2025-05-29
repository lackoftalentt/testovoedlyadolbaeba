export interface PersonDetail {
    uid: string;
    description: string;
    _id: string;
    __v: number;
    properties: {
        created: string;
        edited: string;
        name: string;
        gender: string;
        skin_color: string;
        hair_color: string;
        height: string;
        eye_color: string;
        mass: string;
        homeworld: string;
        birth_year: string;
        url: string;
    };
}

type PropertyKey = keyof PersonDetail['properties'];

export interface PropertyItem {
    label: string;
    key: PropertyKey;
    unit?: string;
}