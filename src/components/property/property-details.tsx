import { formatCurrency } from '@/lib/data';
import { Bed, Bath, Square, Calendar, Home, Tag } from 'lucide-react';

interface PropertyDetailsProps {
  property: any;
  locale: string;
  currencyCode: string;
  dictionary: any;
}

export function PropertyDetails({ property, locale, currencyCode, dictionary }: PropertyDetailsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{dictionary.overview}</h2>
      
      {/* Key details */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <Tag className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">{dictionary.price}</p>
            <p className="font-semibold">{formatCurrency(property.price, currencyCode, locale)}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Bed className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">{dictionary.bedrooms}</p>
            <p className="font-semibold">{property.bedrooms}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Bath className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">{dictionary.bathrooms}</p>
            <p className="font-semibold">{property.bathrooms}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Square className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">{dictionary.size}</p>
            <p className="font-semibold">{property.size} sqft</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">{dictionary.yearBuilt}</p>
            <p className="font-semibold">{property.yearBuilt}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Home className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">{dictionary.propertyType}</p>
            <p className="font-semibold">{property.type}</p>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div>
        <h3 className="text-xl font-semibold mb-2">{dictionary.description}</h3>
        <p className="text-muted-foreground">{property.description}</p>
      </div>
      
      {/* Features */}
      <div>
        <h3 className="text-xl font-semibold mb-2">{dictionary.features}</h3>
        <ul className="grid grid-cols-2 gap-2">
          {property.amenities.map((amenity: string) => (
            <li key={amenity} className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}