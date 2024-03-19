import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";

const ProductCard = ({ product, onCardClick }) => {
  const {
    image,
    rating: { rate },
    title,
    price,
  } = product;
  return (
    <Card
      raised
      sx={{
        maxWidth: 450,
        margin: 2,
        width: 350,
        height: 550,
        borderRadius: 2,
      }}
      onClick={onCardClick}
    >
      <CardMedia
        height="400"
        width="350"
        image={image}
        component="img"
        alt="product image"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle2" component="div">
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Rs. {price}</Typography>
          <Box
            sx={{
              width: 50,
              height: 30,
              borderRadius: 1,
              background: "#26a541",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0.5,
            }}
          >
            <Typography variant="subtitle1">{rate}</Typography>
            <StarIcon fontSize="small" color="inherit" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
