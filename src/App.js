import { useEffect, useState } from "react";
import styled from "styled-components";

const MovieCase = styled.ul`
display: grid;
grid-template-columns: repeat(10, 1fr);
gap: 10px;
list-style: none;
margin: 0 100px;
`

const MovieItm = styled.li`
`

const Img = styled.img`
max-width: 100%;
`

const App = () => {

  const [movie, setMovie] = useState([]);
  const [num, Setnum] = useState(1);

  const getMovie = async () => {

    const r = await fetch("https://yts.mx/api/v2/list_movies.json?limit=50&page=${num}").then(d => d.json());
    setMovie(r.data.movies)
  }

  useEffect(() => {
    getMovie();
  }, [num])
  console.log(movie)

  return <>ㅎㅇ
    <button onClick={() => Setnum(1)}>1</button>
    <button onClick={() => Setnum(2)}>2</button>
    <button onClick={() => Setnum(3)}>3</button>
    <button onClick={() => Setnum(4)}>4</button>
    <button onClick={() => Setnum(5)}>5</button>
    <MovieCase>
      {
        movie.map(itm => {
          return (

            <MovieItm key={itm.id}>
              <Img src={itm.large_cover_image} alt="" /> {itm.title}
            </MovieItm>

          )
        })
      }
    </MovieCase>

  </>
}

export default App;