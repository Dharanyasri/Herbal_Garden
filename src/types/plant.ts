// Herbal_Garden/src/types/plant.ts

// This MUST match the IPlant interface in your backend's src/models/Plant.ts
export interface IPlant {
  _id: string; // MongoDB automatically adds this string ID
  name: string;
  scientificName: string;
  image: string;
  category: 'medicinal' | 'culinary' | 'ornamental' | 'other';
  healthBenefits: string[];
  description: string;
  preparations: {
    type: 'tea' | 'tincture' | 'oil' | 'decoction' | 'poultice';
    instructions: string;
  }[];
  // Mongoose timestamps
  createdAt: string; 
  updatedAt: string;
}