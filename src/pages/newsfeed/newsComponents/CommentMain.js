import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { ImUserTie } from "react-icons/im";
import img from "../../../assets/images/profile-img.png";

const CommentMain = () => {
  const [comment, setComment] = useState("");
  const [commentText, setCommentText] = useState(
    localStorage.getItem("comments")
  );
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
    localStorage.setItem("comments", JSON.stringify([...comments, comment]));
    setComment("");
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  console.log(commentText);
  useEffect(() => {
    const text = localStorage.getItem("comments");
    console.log(text);
    setCommentText(text);
  }, []);

  return (
    <Box>
      <Box sx={{ mx: 1, my: 3, display: "flex", alignItems: "center" }}>
        <TextField
          id="outlined-basic"
          label="Comment"
          variant="outlined"
          fullWidth
          value={comment}
          onChange={onChangeHandler}
          // multiline
          // rows={2}
        />
        <Button sx={{ fontSize: 25 }} onClick={onClickHandler}>
          <BiSend />
        </Button>
      </Box>
      <Box sx={{ m: 2 }}>
        {comments?.map((text, index) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              width: "100%",
              ml: index % 2 !== 0 ? 10 : 0,
            }}
          >
            <img src={img} width={40} />
            <Box
              sx={{
                ml: 2,
                bgcolor: "#54a0ff",
                width: "100%",
                borderRadius: 1,
                p: 1,
                color: "white",
              }}
            >
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                Musfique Hasan
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                {text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CommentMain;
