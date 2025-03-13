import Spinner from "./Spinner";
import Message from "./Message";

import styles from "./Countrylist.module.css";
import CountryItem from "./CountryItem";
function Countrylist({ cities, isloading }) {
  if (isloading) return <Spinner />;
  if (!cities)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  console.log(cities);

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default Countrylist;
