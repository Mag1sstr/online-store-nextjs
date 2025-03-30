export interface IProducts {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
  images: string[];
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  image: string;
}
