interface PropertyLocationProps {
  property: any;
  dictionary: any;
}

export function PropertyLocation({ property, dictionary }: PropertyLocationProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{dictionary.title}</h2>
      
      <div className="bg-muted h-[300px] rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Map view would be displayed here</p>
      </div>
      
      <div className="mt-4">
        <h3 className="font-semibold mb-2">{dictionary.address}</h3>
        <p>
          {property.address}, {property.city}, {property.state} {property.zipCode}, {property.country}
        </p>
      </div>
      
      {property.locationAmenities && property.locationAmenities.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">{dictionary.nearby}</h3>
          <div className="grid grid-cols-2 gap-2">
            {property.locationAmenities.map((amenity: string) => (
              <div key={amenity} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}