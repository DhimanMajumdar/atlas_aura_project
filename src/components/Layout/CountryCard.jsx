import { NavLink } from "react-router-dom";
import { FaYoutube } from "react-icons/fa"; // Import YouTube icon

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  // Function to generate YouTube search URL with autoplay
  const getYouTubeSearchUrl = (countryName) => {
    const query = encodeURIComponent(`${countryName} travel guide`);
    return `https://www.youtube.com/results?search_query=${query}&autoplay=1`;
  };

  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <div className="image-wrapper">
          <img src={flags.svg} alt={flags.alt} />
          <a
            href={getYouTubeSearchUrl(name.common)}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-button"
          >
            <FaYoutube />
          </a>
        </div>

        <div className="countryInfo">
          <p className="card-title">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
