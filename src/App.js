import React, { useState, useEffect } from 'react';
import './App.scss';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import FilterNav from './Components/FilterNav';
import { useSelector, useDispatch } from 'react-redux';
import { movieLists } from './Redux/actions/index';
import { genreList } from './Redux/actions/index';
import { searchList } from './Redux/actions/index';
import axios from 'axios';
import loader from './assets/loader.gif';

function App() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.Data);
  const genresList = useSelector((state) => state.genre.Data);
  const searchLists = useSelector((state) => state.search.Data);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false`;

    const resp = await axios.get(url, { mode: 'cors' });
    dispatch(movieLists(resp.data.results));
    setIsLoading(false);
  };

  const fetchGenre = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US`;

    const resp = await axios.get(url, { mode: 'cors' });
    dispatch(genreList(resp.data.genres));
    setIsLoading(false);
  };

  const searchData = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=${searchTerm}`;

    const resp = await axios.get(url, { mode: 'cors' });
    dispatch(searchList(resp.data.results));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    fetchGenre();
  }, []);

  useEffect(() => {
    searchData();
  }, [searchTerm]);
  return (
    <>
      {isLoading ? (
        <section className='loading'>
          <img src={loader} alt='loader' className='loader' />
        </section>
      ) : (
        <div className='homepage'>
          <section className='main'>
            <article className='nav-wrapper'>
              <h1>FikaSearch App</h1>

              <div className='nav-wrapper'>
                <p>Movie List</p>

                <div className='search'>
                  <input
                    type='text'
                    placeholder='search'
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                  <i class='fal fa-search'></i>
                </div>
              </div>
            </article>
            {searchTerm ? (
              <article className='movie-list'>
                <div className='movie-list-wrapper'>
                  {searchLists &&
                    searchLists.map(({ id, poster_path, title, genre_ids }) => {
                      return (
                        <Card key={id} sx={{ maxWidth: 300 }}>
                          <CardMedia
                            component='img'
                            height='450px'
                            image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt='img'
                          />
                          <CardContent className='movie-list-content'>
                            <Typography
                              gutterBottom
                              variant='p'
                              component='div'
                            >
                              Title: {title}
                            </Typography>
                            <Typography
                              className='genre-wrapper-list'
                              gutterBottom
                              variant='p'
                              component='div'
                            >
                              Genre:
                              {genresList
                                .filter((num) => genre_ids.includes(num.id))
                                .map((num) => {
                                  return (
                                    <p className='genre-loop-list'>
                                      ({num.name})
                                    </p>
                                  );
                                })}
                            </Typography>
                          </CardContent>
                        </Card>
                      );
                    })}
                </div>
              </article>
            ) : (
              <article className='movie-list'>
                <div className='movie-list-wrapper'>
                  {movieList &&
                    movieList.map(({ id, poster_path, title, genre_ids }) => {
                      return (
                        <Card key={id} sx={{ maxWidth: 300 }}>
                          <CardMedia
                            component='img'
                            height='450px'
                            image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt='img'
                          />
                          <CardContent className='movie-list-content'>
                            <Typography
                              gutterBottom
                              variant='p'
                              component='div'
                            >
                              Title: {title}
                            </Typography>
                            <Typography
                              className='genre-wrapper-list'
                              gutterBottom
                              variant='p'
                              component='div'
                            >
                              Genre:
                              {genresList
                                .filter((num) => genre_ids.includes(num.id))
                                .map((num) => {
                                  return (
                                    <p className='genre-loop-list'>
                                      ({num.name})
                                    </p>
                                  );
                                })}
                            </Typography>
                          </CardContent>
                        </Card>
                      );
                    })}
                </div>
              </article>
            )}

            <article className='view-more'>
              {/* <button>View More</button> */}
            </article>
          </section>
          <section className='filter'>
            <div className='filter-nav-wrapper'>
              <FilterNav />

              <article className='genre-wrapper'>
                <div className='header'>
                  <h5>Genre List (Quick Search)</h5>
                </div>

                <div className='genre-list'>
                  {genresList &&
                    genresList.map(({ id, name }) => {
                      return (
                        <button
                          onClick={() => setSearchTerm(name.toLowerCase())}
                          key={id}
                          className='genre-btn'
                        >
                          {name}
                        </button>
                      );
                    })}
                </div>
              </article>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default App;
