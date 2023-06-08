import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import KebabDiningRoundedIcon from "@mui/icons-material/KebabDiningRounded";
import LocalBarRoundedIcon from "@mui/icons-material/LocalBarRounded";

import "../css/DetailsMenu.css";

import Details_food from "./Details_food";
import Details_dring from "./Details_dring";
import Details_add from "./Details_add";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DetailsMenu() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="Boxx" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "#fffff" }}>
        <Tabs
          className="Tabs"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          scrollButtons="auto"
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#ffc928 ",
              borderRadius: 10,
            },
          }}
          sx={{
            "& button": { borderRadius: 10 },
            "& button.Mui-selected": {
              transition: " 0.5s",
              fontSize: 15,
            },
          }}
        >
          <Tab
            className="Tab"
            label="الاضافات"
            icon={<KebabDiningRoundedIcon />}
            {...a11yProps(0)}
          />
          <Tab
            className="Tab"
            label="المشروبات"
            icon={<LocalBarRoundedIcon />}
            {...a11yProps(1)}
          />
          <Tab
            className="Tab"
            icon={<FastfoodIcon />}
            label="الاكلات "
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Details_add />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Details_dring />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Details_food />
      </TabPanel>
    </Box>
  );
}
