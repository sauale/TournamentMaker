/* tslint:disable */
import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import GroupIcon from "@mui/icons-material/Group";
import SportsIcon from "@mui/icons-material/Sports";
import PlacesAutocomplete from "react-places-autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../assets/images/Trophy.svg";
interface Props {
  activeStep: number;
  stepsLenght: number;
  handleBack: () => void;
  handleNext: () => void;
  handleSkip: () => void;
  isStepOptional: (step: number) => boolean;
}

const classes = {
  container: {
    height: "500px",
    width: "450px",
    margin: "0 auto",
    bgcolor: "white",
    mt: 3,
    borderRadius: "8px",
    boxShadow: "0 4px 2px -2px gray",
    p: 4,
  },
  nextButton: {
    bgcolor: "#3498db",
    "&:hover": {
      bgcolor: "#2072a9",
    },
  },
  card: {
    display: "flex",
    background: "linear-gradient( 54deg , #130037 0%, #1c2c2a 100%);",
    height: 180,
    borderRadius: 5,
    transition: "all 0.6s ease-in",
    transform: "scale(1)",
    mt: 2,
    "&:hover ": {
      borderRadius: "50px",
      cursor: "pointer",
      tansformOrigin: "left",
      transform: "scale(1.05)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: " linear-gradient( 54deg , #7d3cf7 0%, #1c2c2a 100%)",
    height: "100%",
    color: "white",
    maxHeight: 220,
    textAlign: "center",
    padding: 0,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
    "& h6": {
      borderTop: "2px solid #c9ffe2",
      transition: "all .6s",
      transform: "scale(1)",
      paddingTop: 0.5,
      "&:hover": {
        transform: "scale(1.09)",
        tansformOrigin: "bottom",
      },
    },
    "& h5": {
      paddingBottom: 0.5,
      transition: "all .6s",
      transform: "scale(1)",
      "&:hover": {
        transform: "scale(1.06)",
        tansformOrigin: "top",
      },
    },
  },
};

const TournamentForm = (props: Props): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [teamCount, setTeamCount] = useState<string>("16");
  const [sport, setSport] = useState<string>("");

  const [address, setAddress] = useState<string>("");

  console.log(address);
  const handleChange = (address: string): void => {
    setAddress(address);
  };

  const handleSelect = (address: string) => {
    setAddress(address);
  };

  return (
    <>
      <Box sx={classes.container}>
        {props.activeStep === 0 && (
          <Box sx={{ height: "300px" }}>
            <Typography variant="h4"> New tournament </Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Information can be edited later.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                variant="standard"
                placeholder="Tournament Title"
                label="Tournament Title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>

              <Box sx={{ display: "flex", flexDirection: "row ", gap: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Start date"
                    value={startDate}
                    onChange={(newValue) => {
                      setStartDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="End date"
                    value={endDate}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row ", gap: 3 }}>
                <TextField
                  value={teamCount}
                  fullWidth
                  select
                  label="Team count"
                  onChange={(e) => setTeamCount(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <GroupIcon />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  value={sport}
                  label="Sport"
                  onChange={(e) => setSport(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SportsIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Box>
            </Box>
          </Box>
        )}
        {props.activeStep === 1 && (
          <Box sx={{ height: "300px" }}>
            {" "}
            <Typography variant="h4" sx={{ mb: 1 }}>
              {" "}
              Select Tournament format{" "}
            </Typography>
            <ActionCard action="bybis" />
            <ActionCard action="bybis" />
          </Box>
        )}
        {props.activeStep === 2 && (
          <Box sx={{ height: "300px" }}>
            {" "}
            <Typography variant="h4"> Select Venue</Typography>{" "}
            <Typography sx={{ mt: 1, mb: 2 }}>
              Enter tournament location.
            </Typography>
            <Box>
              <PlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <Box>
                    <TextField
                      variant="standard"
                      fullWidth
                      label="Venue"
                      sx={{ overflow: "clip" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <CloseIcon onClick={() => setAddress("")} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      {...getInputProps({
                        placeholder: "Venue",
                        className: "location-search-input",
                      })}
                    />

                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <Box
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <MenuItem sx={{ whiteSpace: "initial" }}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            {suggestion.description}
                          </MenuItem>
                        </Box>
                      );
                    })}
                  </Box>
                )}
              </PlacesAutocomplete>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mt: 20,
          }}
        >
          <Button
            color="inherit"
            disabled={props.activeStep === 0}
            onClick={props.handleBack}
          >
            Back
          </Button>

          {props.isStepOptional(props.activeStep) && (
            <Button color="inherit" onClick={props.handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}

          <Button
            variant="contained"
            onClick={props.handleNext}
            sx={classes.nextButton}
          >
            {props.activeStep === props.stepsLenght - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

interface CardProps {
  action: string;
}

const ActionCard = (props: CardProps): JSX.Element => {
  const isUserManagement: boolean = props?.action === "USER_MANAGEMENT";
  const displayImg: string = Logo;
  const background: string = isUserManagement
    ? "linear-gradient( 75deg , #7d3cf7 0%, #1c2c2a 100%)"
    : "linear-gradient( 54deg , #f73c97 0%, #1c2c2a 100%)";
  const translationTitle: string = isUserManagement
    ? "adminActionSelect.userManagement"
    : "adminActionSelect.projectManagement";
  const translationSubtitle: string = isUserManagement
    ? "adminActionSelect.userManagementDescription"
    : "adminActionSelect.projectManagementDescription";
  return (
    <Card sx={classes.card}>
      <CardMedia
        component="div"
        sx={{
          width: "50%",
          backgroundImage: `linear-gradient( 231deg , rgba(78, 90, 159, 0.28) -0.01%, #d8d8d966 100%) ,url(${displayImg})`,
        }}
      />
      <Box sx={{ width: "50%" }}>
        <CardContent sx={{ ...classes.cardContent, background }}>
          <Typography variant="h5" fontWeight={400}>
            Groups Only
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default TournamentForm;
