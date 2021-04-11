import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { reduceUser } from "../../actions/user";

import { REACT_APP_STAG_BASE } from "../../setupEnv";

const ITEM_HEIGHT = 48;

const EntryMenu = (props) => {
  const { user, weekIndex, entryIndex, entryId } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const deleteEntry = async () => {
    try {
      const res = await axios.delete(
        REACT_APP_STAG_BASE +
          `users/${user.id}/journal/weeks/${weekIndex}/entries/${entryId}`
      );
      props.reduceUser(res.data.Attributes, entryIndex);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "10ch",
          },
        }}
      >
        <MenuItem key={"Delete"} onClick={deleteEntry}>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default connect(null, { reduceUser })(EntryMenu);
