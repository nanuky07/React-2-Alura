import React, {Component} from 'react';
import FotoItem from './Foto';

export default class Tomeline extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    };
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(response => response.json())
      .then(fotos => {
        this.setState({fotos: fotos});
      });
  }

  render() {
    return ( < div class = "fotos container" > {
      this
        .state
        .fotos
        .map(foto => <FotoItem foto={foto}/>)

    } < /div>
     );
  }

}