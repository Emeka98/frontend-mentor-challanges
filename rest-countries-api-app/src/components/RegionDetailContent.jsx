import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../data/data.json";

function RegionDetailContent() {
  const [filtered, setFiltered] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const filteredData = Data?.filter((region) => region.name === id);
    setFiltered(filteredData);
  }, [Data, id]);

  function getName(alpha3Code) {
    const country = Data.find((country) => country.alpha3Code === alpha3Code);
    return country ? country.name : alpha3Code;
  }

  return (
    <div className="region-detail-content container">
      <section className="left-side">
        <Link className="link" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
              fill="#111517"
            />
          </svg>
          Back
        </Link>

        <div className="detail-img-wrapper">
          <img
            src={filtered[0]?.flags.svg}
            alt={`${filtered[0]?.name} flags`}
          />
        </div>
      </section>

      <section className="right-side">
        <div className="detail-content">
          <div className="detail-left">
            <h4 className="region-title">{filtered[0]?.name}</h4>
            <h6>
              <span className="bold">Native Name: </span>
              {filtered[0]?.nativeName}
            </h6>
            <h6>
              <span className="bold">Population: </span>
              {filtered[0]?.population.toLocaleString()}
            </h6>
            <h6>
              <span className="bold">Europe: </span>
              {filtered[0]?.region}
            </h6>
            <h6>
              <span className="bold">Sub Region: </span>
              {filtered[0]?.subregion}
            </h6>
            <h6>
              <span className="bold">Capital: </span>
              {filtered[0]?.capital}
            </h6>
          </div>
          <div className="detail-right">
            <h6>
              <span className="bold">Top Level Domain: </span>
              {filtered[0]?.topLevelDomain}
            </h6>
            <h6>
              <span className="bold">Currencies: </span>
              {filtered[0]?.currencies?.map((currency, index) => (
                <span key={index}>{currency.name}</span>
              ))}
            </h6>
            <h6>
              <span className="bold">Languages: </span>
              {filtered[0]?.languages.map((language, index) => (
                <span key={index}>
                  {language.name}
                  {index !== filtered[0]?.languages.length - 1 ? ", " : ""}
                </span>
              ))}
            </h6>
          </div>
        </div>
        <div className="border-countries">
          <h3 className="theme-title">Border Countries:</h3>
          {filtered[0]?.borders?.map((border, index) => (
            <Link
              to={`/country/${getName(border)}`}
              key={index}
              className="country-link"
            >
              {getName(border)}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RegionDetailContent;
