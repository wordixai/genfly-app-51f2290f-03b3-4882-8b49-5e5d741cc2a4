import { PropertyCard } from './property-card';

interface PropertyGridProps {
  properties: any[];
  locale: string;
  currencyCode: string;
  emptyMessage: string;
}

export function PropertyGrid({ properties, locale, currencyCode, emptyMessage }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          locale={locale}
          currencyCode={currencyCode}
        />
      ))}
    </div>
  );
}