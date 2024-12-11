import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const testimonialsData = [
    {
        title: "Signs Your Ex Is Spying On You",
        description: "In an ideal world, after a relationship ends both you and your ex will move on. But what if they can’t let go, and start spying on your...",
    },
    {
        title: "How to Remove a Hacker from Your Samsung Phone",
        description: "Samsung is the second most popular manufacturer of smartphones in the world, with a market share of 28.19% compared to Apple’s 28.43% as...",
    },
    {
        title: "Is Your Cell Phone Under Surveillance?",
        description: "In today’s surveillance state, it can feel like your every move is being watched. Although your mind may be conjuring up images of CCTV...",
    },
];

const CardImages = [
    'images/leatestInsights/syping.svg',
    'images/leatestInsights/samsung.png',
    'images/leatestInsights/camera.png',
];

const LatestInsights = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: { xs: '20px', sm: '40px', md: '60px' },
                textAlign: 'center',
            }}
        >
            {/* Heading */}
            <Box
                sx={{
                    marginTop: '20px',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: { xs: '36px', sm: '48px', md: '56px' },
                        fontWeight: '800',
                        lineHeight: '1.2',
                        textAlign: 'center',
                    }}
                >
                    Latest insights
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    padding: { xs: '52px 8px', sm: '82px 8px', md: '100px 38px', lg: '84px 192px' },
                    overflowX: 'auto',
                    display: 'flex',
                    gap: '24px',
                    justifyContent: { xs: 'left', sm: 'left', md: 'left', lg: 'center' },
                    scrollbarWidth: 'none', // Hide scrollbar for Firefox
                    '&::-webkit-scrollbar': { display: 'none' },
                }}
            >
                {testimonialsData.map((testimonial, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '320px',
                            minWidth: '320px', // Prevent shrinking in horizontal scroll
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '48px',
                            background: '#FFFFFF',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Image Box */}
                        <Box
                            sx={{
                                position: 'relative',
                                width: '320px',
                                height: '180px',
                                backgroundImage: `url(${CardImages[index]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Expertise Tag */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '24px',
                                    left: '24px',
                                    padding: '4px 8px',
                                    background: '#F3F8FF',
                                    borderRadius: '4px',
                                    fontFamily: 'Inter',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: 'black',
                                    lineHeight: '16px',
                                }}
                            >
                                Expertise
                            </Box>
                        </Box>

                        {/* Title */}
                        <Typography
                            sx={{
                                width: '205px',
                                height: '60px',
                                fontFamily: 'Inter',
                                fontSize: '23px',
                                fontWeight: '700',
                                lineHeight: '30px',
                                textAlign: 'left',
                                marginTop: '47px',
                                marginLeft: '40px',

                            }}
                        >
                            {testimonial.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                width: '240px',
                                height: '144px',
                                fontFamily: 'Inter',
                                fontSize: '15px',
                                fontWeight: '400',
                                lineHeight: '24px',
                                textAlign: 'left',
                                marginTop: '42px',
                                marginLeft: '40px',
                                marginBottom: '48px'
                            }}
                        >
                            {testimonial.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
                {/* Buttons */}
            <Box
                    sx={{
                        width: { xs: '100%', sm: '110%', md: '400.5px' },
                        height: 'auto',
                        padding: '0px',
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
                            padding: '12px 34px',
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
                                fontWeight: 700,
                                lineHeight: '22.5px',
                                whiteSpace: 'normal', // Prevent truncation
                                overflow: 'visible',
                                textOverflow: 'clip',
                                textAlign: 'left',
                                width: 'calc(100% - 0px)', // Space for the arrow
                            }}
                        >
                            View all insights
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
                </Box>

                {/* Buttons end*/}
        </Box>
    );
};

export default LatestInsights;
