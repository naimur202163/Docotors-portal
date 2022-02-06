import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Services() {
    	const [user, setUser]=useState([])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setUser(data))
            
    },[])



    return <div>
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                
            </Container>
        </Box>

    </div>;
}

export default Services

