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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import {
  updateStateDialog,
  updateStateModal,
} from "../../../redux/actions/newxfeedAction";
import { createBiddingPost } from "../../../redux/actions/biddingAction";
import { initPost } from "../Bidding";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase-config";
import { useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";

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
  const [userLoginId, setUserLoginId] = useState("");
  const [isAdvocate, setIsAdvocate] = useState("");
  const [isError, setIsError] = useState("");
  let usersCollectionRef = collection(db, "loginUser");
  const dispatch = useDispatch();
  const isDialogOpen = useSelector((state) => state?.newsfeed?.openDialog);

  const { currentUser } = useSelector((state) => state.authentication);

  const getLogedinUserId = async () => {
    const data = await getDocs(usersCollectionRef);
    const allData = data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
    const credential = allData?.find(
      (item) =>
        item.email === currentUser?.email &&
        item.displayName === currentUser?.displayName
    );
    setIsAdvocate(credential?.role);
    setUserLoginId(credential?.id);
  };

  useEffect(() => {
    getLogedinUserId();
  }, [currentUser]);

  const handleAddBidding = () => {
    if (
      post?.caseCategory === "" ||
      post?.caseTitle === "" ||
      post?.casedescription === ""
    ) {
      setIsError("Fields cannot be empty");
      setTimeout(() => {
        setIsError("");
      }, 2000);
    } else {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      let date = new Date();
      let copyPost = { ...post };
      copyPost.caseId = Date.now();
      copyPost.userId = userLoginId;
      copyPost.createdDate = date.toLocaleString("en-US", options);
      dispatch(createBiddingPost(copyPost));
      dispatch(updateStateModal(false));
      dispatch(updateStateDialog(false));
      setPost(initPost);
    }
  };

  return (
    <>
      {isAdvocate !== "advocate" && (
        <Tooltip
          onClick={() => {
            dispatch(updateStateDialog(true));
            dispatch(updateStateModal(false));
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
      )}
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
        >
          <Button
            onClick={() => {
              dispatch(updateStateModal(false));
              dispatch(updateStateDialog(false));
            }}
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyItems: "flex-end",
              ml:'90%'
            }}
          >
            {" "}
            <ClearIcon />
          </Button>
         
          <UserBox>
            <Avatar
              src={currentUser?.photoURL}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {currentUser?.displayName}
            </Typography>
          </UserBox>
          <Typography variant="h6" color="gray" textAlign="center" mb='15px'>
            Create Post
          </Typography>
          <TextField
            value={post?.caseTitle}
            onChange={(e) => setPost({ ...post, caseTitle: e.target.value })}
            fullWidth
            size="small"
            placeholder="Write your Case Title?"
            variant="outlined"
          />

          <Autocomplete
            sx={{ my: 2 }}
            size="small"
            id="combo-box-demo"
            options={[
              "Criminal lawer",
              "Divorce lawer",
              "family Lawyer",
              "Corporate Lawyer",
              "Immigration Lawyer",
              "Civil Rights lawyer",
              "Healthcare Lawyer",
              "Education Lawyer",
              "Animal Rights Lawyer",
            ]}
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
            fullWidth
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Write your Case Description Briefly?"
            variant="outlined"
          />
          {isError !== "" && (
            <p className="text-red-500 font-bold text-sm mt-2 text-center">
              {isError}
            </p>
          )}
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ marginTop: 3 }}
          >
            <Button onClick={handleAddBidding}>Post</Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default BidPostAdd;
