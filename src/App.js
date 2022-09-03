import React, { useState, useEffect } from 'react';
import './App.scss';
import Nav from './Components/Navigation/Nav';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FilterNav from './Components/Navigation/FilterNav';
import { useSelector, useDispatch } from 'react-redux';
import { data } from './Redux/actions/index';
import { genreList } from './Redux/actions/index';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.install.Data);
  const genresList = useSelector((state) => state.genre.Data);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false`;

    const resp = await axios.get(url, { mode: 'cors' });
    // console.log(resp.data.results);
    dispatch(data(resp.data.results));
    setLoading(false);
  };

  const fetchGenre = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US`;

    const resp = await axios.get(url, { mode: 'cors' });
    dispatch(genreList(resp.data.genres));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    fetchGenre();
  }, []);
  return (
    <div className='homepage'>
      <section className='main'>
        <article className='nav-wrapper'>
          <Nav />
        </article>
        <article className='movie-list'>
          <div className='movie-list-wrapper'>
            {movieList &&
              movieList.map(({ id, poster_path, title }) => {
                return (
                  <Card key={id} sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component='img'
                      height='450px'
                      image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt='img'
                    />
                    <CardContent className='movie-list-content'>
                      <Typography gutterBottom variant='p' component='div'>
                        Title: {title}
                      </Typography>
                      <Typography gutterBottom variant='p' component='div'>
                        Genre: Action
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
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
              {genresList &&
                genresList.map(({ id, name }) => {
                  return (
                    <button key={id} className='genre-btn'>
                      {name}
                    </button>
                  );
                })}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
