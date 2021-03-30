
//STYLEGUIDE RANKED BEERS (LINES 17-34)//

render(){
    return(
        <div className="style__container">
             <div className="style__info">
            <img className="style__feature" src={IPA} alt='IPA'/>
            <h1 className="style__description">DESCRIPTION</h1>
            <h1 className="style__serving">SERVING GUIDELINES</h1>
            <h1 className="style__food">FOOD PAIRINGS</h1>
        </div>
        <div className="header__container">
            <h1 className="header__title">TOP RANKED BEERS</h1>
            <img className="header__image" src={Untappd} alt='Untappd'/>
        </div>
        <div className="style__card">
            {this.state.beers.map((beer)=>(
                <Link style={{ textDecoration: 'none' }}>
                <div className="style__ranked">
                
                    <div className="card__detailTop">                     
                        <h4 className="style__name">{beer.beerName}</h4>
                    </div>
                    <div className="card__detailBottom">
                        <h4 className="style__brewer">{beer.brewery}</h4>
                    </div>
                    <div className="card__image">
                        <img className='style__label' src={beer.label} alt={beer.beerName}/>
                    </div>
                    <div className="card__bottom">
                        <h4 className="style__rating">{beer.rating}</h4>
                    </div>
                </div>
                </Link>
            ))}       
        </div>
        </div>
        );
    }
    }