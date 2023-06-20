// models/Property.ts

export interface Property {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  county: string;
  phone: string;
  type: string;
  capacity: number;
  images: string[];
}
