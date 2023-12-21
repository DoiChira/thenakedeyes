import React from 'react';
import { Box, Button, Container, Typography, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Heading from "../components/shared/Heading";

const Contact = () => {
  return (
    <section>
      <Container maxWidth="xl" className="mt-20 pt-20">
        <Heading heading="Contact Us" />
        <Box className="md:flex md:justify-between md:items-center max-w-md mx-auto text-center md:text-left">
          <Box>
            <Typography variant="body1" className="p-2">
              <Link href="tel:+1234567890" color="inherit" underline="none">
                <CallOutlinedIcon /> +1234567890
              </Link>
            </Typography>

            <Typography variant="body1" className="p-2">
              <Link href="mailto:recipient@example.com" color="inherit" underline="none">
                <EmailOutlinedIcon /> example@example.com
              </Link>
            </Typography>
          </Box>
          <Box className="mt-8 md:mt-0">
            <Button
              variant="contained"
              color="success"
              size="large"
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<WhatsAppIcon />}
              className="bg-green-900"
            >
              WhatsApp
            </Button>
          </Box>
        </Box>
      </Container>
     
        <Container maxWidth="lg">
          <Box className="mt-20">
            <iframe
              title='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.768558226469!2d91.58347187628601!3d26.106472677136935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a4142182c00c1%3A0x69ba1fb4e82844d8!2sLokpriya%20Gopinath%20Bordoloi%20International%20Airport!5e0!3m2!1sen!2sin!4v1702713457448!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border:0, borderRadius: "4px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.1)" }}
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Container>
      
    </section>
  );
};

export default Contact;