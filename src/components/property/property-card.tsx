import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/data';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PropertyCardProps {
  property: any;
  locale: string;
  currencyCode: string;
}

export function PropertyCard({ property, locale, currencyCode }: PropertyCardProps) {
  return (
    <Link href={`/${locale}/properties/${property.id}`}>
      <div className="group bg-card border rounded-lg overflow-hidden transition-all hover:shadow-md">
        {/* Property image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={property.photos[0]?.url || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80'}
            alt={property.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <Badge variant={property.status === 'LISTED_FOR_SALE' ? 'default' : 'secondary'}>
              {property.status === 'LISTED_FOR_SALE' ? 'For Sale' : 'For Rent'}
            </Badge>
          </div>
        </div>
        
        {/* Property details */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{property.name}</h3>
            <p className="font-bold text-primary">
              {formatCurrency(property.price, currencyCode, locale)}
            </p>
          </div>
          
          <div className="flex items-center text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <p className="text-sm line-clamp-1">
              {property.address}, {property.city}, {property.state}
            </p>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} bd</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} ba</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.size} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}