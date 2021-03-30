import  { Component } from 'react';
import axios from 'axios';
import StyleGuide from '../../components/StyleGuide/StyleGuide';
import './Styles.scss'
import Header from '../../components/Header/Header';
import StyleNavBar from '../../components/StyleNavBar/StyleNavBar';
import StyleTopRank from '../../components/StyleTopRank/StyleTopRank';

class Styles extends Component {
    state = {
        beers: [],
        featureBeer: "",
    }

getBeerDetails = (beerId) =>{
    axios
    .get(`http://localhost:8080/beers/${beerId}`)
    .then((beerDetails) => {
        console.log('individual beer data', beerDetails.data)
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
    <>
    <Header/>

    <main>

    <section>  
            {this.state.beers.length !== 0  
            ? <StyleNavBar beers={this.state.beers}/>
            : <p>LOADING...</p>}
        </section>

        <section>  
            {this.state.featureBeer.length !== 0  
            ? <StyleGuide beer={this.state.featureBeer}/>
            : <p>LOADING...</p>}
        </section>
        
        <section>  
            {this.state.featureBeer.length !== 0  
            ? <StyleTopRank beer={this.state.featureBeer}/>
            : <p>LOADING...</p>}
        </section>

    </main>
    </>
    )
    }
}

export default Styles;