import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryItemContainer,
} from "./directory-item.styles";
import { CategoryData } from "../directory/directory.component";
import { FC } from "react";

type DirectoryItemProps = {
  category: CategoryData;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  );
};

export default DirectoryItem;
