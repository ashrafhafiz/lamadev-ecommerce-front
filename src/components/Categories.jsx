import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </Container>
  );
};

export default Categories;
