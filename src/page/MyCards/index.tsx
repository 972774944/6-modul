import Box from "@mui/material/Box";
import Layout from "../../componet/Layout/Layout";
import Typography from "@mui/material/Typography";
import { CardsData } from "../Data";
import Grid from "@mui/material/Grid";

export const MyCards = () => {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ display: "flex", gap: 5 }}>
        {" "}
        {CardsData.map((card) => {
          return (
            <Grid
              item
              xs={3}
              lg={4}
              md={4}
              sm={7}
              key={card.id}
              sx={{
                backgroundImage: `url(https://www.veeforu.com/wp-content/uploads/2022/09/Blue-wedding-invitation-card-background-hd.-scaled.jpg)`,
                objectFit: "cover",
                backgroundSize: "100%",
                bgcolor: "#15126d",
                width: "300px",
                height: "27vh",
                color: "white",
                borderRadius: 5,
              }}
            >
              <Box>
                <img
                  src="https://www.svgrepo.com/show/328112/visa.svg"
                  className="w-14"
                  alt=""
                />
              </Box>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                {card.cardNumber}
              </Typography>
              <Box className="flex " justifyContent="space-between">
                <Box>
                  <Typography variant="body2">Name</Typography>
                  <Typography variant="h5">{card.name}</Typography>
                </Box>
                <Box sx={{ marginRight: 2 }}>
                  <Typography variant="body2">Expite Data</Typography>
                  <Typography sx={{ mb: 1.5 }}>{card.cardData}</Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};
