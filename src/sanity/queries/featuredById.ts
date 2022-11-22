export const featuredById = `*[_type == "featured" && _id=$id]{
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
    type->{
      name
    }
  }
}`;
