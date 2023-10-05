import "./Superhero.css";

function SuperHero(props) {
  const {
    name,
    universe,
    alterego,
    occupation,
    friends,
    superpowers,
    url,
    info,
  } = props;
  return (
    <div className="hero-card">
      <h2 className="hero-name"> {name}</h2>
      <div className="hero-universe">Вселенная: {universe}</div>
      <div className="hero-alterego">Альтер-эго: {alterego}</div>
      <div className="hero-occupation">Род Деятельности: {occupation}</div>
      <div className="hero-friends">Друзья: {friends}</div>
      <div className="hero-superpowers"> {superpowers}</div>
      <img src={url} />
      <div className="hero-info">Суперсилы: {info}</div>
    </div>
  );
}

export default SuperHero;
