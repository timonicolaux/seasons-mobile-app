interface Month {
  id: number;
  name: string;
}

interface MonthList {
  month_list: Month[];
}

interface Product {
  id: number;
  name: string;
  image_link: string;
  category: string;
}

interface ProductList {
  title: string;
  data: Product[];
  backgroundImage: any;
  monthDetailLoading: boolean;
  monthDetailError: Error | null;
}

interface ProductCategories {
  [category: string]: Product[];
}

interface MonthDetail {
  id: number;
  name: string;
  products: { categories: ProductCategories };
}

interface MonthDetailResponse {
  month_detail: MonthDetail;
}
