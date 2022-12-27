export const hundredPaintings = (page: number) =>
  `https://api.artic.edu/api/v1/artworks?limit=100&page=${page}&fields=id,title,image_id,artist_title,style_title`;

export const imageAddress = (image_id: string) => {
  return `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
};
