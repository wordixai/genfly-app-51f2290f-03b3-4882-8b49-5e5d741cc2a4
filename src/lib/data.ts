// Mock data for the application
// In a real application, this would be replaced with API calls to your backend

import { PropertyType, PropertyStatus, PropertyAmenities, LocationAmenities } from '@prisma/client';

// Mock property data
export async function getFeaturedProperties() {
  return [
    {
      id: 1,
      name: "Luxury Villa with Pool",
      address: "123 Palm Avenue",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      country: "USA",
      price: 1250000,
      type: PropertyType.RESIDENTIAL,
      status: PropertyStatus.LISTED_FOR_SALE,
      bedrooms: 4,
      bathrooms: 3.5,
      size: 3200,
      yearBuilt: 2018,
      description: "Beautiful luxury villa with private pool and garden",
      amenities: [
        PropertyAmenities.wifi,
        PropertyAmenities.parking,
        PropertyAmenities.airConditioning,
        PropertyAmenities.balcony,
        PropertyAmenities.kitchen
      ],
      photos: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
          description: "Front view"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          description: "Living room"
        }
      ]
    },
    {
      id: 2,
      name: "Modern Downtown Apartment",
      address: "456 Urban Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
      price: 850000,
      type: PropertyType.RESIDENTIAL,
      status: PropertyStatus.LISTED_FOR_SALE,
      bedrooms: 2,
      bathrooms: 2,
      size: 1200,
      yearBuilt: 2020,
      description: "Sleek modern apartment in the heart of downtown",
      amenities: [
        PropertyAmenities.wifi,
        PropertyAmenities.elevator,
        PropertyAmenities.airConditioning,
        PropertyAmenities.workspace
      ],
      photos: [
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          description: "Living area"
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          description: "Kitchen"
        }
      ]
    },
    {
      id: 3,
      name: "Cozy Suburban Home",
      address: "789 Maple Drive",
      city: "Chicago",
      state: "IL",
      zipCode: "60007",
      country: "USA",
      price: 450000,
      type: PropertyType.RESIDENTIAL,
      status: PropertyStatus.LISTED_FOR_SALE,
      bedrooms: 3,
      bathrooms: 2,
      size: 1800,
      yearBuilt: 2005,
      description: "Charming family home in a quiet suburban neighborhood",
      amenities: [
        PropertyAmenities.parking,
        PropertyAmenities.heating,
        PropertyAmenities.washer,
        PropertyAmenities.dryer
      ],
      photos: [
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          description: "House exterior"
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
          description: "Dining area"
        }
      ]
    }
  ];
}

export async function getProperties(filters: any = {}) {
  const featuredProperties = await getFeaturedProperties();
  
  // Add more properties for the properties page
  const additionalProperties = [
    {
      id: 4,
      name: "Waterfront Condo",
      address: "101 Ocean Drive",
      city: "San Diego",
      state: "CA",
      zipCode: "92101",
      country: "USA",
      price: 750000,
      type: PropertyType.RESIDENTIAL,
      status: PropertyStatus.LISTED_FOR_SALE,
      bedrooms: 2,
      bathrooms: 2,
      size: 1500,
      yearBuilt: 2015,
      description: "Beautiful condo with ocean views",
      amenities: [
        PropertyAmenities.wifi,
        PropertyAmenities.parking,
        PropertyAmenities.airConditioning,
        PropertyAmenities.balcony
      ],
      photos: [
        {
          id: 7,
          url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          description: "Building exterior"
        }
      ]
    },
    {
      id: 5,
      name: "Mountain Retreat",
      address: "222 Pine Road",
      city: "Denver",
      state: "CO",
      zipCode: "80202",
      country: "USA",
      price: 950000,
      type: PropertyType.RESIDENTIAL,
      status: PropertyStatus.LISTED_FOR_SALE,
      bedrooms: 4,
      bathrooms: 3,
      size: 2800,
      yearBuilt: 2010,
      description: "Spacious home with mountain views",
      amenities: [
        PropertyAmenities.fireplace,
        PropertyAmenities.heating,
        PropertyAmenities.parking,
        PropertyAmenities.washer,
        PropertyAmenities.dryer
      ],
      photos: [
        {
          id: 8,
          url: "https://images.unsplash.com/photo-1542889601-399c4f3a8402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          description: "House exterior"
        }
      ]
    }
  ];
  
  return [...featuredProperties, ...additionalProperties];
}

export async function getPropertyById(id: number) {
  const allProperties = await getProperties();
  return allProperties.find(property => property.id === id);
}

export async function getSimilarProperties(property: any) {
  const allProperties = await getProperties();
  return allProperties
    .filter(p => p.id !== property.id && p.type === property.type)
    .slice(0, 3);
}

// Mock currency conversion rates
export const currencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.50,
  AED: 3.67
};

export function convertCurrency(amount: number, fromCurrency: string, toCurrency: string) {
  const fromRate = currencyRates[fromCurrency as keyof typeof currencyRates] || 1;
  const toRate = currencyRates[toCurrency as keyof typeof currencyRates] || 1;
  
  return (amount / fromRate) * toRate;
}

export function formatCurrency(amount: number, currencyCode: string, locale: string = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0
  }).format(amount);
}