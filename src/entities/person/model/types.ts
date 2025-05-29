export interface PersonSummary {
    uid: string;
    name: string;
    url: string;
    description?: string;
}

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
export type PersonData = PersonSummary | PersonDetail; 