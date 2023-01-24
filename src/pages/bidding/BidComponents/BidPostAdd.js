import {
  Autocomplete,
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import {
  updateStateDialog,
  updateStateModal,
} from "../../../redux/actions/newxfeedAction";
import { createBiddingPost } from "../../../redux/actions/biddingAction";
import { initPost } from "../Bidding";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const BidPostAdd = ({ setPost, post }) => {
  const [, setSelectImage] = useState("");
  const dispatch = useDispatch();
  const isDialogOpen = useSelector((state) => state?.newsfeed?.openDialog);

  const { currentUser } = useSelector((state) => state.authentication);


  return (
    <>
      <Tooltip
        onClick={() => {
          dispatch(updateStateDialog(true));
          dispatch(updateStateModal(false));
          // if (currentUser?.email) {
          // } else {
          //   dispatch(updateStateDialog(false))
          //   dispatch(updateStateModal(true))
          // }
        }}
        title="Create Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={isDialogOpen}
        onClose={(e) => {
          dispatch(updateStateDialog(false));
          dispatch(updateStateModal(false));
          setPost(initPost);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={500}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
          // sx={{ overflowY: "scroll" }}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src={currentUser?.photoURL}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {currentUser?.displayName}
            </Typography>
          </UserBox>

          <TextField
            value={post?.caseTitle}
            onChange={(e) => setPost({ ...post, caseTitle: e.target.value })}
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="Write your Case Title?"
            variant="standard"
          />

          <Autocomplete
            sx={{ my: 2 }}
            size="small"
            id="combo-box-demo"
            options={["Criminal lawer", "Divorce lawer"]}
            value={post?.caseCategory}
            onChange={(e, newValue) =>
              setPost({ ...post, caseCategory: newValue })
            }
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="Specialization" />
            )}
          />
          <TextField
            value={post?.casedescription}
            onChange={(e) =>
              setPost({ ...post, casedescription: e.target.value })
            }
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Write your Case Description Briefly?"
            variant="standard"
          />

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ marginTop: 5 }}
          >
            <Button
              onClick={() => {
                let options = {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                };
                let date = new Date();
                let copyPost = { ...post };
                copyPost.caseId = Date.now();
                copyPost.createdDate = date.toLocaleString("en-US", options);
                dispatch(createBiddingPost(copyPost));
                dispatch(updateStateModal(false));
                dispatch(updateStateDialog(false));
                setPost(initPost);
                setSelectImage("");
              }}
            >
              Post
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default BidPostAdd;
