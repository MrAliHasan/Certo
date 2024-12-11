import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonialsData = [
    {
        stars: 5,
        text: "Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app to everyone.",
        name: "colinandmandy94",
    },
    {
        stars: 5,
        text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check.is a great bonus. Check any email of they’ve ever been named in a data breach from years ago. Sweet tool. Love it highly recommend.",
        name: "Jennifer Black",
    },
    {
        stars: 5,
        text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and very responsive.",
        name: "Phillip Colligan",
    },
    {
        stars: 5,
        text: "I wish they had a VPN, I’d be signing up for that too. Apart from that the app is top notch. I had Certo on my last phone and it was the first app I put on this phone when I got it from the store. The scanner and other parts of the app are really easy and simple to use, even for a non-techie like me",
        name: "Leslie Carrillo",
    },
    {
        stars: 5,
        text: "My son who works in IT suggested I try this app after I was getting lots of strange messages and things happening on my phone. Since running it once a week I have had no viruses or malware problems. I also got a VPN app so I think with both I’m all set!",
        name: "Emily Davis",
    },
];

const featuredImages = [
    'images/FeaturedImages/cnbc-blue-2.svg.svg',
    'images/FeaturedImages/new-york-post-blue-2.svg.svg',
    'images/FeaturedImages/financial-times-blue-2.svg.svg',
    'images/FeaturedImages/readers-digest-blue-2.svg.svg',
    'images/FeaturedImages/zd-net-blue-2.svg.svg',
    'images/FeaturedImages/wired-blue-2.svg.svg',
];

const Testimonials = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'row' },
                justifyContent: 'space-between',
                position: 'relative',
                background: 'linear-gradient(180deg, #F7C95F 0%, #FDB235 100%)',
                width: '100%',
                height: '802px',
                marginTop: { xs: '-40px', sm: '-200px', md: '-100px', lg: '-10px' },
            }}
        >
            {/* Inner Box for 'Loved by' Text */}
            <Box
                sx={{
                    width: { xs: '450px', sm: '500px', md: '609px' },
                    height: '91px',
                    position: 'absolute',
                    top: { xs: '40px', sm: '55px', md: '83px' },
                    left: { xs: '40px', sm: '45px', md: '96px' },
                    padding: '0px 45.58px 1px 0px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        width: '563.42px',
                        height: '90px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: { xs: '26px', sm: '30px', md: '36px' },
                        fontWeight: 800,
                        lineHeight: '45px',
                        letterSpacing: '-0.72px',
                        textAlign: 'left',
                        textDecorationSkipInk: 'none',
                        textUnderlinePosition: 'from-font',
                    }}
                >
                    Loved by thousands of iPhone and Android users alike
                </Typography>
            </Box>

            {/* Horizontal Scrollable Cards */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '200px',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '24px',
                    overflowX: 'auto',
                    width: '100%',
                    padding: '20px 0',
                    scrollbarWidth: 'none', // Hide scrollbar for Firefox
                    '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for Chrome, Edge, Safari
                }}
            >
                {/* Dynamic Cards */}
                {testimonialsData.map((testimonial, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: { xs: '350px', sm: '350px', md: '400px' },
                            height: 'auto',
                            borderRadius: '48px',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '12px 12px 20px 0px #0000001A',
                            padding: '36px 20px',
                            flexShrink: 0, // Prevent shrinking in horizontal scroll
                        }}
                    >
                        <CardContent>
                            {/* Stars Box */}
                            <Box sx={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                                {Array.from({ length: testimonial.stars }).map((_, i) => (
                                    <StarIcon key={i} sx={{ color: '#FFC107' }} />
                                ))}
                            </Box>

                            {/* Rating Text */}
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontSize: { xs: '13px', sm: '14px', md: '16px' },
                                    fontWeight: 400,
                                    marginBottom: '16px',
                                    lineHeight: '20px',
                                    color: '#02033B',
                                }}
                            >
                                {testimonial.text}
                            </Typography>

                            {/* User Name */}
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    marginTop: '24px',
                                    fontSize: '15px',
                                    lineHeight: '20px',
                                    fontWeight: '800',
                                    color: '#02033B',
                                }}
                            >
                                {testimonial.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Featured In Section */}
            <Box
                sx={{
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center', md: 'center' }, // Align items to the left on small screens
                    marginLeft: { xs: '1px', sm: '1px', md: '2px', lg: '96px' },
                    justifyContent: 'flex-start', // Align items to the start (left)
                    padding: '0px',
                    marginTop: '623px', 
                    position: 'relative',
                }}
            >
                {/* Typography for 'Featured in:' */}
                <Box
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '23px',
                        fontWeight: 800,
                        lineHeight: '30px',
                        letterSpacing: '-0.48px',
                        textAlign: { xs: 'left', sm: 'left', md: 'left' },
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        marginBottom: { xs: '25px', sm: '25px', md: '0px' },
                        marginRight: { xs: '1px', sm: '1px', md: '3px', lg: '73px' },
                    }}
                >
                    Featured:
                </Box>

                {/* Box for Images */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: '36px',
                        overflowX: 'auto !important',
                        textAlign: 'center',
                        paddingBottom: '20px !important',
                        width: '100%', 
                        maxWidth: '100vw',
                        '&::-webkit-scrollbar': {
                            display: 'none', // Hide scrollbar for Webkit-based browsers
                        },
                        scrollbarWidth: 'none', // Hide scrollbar for Firefox
                    }}
                >
                    {featuredImages.map((filename, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={`${filename}`}
                            alt={`Featured logo ${index + 1}`}
                            sx={{
                                width: '130px',  // Ensure images are wide enough to overflow
                                height: '95px',
                                flexShrink: 0,   // Prevent images from shrinking
                            }}
                        />
                    ))}
                </Box>

            </Box>


        </Box>
    );
};

export default Testimonials;
