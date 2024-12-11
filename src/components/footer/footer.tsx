/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import { Twitter, Facebook, YouTube } from '@mui/icons-material';

const Footer = () => {
    const menuItems = [
        'iPhone',
        'Android',
        'Help',
        'About',
        'Insights',
        'Resources',
        'Affiliates'
    ];
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
                margin: '0 auto',
                padding: { xs: '62px 25%', sm: '75px 50px', md: '90px 90px', lg: '96px 196px' },
                backgroundColor: '#02033B',
            }}
        >
            {/* Content Container */}
          
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    justifyContent: 'center', // Center content horizontally
                   
                }}
            >
                <Grid container spacing={4} justifyContent="center">
                {/* First Column */}
                <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',

                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            width: '312px',
                            height: 'auto',
                            position: 'relative',
                            top: '-1px',
                        }}
                    >
                        {/* Text Section */}
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 'bold',
                                fontSize: '23px',
                                lineHeight: '30px',
                                color: '#FFFFFF',
                            }}
                        >
                            Scan. Detect. Remove.
                        </Typography>

                        {/* Icon Container */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '348px',
                                height: '72px',
                                padding: '0px 160.81px 36px 0px',
                                gap: '39.59px',
                                marginTop: '49px',
                            }}
                        >
                            {/* Twitter Icon */}
                            <Twitter
                                sx={{
                                    width: '36px',
                                    height: '36px',
                                    color: '#000000',
                                    backgroundColor: 'white',
                                    cursor: 'pointer',
                                    borderRadius: '15%',
                                    '&:hover': {
                                        backgroundColor: '#FFC247',
                                    },
                                }}
                            />
                            {/* Facebook Icon */}
                            <Facebook
                                sx={{
                                    width: '36px',
                                    height: '36px',
                                    color: '#000000',
                                    backgroundColor: 'white',
                                    cursor: 'pointer',
                                    borderRadius: '15%',
                                    '&:hover': {
                                        backgroundColor: '#FFC247',
                                    },
                                }}
                            />
                            {/* YouTube Icon */}
                            <YouTube
                                sx={{
                                    width: '36px',
                                    height: '36px',
                                    color: '#000000',
                                    cursor: 'pointer',
                                    backgroundColor: 'white',
                                    borderRadius: '15%',
                                    '&:hover': {
                                        backgroundColor: '#FFC247',
                                    },
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row', // Align items in a row
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                width: '336px',
                                height: '32px',
                                position: 'relative',
                                top: '16px',
                                color: 'white',
                                padding: '4px 13px 149.44px 0px',
                                gap: '8px', // Space between the links
                            }}
                        >
                            <a
                                href="#"
                                style={{
                                    width: '83px',
                                    height: '15px',
                                    fontFamily: 'Inter',
                                    fontSize: '11px',
                                    fontWeight: 400,
                                    lineHeight: '15px',
                                    textAlign: 'left',
                                    textDecorationLine: 'underline',
                                    textDecorationStyle: 'solid',
                                    textUnderlinePosition: 'from-font',
                                    textDecorationSkipInk: 'none',
                                    color: 'white',
                                    opacity: 1, // Set to 1 for visibility
                                }}
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                style={{
                                    width: '93px',
                                    height: '15px',
                                    fontFamily: 'Inter',
                                    fontSize: '11px',
                                    fontWeight: 400,
                                    lineHeight: '15px',
                                    textAlign: 'left',
                                    textDecorationLine: 'underline',
                                    textDecorationStyle: 'solid',
                                    textUnderlinePosition: 'from-font',
                                    textDecorationSkipInk: 'none',
                                    color: 'white',
                                    opacity: 1, // Set to 1 for visibility
                                }}
                            >
                                Terms of Service
                            </a>
                        </Box>


                    </Box>
                    <Box
                        sx={{
                            width: '312px',
                            height: '63px',
                            padding: '0px 5.94px 0px 0px',
                            gap: '18px',
                            display: 'flex',
                            flexDirection: 'column', // Stack the boxes vertically
                            alignItems: 'flex-start',
                            color: 'white',
                            marginTop: {xs: '-70px', sm: '-70px', md: '-70px', lg: '-70px'},
                            
                        }}
                    >
                        {/* First Box */}
                        <Box
                            sx={{
                                width: '306.06px',
                                height: '30px',
                                fontFamily: 'Inter',
                                fontSize: '11px',
                                fontWeight: 400,
                                lineHeight: '15px',
                                textAlign: 'left',
                                textUnderlinePosition: 'from-font',
                                textDecorationSkipInk: 'none',
                                //marginTop:{xs: '0px', md: '77px', lg: '0px'},

                            }}
                        >
                            Copyright © 2024 Certo Software Limited | Registered in England & Wales No. 10072356
                        </Box>

                        {/* Second Box (this will be in the second row) */}
                        <Box
                            sx={{
                                width: '220px',
                                height: '15px',
                                fontFamily: 'Inter',
                                fontSize: '11px',
                                fontWeight: 400,
                                lineHeight: '15px',
                                textAlign: 'left',
                                textUnderlinePosition: 'from-font',
                                textDecorationSkipInk: 'none',

                            }}
                        >
                            Designed & developed by{' '}
                            <span
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: '11px',
                                    fontWeight: 400,
                                    lineHeight: '15px',
                                    textAlign: 'left',
                                    textDecorationLine: 'underline',
                                    textDecorationStyle: 'solid',
                                    textUnderlinePosition: 'from-font',
                                    textDecorationSkipInk: 'none',
                                    cursor: 'pointer', // Makes it look clickable
                                }}
                            >
                                Bigger Picture
                            </span>
                        </Box>
                    </Box>

                </Box>
                </Grid>
                {/* Second Column */}
                <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box>
                    <Box
                        sx={{
                            width: {xs: '100%', sm: '188px', md: '188px'},
                            height: '70px',
                            padding: '0px 89px 25px 0px',
                            gap: '0px',
                            border: '0px 0px 1px 0px',
                            borderBottom: '1px solid #FFFFFF',
                            marginLeft: {xs: '0px', sm: '60px', md: '60px'},
                        }}
                    >
                        <Typography
                            sx={{
                                width: '99px',
                                height: '45px',
                                fontFamily: 'Inter',
                                fontSize: '35px',
                                fontWeight: '800',
                                lineHeight: '45px',
                                textAlign: 'left',
                                color: 'white',
                            }}
                        >
                            Certo
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            gap: '24px',
                            color: '#FFC247',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row', lg: 'column' },
                            flexWrap: 'wrap',
                            justifyContent: 'flex-start',
                            marginLeft: {xs: '0px', sm: '60px', md: '60px'},
                            marginTop: '60px',
                        }}
                    >
                        {menuItems.map((item, index) => (
                            <a
                                href="#"
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '188px',
                                    height: '25px',
                                    padding: '0px 80px 0px 0px',
                                }}
                            >
                                <span
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                        marginRight: '8px',
                                        fontSize: '30px',
                                        transform: 'scaleX(2)',
                                        paddingBottom: '2px'

                                    }}
                                >
                                    -
                                </span>
                                <Typography
                                    sx={{
                                        width: '64px',
                                        height: '25px',
                                        fontFamily: 'Inter',
                                        fontSize: '19px',
                                        fontWeight: 800,
                                        lineHeight: '25px',
                                        letterSpacing: '-0.4px',
                                        textAlign: 'left',
                                        textDecorationLine: 'none',
                                        marginLeft: '21px'
                                    }}
                                >
                                    {item}
                                </Typography>
                            </a>
                        ))}
                    </Box>
                </Box>
                </Grid>
                {/* Third Column */}
                <Grid item xs={12} sm={4} lg={4}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column', // Stack the boxes vertically in a column
                        gap: '24px', // Add space between the two boxes
                        justifyContent: 'center',
                        margin: 'auto', 
                    }}
                >
                    {/* First Box with Signup Form */}
                    <Box
                        sx={{
                            width: { xs: '180%', sm: '310%', md: '290%', lg: '436px'},
                            height: '232px',
                            borderRadius: '42px',
                            padding: '35px 36px 36px 36px',
                            background: '#FFC247',
                            backgroundImage: 'url(/images/certo-dark-yellow.svg.svg)',
                            backgroundSize: '189px 232px',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            marginLeft: { xs: '-100px', sm: '-105%', md: '-98%', lg: '0px'}
                            
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 'bold',
                                fontSize: '23px',
                                lineHeight: '30px',
                            }}
                        >
                            Sign up to our newsletter
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontSize: '15px',
                                lineHeight: '20px',
                                marginTop: '21px',
                                fontWeight: '400',
                            }}
                        >
                            Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!
                        </Typography>

                        <TextField
                            sx={{
                                width: '67%',
                                height: '34px',
                                marginTop: '44px',
                                borderRadius: '21px 0px 0px 21px',
                                backgroundColor: 'white',
                                '& .MuiInputBase-root': {
                                    height: '34px',  // Set the height of the input field
                                    borderRadius: '21px 0px 0px 21px', // Apply the same border radius
                                },
                                '& .MuiInputLabel-root': {
                                    position: 'absolute', // Position label inside the box
                                    top: '50%',  // Align the label vertically in the middle
                                    left: '16px', // Horizontal alignment of the label
                                    transform: 'translateY(-50%)', // Center the label vertically
                                    fontSize: '14px', // Adjust the font size to fit
                                    color: 'gray', // Set label color to gray
                                },
                                '& .MuiOutlinedInput-root': {
                                    boxShadow: 'none', // Remove any box shadow
                                    '&:hover fieldset': {
                                        borderColor: 'none', // Transparent on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'none', // Transparent when focused
                                    },
                                },
                            }}
                            label="Email address"
                            variant="filled"

                        />


                        <Button
                            sx={{
                                backgroundColor: '#02033B',
                                marginTop: '44px',
                                color: '#fff',
                                width: '109.19px',
                                height: '34.39px',
                                padding: '8px 27.03px 8.39px 27.23px',
                                borderRadius: '0px 21px 21px 0px',
                            }}
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </Box>

                    {/* Second Box with Three Images in a Row */}
                    <Box
                        sx={{
                            width: '315px',
                            height: '104px',
                            marginTop: { xs: '10px', sm: '20px', md: '20px', lg: '250px'},
                            marginLeft: { xs: '-70px', sm: '-105%', md: '63%', lg: '100px'},
                            padding: '24px',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            justifyContent: 'space-between', // Align the images in a row
                            gap: '16px',
                        }}
                    >
                        <img src="images/awards/Globee-Award-2023.webp" alt="Image 1" style={{ width: '66px', height: '66px' }} />
                        <img src="images/awards/Cybersecurity-Excellence-Gold-2023.webp" alt="Image 2" style={{ width: '66px', height: '66px' }} />
                        <img src="images/awards/Global-InfoSec-Awards-Winner-for-2024-250px.png" alt="Image 3" style={{ width: '86px', height: '66px' }} />
                    </Box>
                </Box>
                </Grid>
                </Grid>
            </Box>
                        
            <Box
                sx={{
                    width: { xs: '349.86px', sm: '449.86px', md: '350px', lg: '549.86px'},
                    height: '45px',
                    top: '539px',
                    display: 'flex', // Align items in a row
                    alignItems: 'center', // Center the text vertically
                    fontFamily: 'Inter',
                    textAlign: 'left', // Align text to the left
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    color: 'white',
                    marginTop: { xs: '30px', sm: '30px', md: '-70px', lg: '30px'},
                    marginLeft:{ xs: '-28%', sm: '4%', md: '0px', lg: '0px'}
                }}
            >
                <Typography sx={{ display: 'inline', fontWeight: '400', fontSize: '12px',  lineHeight: '15px',}}>
                    Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries.
                    App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
                </Typography>
            </Box>
         
        </Box>
    );
};

export default Footer;
