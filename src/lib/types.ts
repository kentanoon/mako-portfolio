export type PhotoCategory = "studio" | "street";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: PhotoCategory;
  location?: string;
  year?: number;
}

export interface Award {
  id: string;
  title: string;
  event: string;
  year: number;
}
