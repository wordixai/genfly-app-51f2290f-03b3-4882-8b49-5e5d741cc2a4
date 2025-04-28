'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface PropertyReviewsProps {
  propertyId: number;
  dictionary: any;
}

export function PropertyReviews({ propertyId, dictionary }: PropertyReviewsProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showForm, setShowForm] = useState(false);
  
  // Mock reviews data
  const reviews = [
    {
      id: 1,
      userName: 'John Smith',
      rating: 5,
      date: '2023-03-15',
      comment: 'Amazing property! The location is perfect and the amenities are top-notch. Would definitely recommend to anyone looking for a comfortable stay.'
    },
    {
      id: 2,
      userName: 'Sarah Johnson',
      rating: 4,
      date: '2023-02-28',
      comment: 'Great place overall. Clean, spacious, and well-maintained. The only downside was the noise from the street, but that\'s expected in a central location.'
    }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the review to the backend
    console.log({ propertyId, rating, comment });
    // Reset form
    setRating(0);
    setComment('');
    setShowForm(false);
    // Show success message
    alert('Review submitted successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{dictionary.title}</h2>
        <Button onClick={() => setShowForm(!showForm)}>
          {dictionary.writeReview}
        </Button>
      </div>
      
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-card border rounded-lg p-6 space-y-4">
          <div>
            <p className="mb-2">Rating:</p>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <Textarea
              placeholder="Write your review here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              required
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={rating === 0}>
              Submit Review
            </Button>
          </div>
        </form>
      )}
      
      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-card border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{review.userName}</h4>
                <span className="text-sm text-muted-foreground">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">
          {dictionary.noReviews}
        </p>
      )}
    </div>
  );
}