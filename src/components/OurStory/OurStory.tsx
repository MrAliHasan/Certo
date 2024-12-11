/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Typography, Grid, CardContent, Card } from '@mui/material';

const OurStory = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                padding: { xs: '40px 0px', sm: '40px 0px', md: '84px 264px' },
                background: '#FFFFFF',
                justifyContent: "center",
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                alignItems: 'center',
                gap:  { xs: '0px', sm: '0px', md: '125px' },
            }}
        >
            {/* Card 1 */}
            <Grid item xs={12} sm={6}>
                <Card sx={{
                    width: '460px',
                    height: '296px',
                    borderRadius: "48px",
                    background: 'linear-gradient(180deg, #F7C95F 0%, #FDB235 100%)',

                }}
                >
                    <CardContent>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontSize: '23px',
                                fontWeight: 800,
                                lineHeight: '30px',
                                letterSpacing: '-0.48px',
                                textAlign: 'left',
                                textDecoration: 'none',
                                padding: '0px 204px 1px 0px',
                                position: 'relative',
                                top: '47px',
                                left: '48px',
                            }}
                        >
                            Read our Story
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                position: 'relative',
                                top: '82px',
                                left: '48px',
                                padding: '0px 5.17px 0px 0px',
                                width: '358px',
                            }}
                        >
                            Find out why thousands trust Certo to secure their mobile world.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left',
                                alignItems: 'center',
                                marginLeft: '-50px',
                                marginTop: '116px',
                            }}
                        >
                            <button
                                style={{
                                    display: 'inline-flex',
                                    width: 'auto',
                                    height: '50px',
                                    padding: '16px 20.95px 16px 20px',
                                    backgroundColor: '#4335DE',
                                    color: '#FFFFFF',
                                    borderRadius: '42px',
                                    border: 'none',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '15px',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    alignItems: 'center',
                                    marginLeft: '96px',
                                }}
                            >
                                {/* Text inside the button */}
                                <span>Sign in</span>

                                {/* Arrow image inside the button */}
                                <img
                                    src="/images/button-arrow-white.svg.svg"
                                    alt="arrow"
                                    style={{
                                        width: '20px', // Adjust the size of the arrow as needed
                                        height: 'auto',
                                        marginLeft: '8px', // Space between the text and the image
                                        alignSelf: 'center', // Center the image vertically
                                    }}
                                />
                            </button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} sm={6}>
                <Card sx={{ width: '308px', height: '296px', boxShadow: 'none', 
                    justifyContent: 'left',
                    textAlign: 'left',
                    alignItems: 'left',
                 }}>
                    <CardContent>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontSize: '23px',
                                fontWeight: 800,
                                lineHeight: '30px',
                                letterSpacing: '-0.48px',
                                textAlign: 'left',
                                textDecoration: 'none',
                                padding: '0px 204px 1px 0px',
                                position: 'relative',
                                top: '47px',
                                left: '48px',
                                width: '340px',
                                height: '31px',
                            }}
                        >
                            Help Center
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                lineHeight: '24px',
                                position: 'relative',
                                top: '77px',
                                left: '48px',
                                padding: '0px 5.17px 0px 0px',
                                width: '212px',
                                height: '48px',
                            }}
                        >
                            Help topics, getting started guides and FAQs.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left',
                                alignItems: 'center',
                                marginLeft: '-50px',
                                marginTop: '116px',
                            }}
                        >
                            <button
                                style={{
                                    display: 'inline-flex',
                                    width: 'auto',
                                    height: '50px',
                                    padding: '16px 20.95px 16px 20px',
                                    boxShadow: '0px 0px 0px 2px #02033B inset',
                                    background: '#FFFFFF01',
                                    borderRadius: '42px',
                                    border: 'none',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '15px',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    alignItems: 'center',
                                    marginLeft: '96px',
                                }}
                            >
                                {/* Text inside the button */}
                                <span>Visit help center</span>
                            </button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

        </Box>
    );
};

export default OurStory;