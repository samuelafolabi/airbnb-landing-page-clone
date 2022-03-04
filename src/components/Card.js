function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}

      <img src={`../images/${props.coverImg}`} alt="go" className="card__img" />

      <div className="card__stats">
        <img src="../images/star.png" alt="go" className="card__star" />
        <span>{props.rating}</span>
        <span className="u-grey">({props.stats.reviewCount}) • </span>
        <span className="u-grey">{props.location}</span>
      </div>

      <p className="card__title">{props.title}</p>
      <p>
        <span className="u-bold">From ${props.price} </span>/ person
      </p>
    </div>
  );
}

// function Card() {
//     return (
//       <div className="card">
//         <img src={ketieZaferes} className="card__img" />

//         <div className="card__stats">
//           <img src={star} className="card__star" />
//           <span>5.0</span>
//           <span className="u-grey">(6) • </span>
//           <span className="u-grey">USA</span>
//         </div>

//         <p>Life Lessons with Katie Zaferes</p>
//         <p>
//           <span className="u-bold">From $136 </span>/ person
//         </p>
//       </div>
//     );
//   }

// ../images/${props.img}

export default Card;
