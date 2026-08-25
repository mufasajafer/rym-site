export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  tag: string;
  description: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Chrome Aviator',
    category: 'Men',
    price: '₹1,299',
    tag: 'New Drop',
    description: 'A modern take on the classic aviator. Featuring lightweight metal frames with a sleek chrome finish and UV-protected tinted lenses. Perfect for long drives and sun-drenched afternoons.',
    images: [
      'https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/1362556/pexels-photo-1362556.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/2034444/pexels-photo-2034444.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
  },
  {
    id: '2',
    name: 'Retro Square',
    category: 'Unisex',
    price: '₹1,099',
    tag: '4 Left',
    description: 'Vintage-inspired thick acetate frames with a sharp square silhouette. These shades bring a bold, statement-making energy to any outfit, whether you\'re at a cafe or a festival.',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/701876/pexels-photo-701876.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/2944473/pexels-photo-2944473.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
  },
  {
    id: '3',
    name: 'Old Money Oval',
    category: 'Women',
    price: '₹1,499',
    tag: 'Best Seller',
    description: 'Sleek, minimalist, and undeniably chic. The Old Money Oval frames feature a slender profile and premium tortoiseshell detailing. Effortless elegance for the modern muse.',
    images: [
      'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/1148956/pexels-photo-1148956.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/2816900/pexels-photo-2816900.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
  },
  {
    id: '4',
    name: 'Cartier Slim',
    category: 'Men',
    price: '₹1,799',
    tag: '2 Left',
    description: 'Rimless aesthetics meet industrial design. The Cartier Slim frames are ultra-lightweight, featuring gold-tone hardware and gradient lenses. For those who appreciate the finer details.',
    images: [
      'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/3622610/pexels-photo-3622610.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      'https://images.pexels.com/photos/1013444/pexels-photo-1013444.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop'
    ],
  },
];
