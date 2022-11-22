import { FC } from "react";
import { ScrollView } from "react-native";
import { CategoriesCard } from "./CategoriesCard";
import { useFetch } from "@hooks";
import { categories as categoriesQuery } from "@schemas/queries";
import { Loading } from "../Loading";
import { ErrorWrapper } from "../ErrorWrapper";
import { urlFor } from "@helpers/sanity";
import { Category } from "./types";
const Categories: FC = () => {
  const { loading, error, data } = useFetch<Category[]>("sanity", categoriesQuery);

  if (loading) return <Loading text={"Loading..."} />;
  if (error) return <ErrorWrapper error={error} />;
  return (
    <ScrollView
      className="flex flex-row"
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* CategoryCard */}
      {data &&
        data.map((category: Category) => (
          <CategoriesCard url={urlFor(category.image).url()} title={category.title} key={category._id} />
        ))}
    </ScrollView>
  );
};

export { Categories };
