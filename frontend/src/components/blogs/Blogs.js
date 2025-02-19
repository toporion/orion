import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaCodeBranch } from 'react-icons/fa'; // Importing icons

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetching the JSON file
        fetch('blogs.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setBlogs(data); // Setting the fetched data to state
            })
            .catch((error) => {
                console.error('Error fetching the data:', error);
            });
    }, []);

    // Function to select relevant icon based on the title
    const getIcon = (title) => {
        switch (title) {
            case 'Custom Website Development':
                return <FaLaptopCode className='text-blue-700' size={80} />;
            case 'E-commerce Website Development':
                return <FaShoppingCart className='text-blue-700' size={80} />;
            case 'Responsive Web Design':
                return <FaMobileAlt className='text-blue-700' size={80} />;
            case 'Web Application Development':
                return <FaCodeBranch className='text-blue-700' size={80} />;
            default:
                return null;
        }
    };

    return (
        <div className='bg-slate-300 px-10 max-w-[90%] mx-auto'>
            <div className='py-14 '>
                <p className='text-lg text-center flex justify-center text-blue-600'><GoDotFill className='text-2xl' />Our Services<GoDotFill className='text-2xl' /></p>
                <h1 className='text-center text-3xl mb-8 text-black font-semibold fugaz-one-regular'>Our Web Services for Business</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        blogs.map(card => (
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    height: 300, // Fixing the card height
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                                key={card.id}
                            >
                                <CardActionArea>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px' }}>
                                        {getIcon(card.title)} {/* Displaying relevant icon */}
                                    </div>
                                    <CardContent sx={{ paddingBottom: '8px' }}>
                                        <Typography gutterBottom variant="h5" component="div" noWrap>
                                            {card.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            {card.details.map(detail => <p>{detail.description}</p>)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link to="/services"><Button size="small" color="primary">
                                        Read More
                                    </Button></Link>
                                </CardActions>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;
