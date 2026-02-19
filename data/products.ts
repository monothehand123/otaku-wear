import { Product } from '@/store/cart'

export const products: Product[] = [
  {
    id: '1',
    name: 'Cyber Samurai Tee',
    price: 45,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Premium cotton tee featuring anime-inspired cyber samurai artwork. Heavyweight fabric for lasting quality.'
  },
  {
    id: '2',
    name: 'Neon District Hoodie',
    price: 89,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Oversized hoodie with neon cityscape graphic. Fleece lined for ultimate comfort.'
  },
  {
    id: '3',
    name: 'Akira Red Jacket',
    price: 129,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    category: 'Jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Bom varsity jacket with classic anime aesthetic. Perfect for layering.'
  },
  {
    id: '4',
    name: 'Otaku Overload Tee',
    price: 39,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Relaxed fit tee with retro anime print. Soft ring-spun cotton.'
  },
  {
    id: '5',
    name: 'Mech Warrior Cargo',
    price: 79,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop',
    category: 'Pants',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Utility cargo pants with anime mech details. Multiple pockets for functionality.'
  },
  {
    id: '6',
    name: 'Dragon Spirit Windbreaker',
    price: 99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop',
    category: 'Jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight windbreaker with dragon embroidered design. Water resistant.'
  },
  {
    id: '7',
    name: 'Pixel Pastel Hoodie',
    price: 85,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Soft pastel colored hoodie with pixel art pattern. Ultra soft fleece interior.'
  },
  {
    id: '8',
    name: 'Samurai Crest Cap',
    price: 35,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop',
    category: 'Accessories',
    sizes: ['One Size'],
    description: 'Adjustable snapback with embroidered samurai crest. Classic 6-panel design.'
  },
  {
    id: '9',
    name: 'Hollow Mask Tee',
    price: 42,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop',
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Premium black tee with bleach wash effect mask design.'
  },
  {
    id: '10',
    name: 'Ninja Shadow Joggers',
    price: 69,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop',
    category: 'Pants',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Elastic joggers with ninja strap details. Perfect for everyday wear.'
  },
  {
    id: '11',
    name: 'Mecha Glitch Tee',
    price: 44,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop',
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Black tee with glitch art mecha design. Heavyweight cotton.'
  },
  {
    id: '12',
    name: 'Spirit Hood Oversize',
    price: 95,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop',
    category: 'Hoodies',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Extra oversized hoodie with spirit realm graphic. Drop shoulder design.'
  }
]

export const categories = ['All', 'T-Shirts', 'Hoodies', 'Jackets', 'Pants', 'Accessories']
