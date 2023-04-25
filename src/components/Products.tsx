import { FC } from "react";
import styled from "styled-components";
import { media } from "@/helpers/index";
import ImageFord from "@/assets/images/products/ford-bronco.jpg";
import ImageJeep from "@/assets/images/products/jeep-wrangler.jpg";
import ImageToyota from "@/assets/images/products/toyota-tundra.jpg";
import { Title } from "@/libs/Typography/Title";

const StyledProducts = styled.section`
  display: grid;
  grid-template-areas:
      "card-1"
      "card-2"
      "card-3";
  gap: 24px;
  padding: 0 12px 150px;

  ${media.tablet} {
    padding: 0 64px 150px;
  }

  ${media.laptop} {
    grid-template-areas:
      "card-1 card-1 card-1 card-1 card-1 card-2 card-2 card-2 card-2 card-2 card-2"
      "card-1 card-1 card-1 card-1 card-1 card-3 card-3 card-3 card-3 card-3 card-3";
    padding: 0 24px 150px 50px;
  }

  ${media.desktop} {
    padding: 0 36px 150px 50px;
  }
`;

const StyledProductCard = styled.section<{ type: string }>`
  position: relative;
  grid-area: ${({ type }) => 
    type === "toyota" 
      ? "card-1" 
      : type === "ford" 
      ? "card-2" 
      : "card-3"
  };
  min-height: 400px;
  max-height: 400px;

  ${media.laptop} {
    min-height: auto;
    max-height: initial;
  }
`;

const StyledProductCardImgWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledProductTitle = styled(Title)`
  position: absolute;
  left: 18px;
  bottom: 32px;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;

  ${media.desktop} {
    font-size: 40px;
    line-height: 48px;
    bottom: 36px;
  }
`;

const products = [
  {
    id: 1,
    img: {
      src: ImageFord.src,
      alt: "ford bronco",
    },
    type: "ford",
    title: "Bronco",
  },
  {
    id: 2,
    img: {
      src: ImageToyota.src,
      alt: "toyota tundra",
    },
    type: "toyota",
    title: "Toyota",
  },
  {
    id: 3,
    img: {
      src: ImageJeep.src,
      alt: "jeep wrangler",
    },
    type: "jeep",
    title: "Jeep",
  },
];

const Products: FC = (): JSX.Element => {
  return (
    <StyledProducts>
      { 
        products.map(product => (
          <StyledProductCard key={product.id} type={product.type}>
            <StyledProductCardImgWrapper>
              <StyledImage src={product.img.src} alt={product.img.alt} />
            </StyledProductCardImgWrapper>
            <StyledProductTitle tag="h2" weight={900} color="white">{ product.title }</StyledProductTitle>
          </StyledProductCard>
        ))
      }
    </StyledProducts>
  );
};

export default Products;
