import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/lib/data';

interface SimilarPropertiesProps {
  properties: any[];
  locale: string;
  currencyCode: string;
  dictionary: any;
}

export function SimilarProperties({ properties, locale, currencyCode, dictionary }: SimilarPropertiesProps) {
  if (!properties || properties.length === 0) {
    return null;
  }

  return (
    <div className="bg-card border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{dictionary.title}</h3>
      
      <div className="space-y-4">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/${locale}/properties/${property.id}`}
            className="flex items-center space-x-3 hover:bg-muted p-2 rounded-md transition-colors"
          >
            <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={property.photos[0]?.url || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80'}
                alt={property.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            
            <div className="flex-grow min-w-0">
              <h4 className="font-medium text-sm truncate">{property.name}</h4>
              <p className="text-primary text-sm font-semibold">
                {formatCurrency(property.price, currencyCode, locale)}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {property.bedrooms} bd • {property.bathrooms} ba • {property.size} sqft
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-4">
        <Link
          href={`/${locale}/properties`}
          className="text-sm text-primary hover:underline block text-center"
        >
          {dictionary.viewMore}
        </Link>
      </div>
    </div>
  );
}