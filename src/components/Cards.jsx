import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "react-bootstrap/Button";
import Typography from "@mui/material/Typography";

const Cards = () => {
  return (
    <div className="container mt-5 ">
      <div>
        <h1 className="text-center fw-bold fs-2">Top Destinations</h1>
        <div className="row g-3 mt-5 ">
          <div className="col-lg-3 col-sm-12 col-md-6">
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image="https://www.hlimg.com/images/stories/738X538/taj%20mahal_1434367304u20.jpg?w=480&dpr=2.6"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tag Mahal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vel elit aliquam, maximus mauris tempus, placerat elit.
                  Fusce orci justo, feugiat ac euismod at, pharetra eu erat.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="info">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image="https://blog.raynatours.com/wp-content/uploads/2023/07/Eiffel-Tower-Banner-1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Eiffel Tower
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vel elit aliquam, maximus mauris tempus, placerat elit.
                  Fusce orci justo, feugiat ac euismod at, pharetra eu erat.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="info">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image="https://www.signaturetownhousehydepark.co.uk/blog/wp-content/uploads/2023/02/Tower-Bridge.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  London Bridge
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vel elit aliquam, maximus mauris tempus, placerat elit.
                  Fusce orci justo, feugiat ac euismod at, pharetra eu erat.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="info">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dubai
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vel elit aliquam, maximus mauris tempus, placerat elit.
                  Fusce orci justo, feugiat ac euismod at, pharetra eu erat.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="info">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards