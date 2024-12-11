/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const MissionStatement = () => {
    return (
        <Box
            sx={{
                background: '#FFFFFF',
                width: '100%',
                height: '664px',
                padding: { xs: '26px 12px', sm: '44px 32px', md: '64px 112px', lg: '84px 132px' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
                    gap: '20px',
                    justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
                    alignItems: { xs: 'center', sm: 'center', md: 'stretch' },
                    height: 'auto',
                }}
            >
                {/* Text Box */}
                <Box
                    sx={{
                        flex: { xs: 'none', md: 1 },
                        width: '100%',
                        height: 'auto',
                        padding: '16px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                >
                    {/* Inner Box for 'Loved by' Text */}

                    <Typography
                        sx={{
                            width: { xs: '400px', sm: '400px', md: '446px' },
                            //marginLeft: { xs: '-110px', sm: '-90px', md: '1px'},
                            //marginTop: { xs: '-50px', md: '-30px', lg: '0px'},
                            fontFamily: 'Inter',
                            fontSize: { xs: '29px', sm: '30px', md: '36px' },
                            fontWeight: 800,
                            lineHeight: '45px',
                            letterSpacing: '-0.72px',
                            textAlign: { xs: 'left', sm: 'left', md: 'left' },
                            textDecorationSkipInk: 'none',
                            textUnderlinePosition: 'from-font',
                        }}
                    >
                        At Certo, mobile security is not an afterthought, it’s what we do.
                    </Typography>

                    <Typography
                        sx={{
                            width: { xs: '400px', sm: '410px', md: '448px' },
                            marginTop: { xs: '26px', md: '36px', lg: '43px' },
                            fontFamily: 'Inter',
                            fontSize: { xs: '16px', sm: '18px', md: '20px' },
                            fontWeight: 400,
                            lineHeight: '30px',
                            letterSpacing: '-0.72px',
                            textAlign: { xs: 'left', sm: 'left', md: 'left' },
                            textDecorationSkipInk: 'none',
                            textUnderlinePosition: 'from-font',
                        }}
                    >
                        With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.
                    </Typography>

                    {/* Buttons */}
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '110%', md: '603.5px' },
                            height: 'auto',
                            padding: { xs: '24px  0px', md: '96px 0px 0px 0px' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: { xs: 'flex-start', sm: 'flex-start' },
                            alignItems: 'flex-start',
                            gap: '24px',
                            marginTop: { xs: '30px', sm: '20px', md: '-30px' },
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

                </Box>
                {/* Text Box End  */}


                {/* Image Box */}
                <Box
                    sx={{
                        flex: { xs: 'none', md: 1 },
                        width: '100%',  // Make the box responsive
                        maxWidth: '468px',  // Limit max width of the box
                        height: 'auto',  // Allow height to adjust according to aspect ratio
                        display: 'flex',  // Flexbox to center the content
                        justifyContent: 'center',  // Center the image horizontally
                        alignItems: 'center',  // Center the image vertically
                        overflow: 'hidden',  // Prevent overflow of the image
                        minWidth: '300px',  // Ensure a minimum width for the container
                        minHeight: '300px', // Ensure a minimum height for the container
                        '@media (min-width: 1000px) and (max-width: 1201px)': {
                            marginLeft: '-20%', // Apply margin-left for screen sizes between 1000px and 1201px
                        },
                        '@media (min-width: 952px) and (max-width: 999px)': {
                            marginLeft: '-20%', // Apply margin-left for screen sizes between 952px and 999px
                        },
                        '@media (min-width: 899px) and (max-width: 952px)': {
                            marginLeft: '-28%', // Apply margin-left for screen sizes between 899px and 951px
                        },
                        
                    }}
                >
                    <Box
                        sx = {{
                            padding: '7px 14px 7px 0px',
                            backgroundColor: '#FFC247',
                            borderRadius: { xs: '50%', sm: '50%', md: '0px' },
                        }}
                        
                    >
                        <Box
                            component="img"
                            src="/images/AdobeStock_350132639-scaled-2.jpeg.png"
                            alt="Right Arrow"
                            sx = {{
                                borderRadius: { xs: '50%', sm: '50%', md: '0px' },
                            }}
                            style={{
                                width: '100%',  // Make image width responsive
                                height: 'auto',  // Maintain aspect ratio
                                objectFit: 'contain',  // Scale without cropping
                                maxWidth: '468px',  // Image width should not exceed container width
                                maxHeight: '468px',  // Image height should not exceed container height
                                minWidth: '300px',  // Minimum width for the image
                                minHeight: '300px',  // Minimum height for the image
                                
                            }}
                        />
                    </Box>
                </Box>


            </Box>
        </Box>
    );
};

export default MissionStatement;
