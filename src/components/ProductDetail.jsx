import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const ProductDetail = ({ open, onClose, singleProduct }) => {
  const { title, price, description, category, rating } = singleProduct;
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="product-dialog-title"
        aria-describedby="product-dialog-description"
      >
        <DialogTitle id="product-dialog-title">{title}</DialogTitle>
        
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
        <Typography variant="subtitle2" gutterBottom sx={{ color: '#26a541', textTransform: 'capitalize', fontWeight: 'bold'   }}>{category}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>Rs. {price}</Typography>
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
            <Typography variant="subtitle1">{rating.rate}</Typography>
            <StarIcon fontSize="small" color="inherit" />
          </Box>
          </Box>
          <Typography gutterBottom>{description}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductDetail;
