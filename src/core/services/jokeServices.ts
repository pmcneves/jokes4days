import axios from 'axios';

class JokeServices {
  private url = 'https://v2.jokeapi.dev/joke';

  public getNewJoke = (category = 'Any') => axios.get<any>(`${this.url}/${category}`).then((res) => res.data);
}

const jokeServices = new JokeServices();
export default jokeServices;
