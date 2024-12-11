/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Box, Typography, IconButton, Accordion, AccordionSummary, AccordionDetails, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScreenSmall = useMediaQuery('(max-width: 1200px)');

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu visibility
  };

  const [accordionExpanded, setAccordionExpanded] = useState(false); // State to track accordion expansion

  // Handle Accordion Expansion Toggle
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAccordionChange = (event: any, isExpanded: boolean | ((prevState: boolean) => boolean)) => {
    setAccordionExpanded(isExpanded); // Set state for accordion expansion
  };

  return (
    <Box
      sx={{
        height: '102px',
        backgroundColor: '#F3F8FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isScreenSmall ? '24px 20px' : '24px 120px',
        width: '100%',
        position: 'sticky',
        top: '0px',
        zIndex: 9999,
      }}
    >
      {/* Logo (smaller on small screens) */}
      <img
        src="/images/logo.svg.svg"
        alt="Logo"
        style={{
          height: isScreenSmall ? '40px' : '54px',
          transition: 'height 0.3s ease', // Smooth transition for logo resize
        }}
      />

      {/* Navbar */}
      {!isScreenSmall ? (
        // Desktop Navbar
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '41px',
            marginLeft: 'auto', 
          }}
        >
          {['iPhone', 'Android', 'Help'].map((item) => (
            <Typography
              key={item}
              variant="body1"
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '19px',
                fontWeight: 800,
                lineHeight: '25px',
                textAlign: 'left',
                textDecorationSkipInk: 'none',
                cursor: 'pointer',
                '&:hover': {
                  color: '#4d4dff',
                },
              }}
            >
              {item}
            </Typography>
          ))}

          {/* Accordion for "Company" */}
          <Accordion
        sx={{
          boxShadow: 'none', 
          backgroundColor: '#F3F8FF',
          position: 'relative',
          '&:before': {
            display: 'none', // Remove the default border
          },
          maxHeight: accordionExpanded ? '65px' : '60px', 
        }}
        expanded={accordionExpanded} // Controlled expansion based on state
        onChange={handleAccordionChange} // Handle the expansion state change
      >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                padding: '0', 
                minHeight: 'unset',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '19px',
                  fontWeight: 800,
                  lineHeight: '25px',
                  textAlign: 'left',
                  textDecorationSkipInk: 'none',
                  cursor: 'pointer',
                }}
              >
                Company
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: '8px 0', 
                marginTop: '0', 
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '22px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#4d4dff',
                  },
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '22px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#4d4dff',
                  },
                }}
              >
                Careers
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '22px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#4d4dff',
                  },
                }}
              >
                Contact
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ) : (
        // Mobile Navbar (Hamburger Menu)
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <IconButton
            onClick={handleMobileMenuToggle}
            sx={{
              color: '#000',
              fontSize: '40px',
            }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />} {/* Switch between menu and close icon */}
          </IconButton>
        </Box>
      )}

      {/* Mobile Menu (toggle visibility based on isMobileMenuOpen) */}
      {isScreenSmall && isMobileMenuOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: '102px',
            left: '0',
            right: '0',
            backgroundColor: '#fff',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 9999,
          }}
        >
          {['iPhone', 'Android', 'Help', 'Company'].map((item) => (
            <Typography
              key={item}
              variant="body1"
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '19px',
                fontWeight: 800,
                lineHeight: '25px',
                textAlign: 'left',
                textDecorationSkipInk: 'none',
                cursor: 'pointer',
                '&:hover': {
                  color: '#4d4dff',
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      )}

      {/* Button at the end of the header (hidden on mobile) */}
      {!isScreenSmall && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
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
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              alignItems: 'center',
              marginLeft: '96px',
            }}
          >
            Sign in
          </button>
        </Box>
      )}
    </Box>
  );
};

export default Header;
