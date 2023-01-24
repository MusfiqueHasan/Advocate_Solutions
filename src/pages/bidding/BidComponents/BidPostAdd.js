import {
    Avatar,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add as AddIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
    createNewsFeeds,
    getNewsFeeds,
    updateNewsFeed,
    updateStateDialog,
    updateStateModal,
    updateStateNewsFeed,
} from "../../../redux/actions/newxfeedAction";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

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

const initPost = {
    casedescription: "",
    caseTitle: "",
    caseCategory: "",
    createdDate: 0,
};

const BidPostAdd = () => {
    const [post, setPost] = useState(initPost);
    const [selectImage, setSelectImage] = useState("");
    const dispatch = useDispatch();
    const singlePost = useSelector((state) => state?.newsfeed?.post);
    const isDialogOpen = useSelector((state) => state?.newsfeed?.openDialog);


    // console.log(post);
    // console.log(singlePost);
    const { currentUser } = useSelector((state) => state.authentication);

    // encode product image to base64
    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if (file) {
            const lastDot = file.name.lastIndexOf(".");
            const ext = file.name.substring(lastDot + 1);
            reader.readAsDataURL(file);
            reader.onload = () => {
                var Base64 = reader.result;
                const data = { ...post, photo: Base64 };
                setPost(data);
            };
        }
    };

    useEffect(() => {
        if (singlePost) {
            setPost(singlePost);
        }
    }, [singlePost]);

    useEffect(() => {
        dispatch(getNewsFeeds());
        dispatch(updateStateNewsFeed(initPost));
    }, [dispatch]);

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
                        {singlePost.id ? "Edit" : "Create"} A Post
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
                        onChange={(e) => setPost({ ...post, description: e.target.value })}
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        placeholder="Write your Case Title?"
                        variant="standard"
                    />
                    <TextField
                        value={post?.caseCategory}
                        onChange={(e) => setPost({ ...post, description: e.target.value })}
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        placeholder="Write your Case Category?"
                        variant="standard"
                    />

                    <TextField
                        value={post?.casedescription}
                        onChange={(e) => setPost({ ...post, description: e.target.value })}
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
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
                        // onClick={() => {
                        //     let options = {
                        //         weekday: "long",
                        //         year: "numeric",
                        //         month: "long",
                        //         day: "numeric",
                        //     };
                        //     let date = new Date();
                        //     let copyPost = { ...post };
                        //     // copyPost.userName = currentUser?.displayName;
                        //     // copyPost.userUrl = currentUser?.photoURL;
                        //     // copyPost.email = currentUser?.email;
                        //     copyPost.createdDate = Date.now();
                        //     copyPost.date = date.toLocaleString("en-US", options);

                        //     if (singlePost.id) {
                        //         dispatch(updateNewsFeed(copyPost, copyPost.id));
                        //     } else {
                        //         dispatch(createNewsFeeds(copyPost));
                        //     }
                        //     dispatch(updateStateModal(false));
                        //     dispatch(updateStateDialog(false));
                        //     setPost(initPost);
                        //     setSelectImage("");
                        // }}
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
