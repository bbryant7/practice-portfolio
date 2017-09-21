import React, { Component } from 'react';
import portrait from '../images/elizabeth.jpeg';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>

      <h1> About The Queen </h1>
      <img src={portrait} alt="portrait of Queen Elizabeth of England."/>
      <ul>
        <li> Lover of Corgis</li>
        <li> Ruler of Kingdoms</li>
        <li> Excellent WWII era mechanic</li>
      </ul>
      <p> Elizabeth Alexandra Mary (born 21 April 1926) has been Queen of the United Kingdom, Canada, Australia, and New Zealand since 6 February 1952. Additionally, she is Head of the Commonwealth and Queen of 12 countries that have become independent since her accession: Jamaica, Barbados, the Bahamas, Grenada, Papua New Guinea, Solomon Islands, Tuvalu, Saint Lucia, Saint Vincent and the Grenadines, Belize, Antigua and Barbuda, and Saint Kitts and Nevis. </p>

      <p>Elizabeth was born in London as the first child of the Duke and Duchess of York, later King George VI and Queen Elizabeth, and she was educated privately at home. Her father acceded to the throne on the abdication of his brother Edward VIII in 1936, from which time she was the heir presumptive. She began to undertake public duties during the Second World War, serving in the Auxiliary Territorial Service. In 1947, she married Prince Philip, Duke of Edinburgh, a former prince of Greece and Denmark, with whom she has four children: Charles, Prince of Wales; Anne, Princess Royal; Prince Andrew, Duke of York; and Prince Edward, Earl of Wessex. </p>

      <p>
      Times of personal significance have included the births and marriages of her children, her coronation in 1953, and the celebration of milestones such as her Silver, Golden, and Diamond Jubilees in 1977, 2002, and 2012, respectively. In 2017 she became the first British monarch to commemorate a Sapphire Jubilee. Moments of sorrow for her include the death of her father in 1952 at age 56; the assassination of Prince Philips uncle Lord Mountbatten in 1979; the breakdown of her childrens marriages in 1992 (her annus horribilis); the death in 1997 of her sons former wife, Diana, Princess of Wales; and the deaths of her mother and sister in 2002. Elizabeth has occasionally faced republican sentiments and press criticism of the royal family; however, support for the monarchy remains high, as does her personal popularity.
      </p>

      <p> For information about the Queen, CLICK! </p>
      <button type="submit"> <a href="https://www.royal.uk/her-majesty-the-queen"> We Want More Info! </a></button>

      </div>

    );
  }
}

export default About;
