import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FetchImageFolders } from "../Components/FetchImageFolders";
import {
  ImgLarge,
  Div,
  ImgSmall,
  Location,
} from "../Styles/BridalFolderStyles";
import { Title, Container, Paragraph } from "../Styles/PagesStyle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Papa from "papaparse";
import { FormButton } from "../Styles/FormStyles";
import Error from "../Pages/Error"; // Import your ErrorPage component

const BridalFolderPage = () => {
  const { foldername } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [csv, setCsv] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const foldersData = await FetchImageFolders("Bridal");
      const folder = foldersData.find((f) => f.folderName === foldername);
      if (folder) {
        const newImages = [];
        let csvFile = null;

        for (let i = 0; i < folder.images.length; i++) {
          if (folder.images[i].url.includes("csv")) {
            csvFile = folder.images[i].url;
          } else {
            newImages.push(folder.images[i]);
          }
        }

        setImages(newImages);
        setCsv(csvFile);
      } else {
        // No matching folder found, images remain empty
      }
      setLoading(false);
    };

    fetchData();
  }, [foldername]);

  useEffect(() => {
    const fetchCsvContent = async () => {
      if (!csv) return;

      try {
        const response = await fetch(csv);
        const csvText = await response.text();

        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        // Check if we got any data back
        if (result.data && result.data.length > 0) {
          setTitle(result.data[0]["Title"]);
          setDescription(result.data[0]["Description"]);
        }
      } catch (error) {
        console.error("Error fetching or parsing CSV:", error);
      }
    };

    fetchCsvContent();
  }, [csv]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleThumbnailClick = (index) => {
    if (index !== activeIndex) {
      if (carouselRef.current) {
        carouselRef.current.goToSlide(index, { silent: true });
      }
      setActiveIndex(index);
    }
  };

  const handleCarouselChange = (currentSlide) => {
    setActiveIndex(currentSlide);
  };

  // Handle loading and error states before returning JSX
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "#ad9e75" }}>
        Loading...
      </div>
    );
  }

  // If no images were found, show error page
  if (images.length === 0) {
    return <Error />;
  }

  // Otherwise, render the main content
  return (
    <Container style={{ flexDirection: "column" }}>
      <Location>
        <a href={"/"}>Home </a> ><a href={"/bridal"}> bridal</a> > {title}
      </Location>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Div>
          <Carousel
            responsive={responsive}
            arrows={true}
            ref={carouselRef}
            containerClass="bridal-folder-carousel"
            itemClass="bridal-folder-carousel-item"
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            afterChange={(previousSlide, currentSlide) =>
              handleCarouselChange(currentSlide)
            }
          >
            {images.map((image, index) => (
              <ImgLarge key={index} src={image.url} alt={image.alt} />
            ))}
          </Carousel>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            {images.map((image, index) => (
              <ImgSmall
                key={index}
                src={image.url}
                alt={image.alt}
                onClick={() => handleThumbnailClick(index)}
                style={{
                  cursor: "pointer",
                  border: activeIndex === index ? "2px solid #ad9e75" : "none",
                }}
              />
            ))}
          </div>
        </Div>
        <Div>
          <Title>{title}</Title>
          <Paragraph style={{ paddingTop: "70px", width: "60%" }}>
            {description}
          </Paragraph>
          <FormButton
            style={{ marginTop: "6rem", fontSize: "0.9rem", padding: "1rem" }}
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            BOOK AN APPOINTMENT
          </FormButton>
        </Div>
      </div>
    </Container>
  );
};

export default BridalFolderPage;
