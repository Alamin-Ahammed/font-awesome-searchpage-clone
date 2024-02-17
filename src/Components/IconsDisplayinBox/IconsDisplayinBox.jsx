import { Box, Modal, SvgIcon, Typography } from "@mui/material";
import { flex } from "../../styleObject";
import { useState } from "react";
import { HiMiniXCircle } from "react-icons/hi2";

export default function IconsDisplayinBox({ icon, height }) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "82%",
    width: "82%",
    height: "88%",
    bgcolor: "background.paper",
    p: 4,
    ...flex,
    "@media (max-width: 1151px)": {
      flexDirection: "column",
    },

    "@media (max-width: 767px)": {
      p: "1rem",
      height: "600px",
    },
    "@media (max-width: 541px)": {
      height: "420px",
      top: "25%",
    },
  };
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SvgIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: "-10px",
              top: "-10px",
              background: "#fff",
              borderRadius: "50%",
            }}
          >
            <HiMiniXCircle style={{ color: "#183153" }} />
          </SvgIcon>
          <Box
            sx={{
              ...flex,
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              maxWidth: "500px",
              width: "100%",
              height: "400px",
              flex: "1 1",
              borderRadius: "1rem",
              "@media (max-width: 541px)": {
                height: "200px",
              },
            }}
          >
            <SvgIcon
              sx={{
                fontSize: "10rem",
                "*": { color: "#1E3050", fill: "#1E3050" },
              }}
            >
              {icon}
            </SvgIcon>
          </Box>

          <Box sx={{ flex: "1 1", p: "4rem" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              This Part is Coming Soon.....
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Developed By Alamin Ahammed
            </Typography>
          </Box>
        </Box>
      </Modal>
      <Box
        onClick={handleOpen}
        sx={{
          height: height,
          borderRadius: "1rem",
          background: "#fff",
          ...flex,
          transition: "all 0.3s",
          "&:hover": {
            bgcolor: "#FFD43B",
          },
          cursor: "pointer",
        }}
      >
        {icon ? (
          <SvgIcon
            sx={{
              fontSize: height === "168px" ? "3rem" : "1.8rem",
            }}
          >
            {icon}
          </SvgIcon>
        ) : (
          <SvgIcon
            sx={{
              fontSize: height === "168px" ? "3rem" : "1.8rem",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </SvgIcon>
        )}
      </Box>
    </>
  );
}
