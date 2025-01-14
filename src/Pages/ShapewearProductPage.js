import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Div,
  PrimaryDiv,
  ImgLarge,
  Location,
  Title,
  Paragraph,
  BuyButton,
  Price,
  ColorButton,
  ColorButtonWrapper,
  SizeButton,
  SizeButtonWrapper,
  QuantityWrapper,
  QuantityButton,
  QuantityDisplay,
  OutOfStockMessage,
  ModalOverlay,
  CloseButton,
  ModalContent,
  A,
} from "../Styles/ShapewearProductPageStyle";
import { useParams } from "react-router-dom";
import { FetchImageFolders } from "../Components/FetchImageFolders";
import { useFirebaseData } from "../App";
import Carousel from "react-multi-carousel";

const ShapewearProductPage = () => {
  const { foldername } = useParams();
  const [folder, setFolder] = useState([]);
  const [colors, setColors] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState(0);
  const carouselRef = useRef(null);
  const firebaseData = useFirebaseData();
  const [firebaseFolderData, setFirebaseFolderData] = useState();
  const [activeColor, setActiveColor] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const [outOfStock, setOutOfStock] = useState(false);
  const [sizeChart, setSizeChart] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  useEffect(() => {
    const fetchData = async () => {
      const folderData = await FetchImageFolders("Shapewear");
      const folder = folderData.find((f) => f.folderName === foldername);
      setFolder(folder);

      if (firebaseData && foldername) {
        setFirebaseFolderData(firebaseData[foldername]);
      }
    };

    fetchData();
  }, [foldername, firebaseData]);

  useEffect(() => {
    if (firebaseFolderData?.Colors) {
      setColors(
        firebaseFolderData["Colors"].split(",").map((color) => color.trim()),
      );
    }
  }, [firebaseFolderData]);

  useEffect(() => {
    if (colors.length) {
      setActiveColor(colors[0]);
    }
  }, [colors]);

  useEffect(() => {
    if (folder?.images && activeColor) {
      const matchingImages = folder.images.filter(
        (img) =>
          typeof img.url === "string" &&
          img.url.toLowerCase().includes(activeColor.toLowerCase()),
      );
      setFilteredImages(matchingImages);
    } else {
      setFilteredImages([]);
    }

    if (folder?.images) {
      const chart = folder.images.filter(
        (img) =>
          typeof img.url === "string" && img.url.toLowerCase().includes("size"),
      );
      setSizeChart(chart[0].url);
    }
  }, [folder, activeColor]);

  useEffect(() => {
    if (firebaseFolderData && firebaseFolderData[activeColor]) {
      const colorSizes = Object.keys(firebaseFolderData[activeColor]);
      const sortedSizes = colorSizes.sort((a, b) => {
        const indexA = sizeOrder.indexOf(a);
        const indexB = sizeOrder.indexOf(b);
        return (
          (indexA === -1 ? Infinity : indexA) -
          (indexB === -1 ? Infinity : indexB)
        );
      });
      setSizes(sortedSizes);
      setActiveSize(sortedSizes[0]);
      setMaxQuantity(firebaseFolderData[activeColor][sortedSizes[0]]);
    }
  }, [firebaseFolderData, activeColor]);

  useEffect(() => {
    if (firebaseFolderData && firebaseFolderData[activeColor]) {
      setMaxQuantity(firebaseFolderData[activeColor][activeSize] || 0);
      setQuantity(0);
    }
  }, [activeSize]);

  const handleColorClick = (color) => {
    setActiveColor(color);
    carouselRef.current?.goToSlide(0);
    setOutOfStock(false);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
    const stock = firebaseFolderData[activeColor][size];
    setOutOfStock(stock === 0);
  };

  const increaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChartOpen = () => {
    setIsModalOpen(true);
  };

  const handleSizeChartClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Location>
        <a href={"/"}>Home </a> ><a href={"/shapewear"}> Shapewear</a> >{" "}
        {foldername}
      </Location>
      <PrimaryDiv>
        <Div>
          {filteredImages.length > 0 ? (
            <Carousel
              responsive={responsive}
              arrows={true}
              ref={carouselRef}
              containerClass="bridal-folder-carousel"
              itemClass="bridal-folder-carousel-item"
              customTransition="transform 500ms ease-in-out"
              transitionDuration={500}
            >
              {filteredImages.map((img, index) => (
                <ImgLarge
                  key={index}
                  src={img.url}
                  alt={img.alt || `Product ${index}`}
                />
              ))}
            </Carousel>
          ) : (
            <Paragraph>No images available for {activeColor}</Paragraph>
          )}

          <Paragraph>
            Color <span style={{ marginLeft: "3px" }}>{activeColor}</span>{" "}
          </Paragraph>
          <ColorButtonWrapper>
            {colors.map((color, index) => (
              <ColorButton
                key={index}
                onClick={() => handleColorClick(color)}
                style={{
                  backgroundColor: color.toLowerCase(),
                  border:
                    activeColor === color ? "2px solid #000" : "1px solid #ccc",
                }}
                title={color}
              />
            ))}
          </ColorButtonWrapper>

          <Paragraph
            style={{
              width: "100%",
              borderBottom: "1.5px #ad9e75 solid",
              paddingBottom: "0.5rem",
              marginBottom: ".8rem",
            }}
          >
            <div
              style={{
                display: "flex",
                fontWeight: "lighter",
              }}
            >
              Size <span style={{ paddingLeft: "10px" }}>{activeSize}</span>
              {sizeChart && (
                <A href="#" onClick={handleSizeChartOpen}>
                  Size Chart
                </A>
              )}
            </div>
          </Paragraph>

          {isModalOpen && (
            <ModalOverlay onClick={handleSizeChartClose}>
              <ModalContent>
                <CloseButton onClick={handleSizeChartClose}>✕</CloseButton>
                <img
                  src={sizeChart}
                  alt="Size Chart"
                  style={{ width: "100%", height: "100%" }}
                />
              </ModalContent>
            </ModalOverlay>
          )}
          <SizeButtonWrapper>
            {sizes.map((size, index) => {
              const isOutOfStock = firebaseFolderData[activeColor][size] === 0;
              return (
                <SizeButton
                  key={index}
                  onClick={() => handleSizeClick(size)}
                  style={{
                    backgroundColor: activeSize === size ? "#000" : "#fff",
                    color: activeSize === size ? "#fff" : "#000",
                    position: "relative",
                  }}
                >
                  {size}
                  {isOutOfStock && (
                    <span
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        color: "red",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "25px",
                        overflow: "hidden",
                      }}
                    >
                      ✕
                    </span>
                  )}
                </SizeButton>
              );
            })}
          </SizeButtonWrapper>

          {outOfStock && <OutOfStockMessage>Out of Stock</OutOfStockMessage>}

          <div style={{ paddingTop: "1rem", color: "#ad9e75" }}>
            Product No. {foldername}
          </div>
        </Div>

        <Div>
          <Title>{firebaseFolderData?.Name || "Loading..."}</Title>
          <Price>${firebaseFolderData?.Price || "N/A"}</Price>
          <Paragraph>
            {firebaseFolderData?.Description1 || "Loading..."}
          </Paragraph>
          <Paragraph>
            {firebaseFolderData?.Description2 || "Loading..."}
          </Paragraph>
          <Paragraph>{firebaseFolderData?.Features || "Loading..."}</Paragraph>
          <Div style={{ flexDirection: "row" }}>
            <QuantityWrapper>
              <QuantityButton
                onClick={decreaseQuantity}
                disabled={quantity === 0}
              >
                -
              </QuantityButton>
              <QuantityDisplay>{quantity}</QuantityDisplay>
              <QuantityButton
                onClick={increaseQuantity}
                disabled={quantity >= maxQuantity}
              >
                +
              </QuantityButton>
            </QuantityWrapper>
            <BuyButton disabled={!activeSize || quantity === 0}>
              {!activeSize ? "SELECT SIZE" : "ADD TO CART"}
            </BuyButton>
          </Div>
        </Div>
      </PrimaryDiv>
    </Container>
  );
};

export default ShapewearProductPage;
