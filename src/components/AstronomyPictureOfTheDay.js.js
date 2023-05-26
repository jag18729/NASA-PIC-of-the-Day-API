import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

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
        <div>
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
        </div>
    );
}

export default AstronomyPictureOfTheDay;
