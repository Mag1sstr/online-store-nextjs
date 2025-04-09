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

export interface ICart extends IProducts {
  count: number;
}

export interface IAuth {
  access_token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface IRegBody {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
