import React, { useState, useEffect } from "react";
import { FetchImageFolders } from "./FetchImageFolders";
import {
  Container,
  ImageContainer,
  Img,
  Title,
  Price,
} from "../Styles/GalleryLoaderStoreStyle";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "../Styles/PagesStyle";
import { Link, useNavigate } from "react-router-dom";
import { useFirebaseData } from "../App";

const GalleryLoaderOnlineStore = ({ FolderName }) => {
  const [folders, setFolders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const folderData = await FetchImageFolders(FolderName);
      setFolders(folderData);
    };

    fetchData();
  }, [FolderName]);

  const firebaseData = useFirebaseData();

  return (
    <Container>
      <Divider />
      <ImageContainer>
        {folders.map((folder, folderIndex) => {
          const thumbnails = folder.images.filter((image) =>
            image.url.includes("thumbnail"),
          );
          const thumbnail2 = folder.images.find((image) =>
            image.url.includes("thumbnail2"),
          );

          const foldername = folder["folderName"];
          const folderData = firebaseData[foldername];

          return (
            <div key={folderIndex} style={{ textAlign: "center" }}>
              {thumbnails[0] && (
                <Img
                  src={thumbnails[0].url}
                  alt={thumbnails[0].alt}
                  onMouseEnter={(e) => {
                    if (thumbnail2) e.currentTarget.src = thumbnail2.url;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.src = thumbnails[0].url;
                  }}
                  onClick={() =>
                    navigate(`/${FolderName}/${folder.folderName}`, {
                      state: {
                        folderData,
                      },
                    })
                  }
                />
              )}

              <div
                style={{
                  minHeight: "60px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Link to={`/${FolderName}/${folder.folderName}`}>
                  <Title>{folderData?.Name || "No Name Available"}</Title>
                  {folderData?.SalePercentage ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Price
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                          paddingRight: "5px",
                          paddingLeft: "3px",
                        }}
                      >
                        ${folderData?.Price || "N/A"}
                      </Price>
                      <Price
                        style={{
                          fontWeight: "bold",
                          paddingRight: "3px",
                          paddingLeft: "5px",
                        }}
                      >
                        $
                        {(
                          folderData?.Price -
                          (folderData?.Price * folderData?.SalePercentage) / 100
                        ).toFixed(2)}
                      </Price>
                    </div>
                  ) : (
                    <Price>${folderData?.Price || "N/A"}</Price>
                  )}
                </Link>
              </div>
            </div>
          );
        })}
      </ImageContainer>
    </Container>
  );
};

export default GalleryLoaderOnlineStore;
