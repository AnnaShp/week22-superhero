import './Superhero.css'

function SuperHero(props) {
    // const { name, universe, alterego, occupation, friends, superpowers, url, info } = this.props;
    return (
        <div className="hero-card">
            <h2 className='hero-name'> {props.name}</h2>
            <div className='hero-universe'>Вселенная: {props.universe}</div>
            <div className='hero-alterego'>Альтер-эго: {props.alterego}</div>
            <div className='hero-occupation'>Род Деятельности: {props.occupation}</div>
            <div className='hero-friends'>Друзья: {props.friends}</div>
            <div className='hero-superpowers'> {props.superpowers}</div>
            <img src={props.url} />
            <div className='hero-info'>Суперсилы: {props.info}</div>
        </div>
    );
}

export default SuperHero;
