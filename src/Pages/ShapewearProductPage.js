import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Container,
  LeftDiv,
  RightDiv,
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
  Paragraph2,
} from "../Styles/ShapewearProductPageStyle";
import { useLocation, useParams } from "react-router-dom";
import { FetchImageFolders } from "../Components/FetchImageFolders";
import { useFirebaseData } from "../App";
import Carousel from "react-multi-carousel";
import { CartContext } from "../Components/CartContext";

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
  const { addToCart } = useContext(CartContext);
  const [thumbnail, setThumbnail] = useState();
  const location = useLocation().pathname;
  const [errorMessage, setErrorMessage] = useState(""); // ✅ State for error message

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
    if (colors) {
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

      const thum = folder.images.filter(
        (img) =>
          typeof img.url === "string" &&
          img.url.toLowerCase().includes("thumbnail".toLowerCase()),
      );

      setThumbnail(thum[0].url);
      setFilteredImages(matchingImages);
    } else {
      setFilteredImages([]);
    }

    if (folder?.images) {
      const chart = folder.images.filter(
        (img) =>
          typeof img.url === "string" && img.url.toLowerCase().includes("size"),
      );

      setSizeChart(chart[0]?.url);
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

  const handleAddToCart = () => {
    if (quantity < 1) return; // Prevent adding 0 quantity

    // Get current quantity of this item in the cart
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartItems.find(
      (item) => item.id === `${foldername}-${activeColor}-${activeSize}`,
    );
    const existingQuantity = existingItem ? existingItem.quantity : 0;

    // Calculate total if adding
    const newTotalQuantity = existingQuantity + quantity;

    // Prevent exceeding stock
    if (newTotalQuantity > maxQuantity) {
      setErrorMessage(
        `Only ${maxQuantity} in stock! You already have ${existingQuantity} in your cart.`,
      );
      setTimeout(() => setErrorMessage(""), 10000);
      return;
    }

    // Calculate discounted price
    const discountedPrice = firebaseFolderData?.SalePercentage
      ? (
          firebaseFolderData.Price -
          (firebaseFolderData.Price * firebaseFolderData.SalePercentage) / 100
        ).toFixed(2)
      : firebaseFolderData.Price;

    // Reset error message if successful
    setErrorMessage("");

    addToCart({
      id: `${foldername}-${activeColor}-${activeSize}`,
      folderID: foldername,
      name: firebaseFolderData?.Name,
      price: discountedPrice, // Use discounted price
      originalPrice: firebaseFolderData?.Price, // Store original price for display
      salePercentage: firebaseFolderData?.SalePercentage || null, // Store sale percentage
      quantity: quantity,
      maxQuantity: maxQuantity,
      color: activeColor,
      size: activeSize,
      image: thumbnail,
      href: location,
    });
  };

  const colorMap = {
    Black: "#000000",
    White: "#FFFFFF",
    Red: "#FF0000",
    Blue: "#0000FF",
    Green: "#008000",
    Brown: "#8B4513", // Correct brown shade
    Nude: "#F2D2BD", // Proper nude color
    Beige: "#F5F5DC",
    Pink: "#FFC0CB",
    Yellow: "#FFFF00",
    Grey: "#808080",
    Jasper: "#6B6156",
    Cocoa: "#35281E",
  };

  return (
    <Container>
      <Location>
        <a href={"/"}>Home </a> ><a href={"/shapewear"}> Shapewear</a> >{" "}
        {foldername}
      </Location>
      <PrimaryDiv>
        <LeftDiv>
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
        </LeftDiv>

        <RightDiv>
          <Title>{firebaseFolderData?.Name || "Loading..."}</Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {firebaseFolderData?.SalePercentage ? (
              <>
                <Price
                  style={{
                    textDecoration: "line-through",
                    color: "gray",
                    paddingBottom: "0",
                  }}
                >
                  ${firebaseFolderData?.Price || "N/A"}
                </Price>
                <Price style={{ marginTop: "0", fontWeight: "bold" }}>
                  $
                  {(
                    firebaseFolderData?.Price -
                    (firebaseFolderData?.Price *
                      firebaseFolderData?.SalePercentage) /
                      100
                  ).toFixed(2)}
                </Price>
              </>
            ) : (
              <Price>${firebaseFolderData?.Price || "N/A"}</Price>
            )}
          </div>
          <Paragraph>
            {firebaseFolderData?.Description1 || "Loading..."}
          </Paragraph>
          <Paragraph>
            {firebaseFolderData?.Description2 || "Loading..."}
          </Paragraph>
          <Paragraph>{firebaseFolderData?.Features || "Loading..."}</Paragraph>

          <Paragraph2
            style={{
              width: "100%",
              display: "flex",
              paddingTop: "3rem",
            }}
          >
            <div>
              <span style={{ fontWeight: "lighter" }}>Color </span>
              <span style={{ marginLeft: "3px", marginRight: 0 }}>
                {activeColor}
              </span>{" "}
            </div>
          </Paragraph2>

          <ColorButtonWrapper>
            {colors.map((color, index) => (
              <ColorButton
                key={index}
                onClick={() => handleColorClick(color)}
                style={{
                  backgroundColor: colorMap[color] || color.toLowerCase(), // ✅ Use mapped color or fallback
                  border:
                    activeColor === color ? "2px solid #000" : "1px solid #ccc",
                }}
                title={color}
              />
            ))}
          </ColorButtonWrapper>

          <Paragraph2>
            <div
              style={{
                display: "flex",
                fontWeight: "lighter",
                paddingTop: "1rem",
              }}
            >
              Size <span style={{ paddingLeft: "10px" }}>{activeSize}</span>
            </div>
          </Paragraph2>

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

          <div style={{ paddingTop: "1rem" }}>
            {" "}
            {sizeChart && <A onClick={handleSizeChartOpen}>Size Chart</A>}
          </div>

          <RightDiv style={{ paddingTop: "2rem", flexDirection: "row" }}>
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
            <BuyButton
              disabled={!activeSize || quantity === 0}
              onClick={handleAddToCart}
            >
              {!activeSize ? "SELECT SIZE" : "ADD TO CART"}
            </BuyButton>
          </RightDiv>
          {errorMessage && (
            <p style={{ color: "red", paddingBottom: "1rem" }}>
              {errorMessage}
            </p>
          )}
          <div style={{ color: "#ad9e75" }}>Product No. {foldername}</div>
        </RightDiv>
      </PrimaryDiv>
    </Container>
  );
};

export default ShapewearProductPage;
