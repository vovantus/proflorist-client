import Category from "../../types/category";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Link } from "react-router-dom";

interface CatalogCategoryProps {
  category: Category;
}

export default function CatalogCategory({ category }: CatalogCategoryProps) {
  return (
    <Card
      sx={{
        minWidth: 350,
        textDecoration: "none",
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          transition: "background-color 0.3s ease",
          textDecoration: "underline",
        },
      }}
      component={Link}
      to={category.id}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component="div">
            {category.name}
          </Typography>
          <ChevronRightOutlinedIcon />
        </Box>
      </CardContent>
    </Card>
  );
}
