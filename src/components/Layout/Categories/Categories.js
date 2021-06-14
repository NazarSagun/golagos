import React from 'react';

import Beaches from './categoryLayout/Beaches/Beaches';
import Activities from './categoryLayout/Activities/Activities';
import Shops from './categoryLayout/Shop/Shops';
import RealEstate from './categoryLayout/RealEstate/RealEstate';
import Point from './categoryLayout/Points/Point';
import Learn from './categoryLayout/Learn/Learn';
import Accomodation from './categoryLayout/Accomodation/Accomodation';

class Categories extends React.Component {

  // renderCategory = () => {
  //   if (location === 'Beaches' || 'Praias' || 'Strände' || 'Plages' || 'Пляжи') {
  //     return <Beaches />
  //   } else if (location === 'Activities' || 'Aktivitäten' || 'Actividades' || 'Activités' || 'Активности') {
  //     return <Activities />
  //   } else if (location === 'Real Estate' || 'Недвижимость' || 'Immobilier' || 'Imobiliário' || 'Liegenschaften') {
  //     return <RealEstate />
  //   } else if (location === 'Points of Interest' || "Points d'intérêt" || 'Pontos de interesse' || 'Interessante Punkte' || 'Интересные места') {
  //     return <Point />
  //   } else if (location === 'To Learn' || 'Apprendre' || 'Aprender' || 'Lernen' || 'Занятия') {
  //     return <Learn />
  //   } else if (location === 'Accomodations' || 'Hébergement' || 'Acomodação' || 'Übernachtung' || 'Оренда жилья') {
  //     return <Accomodation />
  //   } else if (location === 'Shopping' || 'Einkaufen' || 'Compras' || 'Achats' || 'Покупки') {
  //     return <Shops />
  //   }
  // }

  renderCategory = () => {

    const location = this.props.match.params.name;
    const beach = ['Beaches', 'Praias', 'Strände', 'Plages', 'Пляжи'];
    const activities = ['Activities', 'Aktivitäten', 'Actividades', 'Activités', 'Активности'];
    const estate = ['Real Estate', 'Недвижимость', 'Immobilier', 'Imobiliário', 'Liegenschaften'];
    const points = ['Points of Interest', "Points d'intérêt", 'Pontos de interesse', 'Interessante Punkte', 'Интересные места'];
    const learn = ['To Learn', 'Apprendre', 'Aprender', 'Lernen', 'Занятия'];
    const accomodation = ['Accomodation', 'Hébergement', 'Acomodação', 'Übernachtung', 'Оренда жилья'];
    const shops = ['Shopping', 'Einkaufen', 'Compras', 'Achats', 'Покупки'];

    if (location === beach[0] || location === beach[1] || location === beach[2] || location === beach[3] || location === beach[4]) {
      return <Beaches />
    } else if (location === activities[0] || location === activities[1] || location === activities[2] || location === activities[3] || location === activities[4]) {
      return <Activities />
    } else if (location === estate[0] || location === estate[1] || location === estate[2] || location === estate[3] || location === estate[4]) {
      return <RealEstate />
    } else if (location === points[0] || location === points[1] || location === points[2] || location === points[3] || location === points[4]) {
      return <Point />
    } else if (location === learn[0] || location === learn[1] || location === learn[2] || location === learn[3] || location === learn[4]) {
      return <Learn />
    } else if (location === accomodation[0] || location === accomodation[1] || location === accomodation[2] || location === accomodation[3] || location === accomodation[4]) {
      return <Accomodation />
    } else if (location === shops[0] || location === shops[1] || location === shops[2] || location === shops[3] || location === shops[4]) {
      return <Shops />
    }
  }

  render() {
    return (
      <div>
        {this.renderCategory()}
      </div>
    )
  }
}

export default Categories;