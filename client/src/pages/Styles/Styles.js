import  { Component } from 'react';
import axios from 'axios';
import StyleGuide from '../../components/StyleGuide';
import './Styles.scss'

class Styles extends Component {
    state = {
        beers: [],
        featureBeer: ""
    }

getBeerDetails = (beerId) =>{
    axios
    .get(`http://localhost:8080/beers/${beerId}`)
    .then((beerDetails) => {
        console.log('this is the beerDetails data', beerDetails.data)
        this.setState({
            featureBeer: beerDetails.data
        })
    })
}

componentDidMount(){
    axios
    .get('http://localhost:8080/beers')
    .then((beerData) => {
        console.log('this is the beerData data', beerData.data)
        this.setState({
            beers: beerData.data
        })
        return beerData.data[0].id
        })
        .then((firstBeerId) =>{
            this.getBeerDetails(firstBeerId);
        })
}

componentDidUpdate(prevProps) {
    const newBeerId = this.props.match.params.beerId;
    if (prevProps.match.params.beerId !== newBeerId){
        this.getBeerDetails(newBeerId);
    }
}

render() {
    return (
        <main>
            <div className="stylePage__container">
                <h2 className="stylePage__title">CRAFT BEER STYLES</h2>
            </div>
        <section>  
            {this.state.beers.length !== 0  
            ? <StyleGuide beer={this.state.beers}/>
            : <p>LOADING...</p>}
        </section>
        </main>
        )
    }
}

export default Styles;