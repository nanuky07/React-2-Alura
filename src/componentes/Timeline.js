import React, {Component} from 'react';
import FotoItem from './Foto';
import Pubsub from 'pubsub-js';
import {CSSTransitionGroup} from 'react-transition-group';

export default class Tomeline extends Component {

  constructor(props) {
    super(props);
    this.state = {fotos: []};
    this.login = this.props.login;
  }

  componentWillMount(){
    Pubsub.subscribe('timeline',(topico,fotos) => {
      this.setState({fotos}); /* é a mesma coisa de fazer fotos: fotos */
    });

    Pubsub.subscribe('atualiza-liker',(topico,infoliker) =>{
      const fotoAchada = this.state.fotos.find(foto => foto.id === infoliker.fotoId);

      fotoAchada.likeada =! fotoAchada.likeada;
     
      const possivelLiker = fotoAchada.likers.find(liker => liker.login === infoliker.liker.login);

      if(possivelLiker === undefined){
        fotoAchada.likers.push(infoliker.liker);
       
      } else {
       const novosLikers = fotoAchada.likers.filter(liker => liker.login !== infoliker.liker.login);
       fotoAchada.likers = novosLikers;
      }
      this.setState({fotos:this.state.fotos});
          
    });

    Pubsub.subscribe('novos-comentarios',(topico,infoComentario)=>{
      const fotoAchada = this.state.fotos.find(foto => foto.id === infoComentario.fotoId);    
      fotoAchada.comentarios.push(infoComentario.novoComentario);
      this.setState({fotos:this.state.fotos});      
    });
  }

  carregaFotos(){
    let urlPerfil;
    if(this.login === undefined){
      urlPerfil = `https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`
    } else {
      urlPerfil = `https://instalura-api.herokuapp.com/api/public/fotos/${this.login}`
    }

    fetch(urlPerfil)
      .then(response => response.json())
      .then(fotos => {
        this.setState({fotos: fotos});
      });
  }

  componentDidMount(){
    this.carregaFotos(this.props);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.login !== undefined){
      this.login = nextProps.login;
      this.carregaFotos();
    }
  }

  like(fotoId){
    fetch(`https://instalura-api.herokuapp.com/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`,{method:'POST'})
      .then(response =>{
        if(response.ok){
          return response.json();
        } else {
          throw new Error("Não foi possível realizar o like da foto");
        }
      })
      .then(liker =>{        
        Pubsub.publish('atualiza-liker',{fotoId,liker});
      });
  }

  comenta(fotoId, textoComentario){
    const requestInfo ={
      method:'POST',
      body:JSON.stringify({texto: textoComentario}),
      headers: new Headers({
        'Content-type':'application/json'
      })
    };

    fetch(`https://instalura-api.herokuapp.com/api/fotos/${fotoId}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`,requestInfo)
      .then(response =>{
        if(response.ok){
          return response.json()
        } else {
          throw new Error("Não foi possível comentar");
        }
      })
      .then(novoComentario => {
        Pubsub.publish('novos-comentarios',{fotoId,novoComentario})
      })
  }

  render(){
    return (
      <div className="fotos container">
        <CSSTransitionGroup 
            transitionName="timeline"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
                {
                  this.props.fotos.map(foto => <FotoItem key={foto.id} fotos={foto} like={this.props.like} comenta={this.props.comenta}/>)
                }
          </CSSTransitionGroup>         
      </div>
    );
  }


}