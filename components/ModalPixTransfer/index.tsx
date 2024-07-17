import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";

interface Props {
  open: boolean;
  label?: string;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

export const ModalPixTransfer = ({
  open,
  label = "Transferência feita",
}: Props) => {
  const router = useRouter();

  return (
    <div>
      {/*  <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Transferência feita
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "#133A6F", width: "100%", height: "40px" }}
            type="submit"
            onClick={() => router.replace("/")}
          >
            Concluir
          </Button>{" "}
        </Box>
      </Modal>
    </div>
  );
};
