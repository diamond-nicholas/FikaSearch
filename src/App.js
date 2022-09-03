import React from 'react';
import './App.scss';
import Nav from './Components/Navigation/Nav';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FilterNav from './Components/Navigation/FilterNav';

function App() {
  return (
    <div className='homepage'>
      <section className='main'>
        <article className='nav-wrapper'>
          <Nav />
        </article>
        <article className='movie-list'>
          <div className='movie-list-wrapper'>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                height='450px'
                image='https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg'
                alt='img'
              />
              <CardContent className='movie-list-content'>
                <Typography gutterBottom variant='p' component='div'>
                  Genre: Action
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                height='450px'
                image='https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg'
                alt='img'
              />
              <CardContent className='movie-list-content'>
                <Typography gutterBottom variant='p' component='div'>
                  Genre: Action
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                height='450px'
                image='https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg'
                alt='img'
              />
              <CardContent className='movie-list-content'>
                <Typography gutterBottom variant='p' component='div'>
                  Genre: Action
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                height='450px'
                image='https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg'
                alt='img'
              />
              <CardContent className='movie-list-content'>
                <Typography gutterBottom variant='p' component='div'>
                  Genre: Action
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                height='450px'
                image='https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg'
                alt='img'
              />
              <CardContent className='movie-list-content'>
                <Typography gutterBottom variant='p' component='div'>
                  Genre: Action
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                height='450px'
                image='https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg'
                alt='img'
              />
              <CardContent className='movie-list-content'>
                <Typography gutterBottom variant='p' component='div'>
                  Genre: Action
                </Typography>
              </CardContent>
            </Card>
          </div>
        </article>

        <article className='view-more'>
          <button>View More</button>
        </article>
      </section>
      <section className='filter'>
        <div className='filter-nav-wrapper'>
          <FilterNav />

          <article className='genre-wrapper'>
            <div className='header'>
              <h5>Genres</h5>
            </div>

            <div className='genre-list'>
              <button className='genre-btn'>Action</button>
              <button className='genre-btn'>Adventure</button>
              <button className='genre-btn'>Animation</button>
              <button className='genre-btn'>Comedy</button>
              <button className='genre-btn'>Crime</button>
              <button className='genre-btn'>Documentary</button>
              <button className='genre-btn'>Drama</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
