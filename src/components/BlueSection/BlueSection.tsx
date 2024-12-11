import React from "react";
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const BlueSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: '407.5px',
                padding: { xs: '56px 0px', sm: '58px 0px', md: '64px 145px', lg: '84px 345px' },
                background: 'linear-gradient(180deg, #2925CC 0%, #4B48E5 100%)',
            }}
        >
            <Box
                sx={{
                    width: '559px',
                    height: '45px',
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    margin: '0 auto'
                }}
            >
                <Typography
                    sx={{
                        width: { xs: '460px', sm: '100%', md: '100%' },
                        fontFamily: 'Inter',
                        fontSize: '34px',
                        fontWeight: 800,
                        lineHeight: '45px',
                        letterSpacing: '-0.72px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: '#FFFFFF',
                        marginLeft: { xs: '-50px', sm: '0px', md: '0px' },
                    }}
                >
                    Is someone spying on your phone?
                </Typography>
            </Box>

            <Box
                sx={{
                    width: '164px',
                    height: '30px',
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    margin: '0 auto',
                    top:'50px',
                }}
            >
                <Typography
                    sx={{
                        width: {md: '100%' },
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '30px',
                        letterSpacing: '-0.72px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: '#FFFFFF',
                        paddingTop:{ xs: '40px', sm: '0px', md: '0px' },
                    }}
                >
                    Find out with Certo
                </Typography>
            </Box>
            {/* Buttons */}
            <Box
                    sx={{
                        width: { xs: '100%', sm: '110%', md: '603.5px' },
                        height: 'auto',
                        padding: { xs: '104px  20px', md: '132px 0px 0px 0px' },
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
                        justifyContent: { xs: 'flex-start', sm: 'center' },
                        alignItems: 'center',
                        gap: '16px',
                        margin: 'auto',
                        rowGap: '20px',
                        marginTop: { xs: '20px', sm: '0px', md: '0px'}
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
                            justifyContent: 'flex-start', 
                            textDecoration: 'none',
                            padding: '12px 24px',
                            borderRadius: '42px',
                            fontFamily: 'Inter',
                            fontSize: { xs: '16px', sm: '16px', md: '19px' },
                            fontWeight: 600,
                            color: '#FFFFFF01',
                            boxShadow: '0px 0px 0px 2px #FFFFFF inset',
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
                                color: '#FFFFFF',
                            }}
                        >
                            Get Certo for Android
                        </Typography>



                    </Box>
                </Box>

                {/* Buttons end*/}
        </Box >
    );
};

export default BlueSection;