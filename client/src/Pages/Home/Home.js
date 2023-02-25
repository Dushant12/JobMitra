// import { Container, Stack } from "@mui/system";
import { Stack,Container } from '@mui/material';

import { Avatar, Button, Paper, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom"
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material';
import Options from '../ChooseTemplate/Options';
import Typewriter from 'typewriter-effect';

const Home = () => {

  const navigate = useNavigate();
  const typingEffectLines = [
    "Resume.",
    "Fast.",
    "Save it."
  ]

  const Front = () => {
    return (
      <Container sx={{ margin: 0 }}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          >
          <Container sx={{ textAlign: "center" }}>
            <Stack direction={'row'} justifyContent={'center'} alignItem={'center'} style={{marginBottom: '10px'}}>
              <Typography variant="h2" mx={1} style={{color:"white"}}>Create</Typography>
              <Typography variant="h2" sx={{ color: "#803bec" }}>
                <Typewriter
                  options={{
                    strings: typingEffectLines,
                    autoStart: true,
                    loop: true,
                  }}
                /> </Typography>
            </Stack>
            <Typography variant="h7" style={{color:"white",marginTop:'50px',marginBottom:'50px'}}>
              Prepare for Real Interview
              <br/>
            </Typography>
          </Container>

          <Button onClick={() => navigate('/collector')} variant="outlined" sx={{
            width: 200, backgroundColor: "#803BEC", borderColor: "black", marginBottom:'20px', marginTop:'10px',color: '#FFF', "&:hover": {
              color: "#E5A1F8",
              borderColor: "#E5A1F8",
            }
          }}>
            Try Now
          </Button>

          <Avatar
            variant={"rounded"}
            src="https://cdn.pixabay.com/photo/2017/10/31/00/23/portfolio-2903909_1280.png"
            sx={{ width: "auto", height: 100, padding: 1 }}
          />
        </Stack>
      </Container>
    );
  }
  const iconStyle = { fontSize: 50 };
  const stepData = [
    {
      icon: <InfoIcon sx={iconStyle} style={{color:"#803BEC"}} />,
      title: "Enter Your Information",
      detail: "Laboris tempor enim consectetur proident minim exercitation ullamco eiusmod qui consectetur et."
    },
    {
      icon: <ArticleIcon sx={iconStyle}  style={{color:"#803BEC"}}/>,
      title: "Select Your Template",
      detail: "Laboris tempor enim consectetur proident minim exercitation ullamco eiusmod qui consectetur et."
    },
    {
      icon: <DownloadIcon sx={iconStyle}  style={{color:"#803BEC"}}/>,
      title: "Download the Resume",
      detail: "Laboris tempor enim consectetur proident minim exercitation ullamco eiusmod qui consectetur et."
    },

  ]

  const Steps = () => {

    return (
      <Paper sx={{ textAlign: "center", width: '100%' }}>
        <Divider light>
          <Typography variant="h5" my={2}> <strong>Create Professional Resume in 3 Steps</strong></Typography>
        </Divider>
        <Stack
          m={3}
          direction="row"
          justifyContent="space-around"
          flexWrap={'wrap'}>
          {
            stepData.map((data) => (
              <Paper key={data.title} sx={{ width: "300px", padding: '10px', margin: '5px' }}>
                {data.icon}
                <Typography variant="h6">{data.title}</Typography>
                <Typography variant="p">
                  {data.detail}
                </Typography>
              </Paper>
            ))
          }

        </Stack>
      </Paper>
    );
  }


  const Example = () => {
    return (
      <Paper sx={{ width: '100%', textAlign: "center" }}>
        <Divider light>
          <Typography variant="h5" my={2}> <strong>Example Templates</strong></Typography>
        </Divider>
        <Options />
      </Paper>
    );
  }

  return (
    // <Stack spacing={5} alignItems="center" sx={{ backgroundImage: `url(${"/static/transparent.png"})` }}>
    <Stack spacing={5} alignItems="center" style = {{backgroundColor:"#35353f",width:'100%',paddingTop:'5%'}}>
      <Front />
      <Stack spaceint={2} sx={{ backgroundColor: '#FFF', width: '100%' }}>
        <Steps />
        <Example />
        {/* <Typography align="center" variant={'h6'} p={1}>© 2022 Harsh Chourasiya</Typography> */}
      </Stack>
    </Stack>
  );
};

export default Home;
