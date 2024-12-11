import '@/app/globals.css';
import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const HeroSection = () => {
  const isScreenSmall = useMediaQuery('(max-width: 1300px)');
  const isScreen900 = useMediaQuery('(max-width: 900px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        position: 'relative',
        gap: { xs: '20px', md: '0' },
      }}
    >
      {/* Text Content */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-start',
          width: { xs: '100%', md: '50%' },
          height: 'auto',
        }}
      >
        <Box
          component="img"
          src="/images/bg-circle.svg.svg"
          alt="Background Circle"
          sx={{
            width: { xs: '1050px', sm: '1450px', md: '1500px' }, 
            height: 'auto',
            zIndex: -1,
          }}
        />


        {/* Text Overlay Box */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '50px', md: '123.38px' },
            left: { xs: '35px', sm: '80px', md: '22%', lg: '15%', xl: '23%', },
            width: { xs: '90%', md: '1086px' },
            height: 'auto',
            padding: '0px 15px 0px 0px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1,
          }}
        >
          {/* Main Title */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Inter',
              fontSize: { xs: '38px', sm: '48px', md: '60px' },
              fontWeight: 800,
              lineHeight: { xs: '48px', sm: '60px', md: '75px' },
              letterSpacing: '-1.2px',
              textAlign: 'left',
              color: '#02033B',
              width: { xs: '350px', sm: '550px', md: '603px' },
            }}
          >
            Your mobile privacy is our mission
          </Typography>

          {/* Subtitle Container */}
          <Box
            sx={{
              width: { xs: '100%', sm: '98%', md: '603.5px' },
              height: 'auto',
              padding: '4px 5.61px 4px 0px',
              display: 'flex',
              alignItems: 'flex-start',
              marginTop: { xs: '20px', md: '48px' },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '14px', sm: '16px', md: '20px' },
                fontWeight: 400,
                lineHeight: '30px',
                textAlign: 'left',
                color: '#02033B',
                width: '100%',
              }}
            >
              Think your phone has been hacked? Our trusted apps make it easy
              for you to scan, detect, and remove threats from your iPhone and
              Android devices.
            </Typography>
          </Box>

          {/* Buttons */}
          <Box
            sx={{
              width: { xs: '100%', sm: '110%', md: '603.5px' },
              height: 'auto',
              padding: { xs: '24px  0px', md: '96px 0px 0px 0px' },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
              justifyContent: { xs: 'flex-start', sm: 'flex-start' },
              alignItems: 'flex-start',
              gap: '16px', 
            }}
          >
            {/* First Button */}
            <Box
              component="a"
              href="#"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'flex-start', 
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '42px',
                fontFamily: 'Inter',
                fontSize: { xs: '16px', sm: '16px', md: '19px' },
                fontWeight: 600,
                color: '#02033B',
                backgroundColor: '#FFC247',
                width: '275px',
                height: 'auto', 
                cursor: 'pointer',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '16px', sm: '18px', md: '19px' },
                  fontWeight: 800,
                  lineHeight: '22.5px',
                  whiteSpace: 'normal', // Prevent truncation
                  overflow: 'visible',
                  textOverflow: 'clip',
                  textAlign: 'left',
                  width: 'calc(100% - 24px)', // Space for the arrow
                }}
              >
                Get Certo for iPhone
              </Typography>

              <Box sx={{ marginLeft: '12px', display: 'flex' }}>
                <Image
                  src="/images/button-arrow.svg.svg"
                  alt="Right Arrow"
                  width={20}
                  height={14}
                />
              </Box>
            </Box>

            {/* Second Button */}
            <Box
              component="a"
              href="#"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'flex-start', // Align text and arrow to the left
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '42px',
                fontFamily: 'Inter',
                fontSize: { xs: '16px', sm: '16px', md: '19px' },
                fontWeight: 600,
                color: '#02033B',
                boxShadow: '0px 0px 0px 2px #02033B inset',
                width: '260px',
                height: 'auto',
                cursor: 'pointer',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '16px', sm: '18px', md: '19px' },
                  fontWeight: 800,
                  lineHeight: '22.5px',
                  whiteSpace: 'normal',
                  overflow: 'visible',
                  textOverflow: 'clip',
                  textAlign: 'left',

                }}
              >
                Get Certo for Android
              </Typography>



            </Box>
          </Box>

          {/* Buttons end*/}
          {!isScreen900 && (
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                top: { xs: 'auto', md: '0' },
                right: { xs: 'auto', md: '10%' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                marginTop: '-10px',
                marginRight: { xs: 'auto', md: '-3%', lg: '-14%', xl: '-53px' },
                width: { xs: '100%', md: '50%' },
                height: 'auto',
                maxWidth: '100%',
              }}
            >
              <Image
                width={241}
                height={461}
                src="/images/android-dashboard-certo-2.png.png"
                alt="Android Dashboard"
                style={{ objectFit: 'contain', width: '241px', height: '461px', }}
              />
            </Box>
          )}

        </Box>

      </Box>

      {/* Second Half: Image */}
      {!isScreenSmall && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center the content horizontally
            width: { xs: '100%', sm: '80%', md: '47.9%', lg: '47%', xl: '48%' },
            height: 'auto',
            marginTop: { xs: '30px', md: '0' }, 
            position: 'relative', 


          }}
        >
          {/* Background Box */}
          <Box
            sx={{
              position: 'absolute',
              width: '106.5%',  
              height: '100%',
              backgroundColor: '#4335DE', 
              zIndex: -1, 
              marginTop: '69px',
              paddingTop: '100%',

            }}
          />
          {/* Image */}
          <Image
            layout="fill"
            objectFit="cover" 
            src="/images/home-header-2.png.png"
            alt="Privacy App Image"
            style={{ width: '100%', height: '100%', marginTop: '94px' }}
          />
        </Box>
      )}


    </Box>
  );
};

export default HeroSection;
