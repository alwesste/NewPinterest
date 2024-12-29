export interface Cat {
  id?: string | undefined;
  url?: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
  breeds?: Breed[];
}

export interface Breed {
  id?: string | undefined;
  name?: string | undefined;
  temperament?: string | undefined;
  origin?: string | undefined;
  life_span?: string | undefined;
  description?: string | undefined;
  hypoallergenic?: string | undefined;
  reference_image_id?: string | undefined;
}
