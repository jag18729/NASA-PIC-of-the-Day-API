import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';

function AstronomyPictureOfTheDay() {
    const [pictureData, setPictureData] = useState(null);

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_NASA_API_KEY;
        const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

        axios.get(APOD_URL)
            .then((response) => {
                setPictureData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
            alignItems="center"
            justifyContent="space-between"
        >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        NASA Astronomy Picture of the Day
                    </Typography>
                </Toolbar>
            </AppBar>

            {pictureData && (
                <Card>
                    <CardMedia 
                        component="img"
                        image={pictureData.url}
                        title={pictureData.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pictureData.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {pictureData.explanation}
                        </Typography>
                    </CardContent>
                </Card>
            )}

            <Box padding={2} maxWidth={800}>
                <Typography variant="h6" paragraph>
                    The Practical Use of APIs
                </Typography>
                <Typography variant="body1" paragraph>
                    This web application uses the NASA Astronomy Picture of the Day API to fetch and display an image or video each day with an explanation. APIs (Application Programming Interfaces) are tools that allow different software applications to communicate and share data with each other. They are crucial in developing dynamic and interactive web applications, like this one.
                </Typography>
                <Typography variant="body1">
                    Special thanks to NASA for providing this valuable resource.
                </Typography>
            </Box>

            <footer style={{ padding: '10px', backgroundColor: '#3f51b5', color: 'white', width: '100%', textAlign: 'center' }}>
                <Typography variant="body1">Made with ❤️ by Rafael G.</Typography>
            </footer>
        </Box>
    );
}

export default AstronomyPictureOfTheDay;
