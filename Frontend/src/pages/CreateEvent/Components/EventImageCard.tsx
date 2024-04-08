import React, { useRef, useState, ChangeEvent } from 'react';
import { Card } from '@/components/ui/card';

const defaultImageUrl = 'https://source.unsplash.com/random/200x200';

export default function EventImageCard() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(defaultImageUrl);

  const handleImageInput = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageSrc(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClickCard = () => {
    inputFileRef.current?.click();
  };

  return (
    <Card  className=' max-w-[250px]  rounded-lg' onClick={handleClickCard}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageInput}
        ref={inputFileRef}
        style={{ display: 'none' }} // Hide the input element visually
      />
      <img src={imageSrc || defaultImageUrl} className='rounded-lg object-fit' alt="Uploaded" />
    </Card>
  );
}
