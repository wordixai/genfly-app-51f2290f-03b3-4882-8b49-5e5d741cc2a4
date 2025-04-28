'use client';

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useI18n } from '@/components/i18n-provider';

interface PropertyFiltersProps {
  dictionary: any;
}

export function PropertyFilters({ dictionary }: PropertyFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { locale } = useI18n();
  
  // Get initial values from URL or use defaults
  const initialPriceRange = [
    parseInt(searchParams.get('minPrice') || '0'),
    parseInt(searchParams.get('maxPrice') || '2000000')
  ];
  
  const initialBedrooms = searchParams.get('bedrooms') || '';
  const initialBathrooms = searchParams.get('bathrooms') || '';
  const initialPropertyType = searchParams.get('type') || '';
  
  // State for filters
  const [priceRange, setPriceRange] = useState<number[]>(initialPriceRange);
  const [bedrooms, setBedrooms] = useState<string>(initialBedrooms);
  const [bathrooms, setBathrooms] = useState<string>(initialBathrooms);
  const [propertyType, setPropertyType] = useState<string>(initialPropertyType);
  const [amenities, setAmenities] = useState<string[]>([]);
  
  const propertyTypes = [
    { value: 'RESIDENTIAL', label: 'Residential' },
    { value: 'COMMERCIAL', label: 'Commercial' },
    { value: 'INDUSTRIAL', label: 'Industrial' },
    { value: 'LAND', label: 'Land' }
  ];
  
  const bedroomOptions = ['1', '2', '3', '4', '5+'];
  const bathroomOptions = ['1', '1.5', '2', '2.5', '3+'];
  
  const amenityOptions = [
    { value: 'wifi', label: 'WiFi' },
    { value: 'parking', label: 'Parking' },
    { value: 'airConditioning', label: 'Air Conditioning' },
    { value: 'balcony', label: 'Balcony' },
    { value: 'petFriendly', label: 'Pet Friendly' }
  ];
  
  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    
    if (priceRange[0] > 0) params.set('minPrice', priceRange[0].toString());
    if (priceRange[1] < 2000000) params.set('maxPrice', priceRange[1].toString());
    if (bedrooms) params.set('bedrooms', bedrooms);
    if (bathrooms) params.set('bathrooms', bathrooms);
    if (propertyType) params.set('type', propertyType);
    if (amenities.length > 0) params.set('amenities', amenities.join(','));
    
    router.push(`${pathname}?${params.toString()}`);
  };
  
  const handleClearFilters = () => {
    setPriceRange([0, 2000000]);
    setBedrooms('');
    setBathrooms('');
    setPropertyType('');
    setAmenities([]);
    router.push(pathname);
  };

  return (
    <div className="bg-card border rounded-lg p-6 space-y-6">
      <h3 className="font-semibold text-lg">{dictionary.title}</h3>
      
      {/* Property Type */}
      <div>
        <h4 className="font-medium mb-2">{dictionary.propertyType}</h4>
        <div className="space-y-2">
          {propertyTypes.map((type) => (
            <div key={type.value} className="flex items-center">
              <input
                type="radio"
                id={`type-${type.value}`}
                name="propertyType"
                value={type.value}
                checked={propertyType === type.value}
                onChange={(e) => setPropertyType(e.target.value)}
                className="mr-2"
              />
              <Label htmlFor={`type-${type.value}`}>{type.label}</Label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Range */}
      <div>
        <h4 className="font-medium mb-2">{dictionary.priceRange}</h4>
        <Slider
          defaultValue={priceRange}
          min={0}
          max={2000000}
          step={10000}
          onValueChange={setPriceRange}
          className="my-6"
        />
        <div className="flex justify-between text-sm">
          <span>${priceRange[0].toLocaleString()}</span>
          <span>${priceRange[1].toLocaleString()}</span>
        </div>
      </div>
      
      {/* Bedrooms */}
      <div>
        <h4 className="font-medium mb-2">{dictionary.bedrooms}</h4>
        <div className="flex flex-wrap gap-2">
          {bedroomOptions.map((option) => (
            <Button
              key={option}
              variant={bedrooms === option ? "default" : "outline"}
              size="sm"
              onClick={() => setBedrooms(bedrooms === option ? '' : option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Bathrooms */}
      <div>
        <h4 className="font-medium mb-2">{dictionary.bathrooms}</h4>
        <div className="flex flex-wrap gap-2">
          {bathroomOptions.map((option) => (
            <Button
              key={option}
              variant={bathrooms === option ? "default" : "outline"}
              size="sm"
              onClick={() => setBathrooms(bathrooms === option ? '' : option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Amenities */}
      <div>
        <h4 className="font-medium mb-2">{dictionary.amenities}</h4>
        <div className="space-y-2">
          {amenityOptions.map((amenity) => (
            <div key={amenity.value} className="flex items-center">
              <Checkbox
                id={`amenity-${amenity.value}`}
                checked={amenities.includes(amenity.value)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setAmenities([...amenities, amenity.value]);
                  } else {
                    setAmenities(amenities.filter(a => a !== amenity.value));
                  }
                }}
                className="mr-2"
              />
              <Label htmlFor={`amenity-${amenity.value}`}>{amenity.label}</Label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex flex-col space-y-2">
        <Button onClick={handleApplyFilters}>{dictionary.apply}</Button>
        <Button variant="outline" onClick={handleClearFilters}>{dictionary.clear}</Button>
      </div>
    </div>
  );
}