'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Phone } from 'lucide-react';

interface PropertyContactProps {
  property: any;
  dictionary: any;
}

export function PropertyContact({ property, dictionary }: PropertyContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the contact request to the backend
    console.log({ name, email, phone, message, propertyId: property.id });
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    // Show success message
    alert('Message sent successfully!');
  };

  return (
    <div className="bg-card border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{dictionary.title}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder={dictionary.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder={dictionary.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder={dictionary.phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        
        <div>
          <Textarea
            placeholder={dictionary.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
          />
        </div>
        
        <Button type="submit" className="w-full">
          {dictionary.send}
        </Button>
      </form>
      
      <div className="mt-6 space-y-4">
        <Button variant="outline" className="w-full flex items-center justify-center">
          <Calendar className="mr-2 h-4 w-4" />
          {dictionary.schedule}
        </Button>
        
        <Button variant="outline" className="w-full flex items-center justify-center">
          <Phone className="mr-2 h-4 w-4" />
          {dictionary.call}
        </Button>
      </div>
    </div>
  );
}