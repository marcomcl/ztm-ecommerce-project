import { Link } from "react-router-dom";

import {
  CategoryPreviewContainer,
  Preview,
  CategoryPreviewTitle,
} from "./category-preview.styles";

import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryPreviewTitle>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </CategoryPreviewTitle>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
