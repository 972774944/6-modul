import Box from "@mui/material/Box";
import Layout from "../../componet/Layout/Layout";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { CardsData } from "../Data";
import { useState } from "react";

export const NewCards = () => {
  const [cards, setCardsData] = useState(CardsData);
  const [newItem, setNewItem] = useState({
    cardNumber: "",
    cardData: "",
    name: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem((Item) => ({
      ...Item,
      [name]: value,
    }));
  };

  const Add = () => {
    const newCard = {
      ...newItem,
      id: cards.length + 1,
    };
    setCardsData((p) => [...p, newCard]);
    CardsData.push(newCard);
    setNewItem({
      name: "",
      cardNumber: "",
      cardData: "",
    });
  };
  console.log(CardsData);

  return (
    <Layout>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Add New Card
      </Typography>
      <Typography variant="body1" color="grey" mt={1}>
        Do more with unlimited blocks, files, automations & integrations.
      </Typography>
      <Box mt={1}>
        <label className="block text-gray-500">Who is</label>
        <Input
          value={newItem.name}
          onChange={handleChange}
          placeholder="Name"
          name="name"
          sx={{
            border: 1,
            borderColor: "grey.300",
            borderRadius: 2,
            px: 1,
            width: "100%",
            py: "1px",
          }}
          className="mt-1"
          disableUnderline
        />
      </Box>
      <Box mt={2}>
        <label className="block text-gray-500">Payment Details</label>

        <Input
          value={newItem.cardNumber}
          onChange={handleChange}
          name="cardNumber"
          placeholder="8600 9860 2002 1195"
          sx={{
            border: 1,
            borderColor: "grey.300",
            borderRadius: 2,
            px: 1,
            py: "3px",
            width: "100%",
          }}
          className="mt-4"
          disableUnderline
        />
        <Input
          placeholder="01/25"
          name="cardData"
          value={newItem.cardData}
          onChange={handleChange}
          sx={{
            border: 1,
            borderColor: "grey.300",
            borderRadius: 2,
            px: 1,
            py: "3px",
            width: "100%",
          }}
          className="mt-4"
          disableUnderline
        />
      </Box>
      <Box className="flex gap-2 mt-6">
        <Button
          className="w-full "
          sx={{
            p: 1,
            bgcolor: "#F2F5F7",
            color: "black",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#F2F5F7",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          className="w-full "
          disableRipple
          onClick={Add}
          sx={{
            p: 1,
            bgcolor: "#834CFF",
            color: "white",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#723dee",
            },
          }}
        >
          Add
        </Button>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }} color="grey.500">
        By providing your card information, you allow us to charge your card for
        future payment in accordance with their terms.
      </Typography>
    </Layout>
  );
};
