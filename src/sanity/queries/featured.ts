export const featured = `*[_type == "featured"]{
  ...,
  restaurants[]->{
    ...,
    dishes[]->{
      _id,
      title,
      short_description,
      price,
      image,
    }
  }
}`;
