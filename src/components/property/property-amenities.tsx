interface PropertyAmenitiesProps {
  amenities: string[];
  dictionary: any;
}

export function PropertyAmenities({ amenities, dictionary }: PropertyAmenitiesProps) {
  if (!amenities || amenities.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{dictionary.title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <span className="text-primary text-lg">✓</span>
            </div>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}