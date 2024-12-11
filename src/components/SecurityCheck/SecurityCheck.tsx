import React from "react";
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';

const items = [
    {
        image: "images/SecurityImages/spyware-detection-loading.png.svg", // Replace with actual image URL
        name: "Spyware Detection",
        text: "Our advanced spyware detection engine can identify if a device contains spyware or bugging software.",
    },
    {
        image: "images/SecurityImages/keylogger-detection-loading.png.svg",
        name: "Keylogger Detection",
        text: "Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).",
    },
    {
        image: "images/SecurityImages/find-tracking-apps-loading.png.svg",
        name: "Find Tracking Apps",
        text: "Check which apps can access your location, microphone, or camera. Get alerted if a tracking app is installed.",
    },
    {
        image: "images/SecurityImages/os-integrity-check-loading.png.svg",
        name: "OS Integrity Check",
        text: "Analyze your OS for signs of tampering that could compromise security, such as Jailbreaking.",
    },
    {
        image: "images/SecurityImages/threat-removal-loading.png.svg",
        name: "Threat Removal",
        text: "Our intelligent scan will either safely remove threats or provide easy-to-follow instructions.",
    },
    {
        image: "images/SecurityImages/easy-to-use-loading.png.svg",
        name: "Easy to Use",
        text: "We create easy-to-use apps that can check your device for vulnerabilities in minutes.",
    },
];


const SecurityCheck = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: '2260px', sm: '1372px', md: '1202px' },
                padding: { xs: '40px 16px', sm: '40px 32px', md: '44px 0px', lg: '84px 300px' },
                background: 'linear-gradient(180deg, #F3F8FF 0%, #E7EFFA 100%)',
                marginTop: { xs: '400px', sm: '420px', md: '0px' },
                display: "flex", 
                flexDirection: "column",
                alignItems: "center", 
                textAlign: "center",
            }}
        >
            <Box
                sx={{
                    width: 'auto',
                    height: '91px',
                    padding: '1px',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{
                        width: { xs: "90%", sm: "600px", md: "739px" }, 
                        height: '90px',
                        fontFamily: 'Inter',
                        fontSize: { xs: "24px", sm: "32px", md: "36px" }, 
                        fontWeight: 800,
                        lineHeight: '45px',
                        letterSpacing: '-0.72px',
                        textAlign: 'center',
                    }}
                >
                    Get your freedom back, stop mobile spyware today
                </Typography>
            </Box>

            {/* Card */}
            <Box
                sx={{
                    width: { xs: "90%", sm: "600px", md: "840px" },
                    height: "auto",
                    marginTop: "72px",
                    borderRadius: "48px",
                    background: "#FFFFFF",
                    boxShadow: "12px 12px 20px 0px rgba(0, 0, 0, 0.1)",
                    marginBottom: '72px',
                    paddingBottom: {  sm: "0px", md: "100px" },

                }}
            >
                {/* Grid Container */}
                <Grid container spacing={2} justifyContent="center">
                    {items.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "200px",
                                height: "265px",
                                padding: "0px 1.66px",
                                borderRadius: "16px",
                                gap: "10px",
                                marginBottom: {
                                    xs: "18px",
                                    sm: "18px", 
                                    md: index < 3 ? "72px" : "0px", 
                                },
                                justifyContent: "space-between",
                            }}
                        >
                            {/* Image */}
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.name}
                                sx={{
                                    width: "72px",
                                    height: "72px",
                                    objectFit: "contain",
                                    marginTop: '72px',
                                }}
                            />

                            {/* Name */}
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    width: "auto",
                                    height: "25px",
                                    top: '96px',
                                    fontWeight: "800",
                                    fontSize: "19px",
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                {item.name}
                            </Typography>

                            {/* Text */}
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: "400",
                                    width: "75%",
                                    height: "120px",
                                    fontSize: "16px",
                                    textAlign: "center",
                                    color: "#02033B",
                                    top: '145px',
                                    left: '1.86px',
                                    marginTop: '24px',
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                {/* Buttons */}
                <Box
                    sx={{
                        width: { xs: '100%', sm: '110%', md: '603.5px' },
                        height: 'auto',
                        padding: { xs: '104px  20px', md: '132px 0px 0px 0px' },
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
                        justifyContent: { xs: 'flex-start', sm: 'flex-start' },
                        alignItems: 'center',
                        gap: '16px',
                        margin: 'auto',
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
            {/* Card End here */}
        </Box>
    );
};

export default SecurityCheck;
