import React, {Component} from 'react';

class FotoHeader extends Component {
  render() {
    return (
      <header class="foto-header">
        <figure class="foto-usuario">
          <img src={this.props.foto.urlPerfil} alt="foto do usuario"/>
          <figcaption class="foto-usuario">
            <a href="#">
              {this.props.foto.loginUsuario}
            </a>
          </figcaption>
        </figure>
        <time class="foto-data">{this.props.foto.horario}</time>
      </header>
    );
  }
}

class FotoInfo extends Component {
  render() {
    return (
      <div class="foto-info">
        <div class="foto-info-likes">
          {this
            .props
            .foto
            .likers
            .map(liker => {
              return <a href="#">{liker.login},</a>
            })
}

          curtiram

        </div>

        <p class="foto-info-legenda">
          <a class="foto-info-autor">autor
          </a>
          {this.props.foto.comentario}
        </p>

        <ul class="foto-info-comentarios">
          {this
            .props
            .foto
            .comentarios
            .map(comentario => {
              return (
                <li class="comentario">
                  <a class="foto-info-autor">{comentario.login}</a>
                  {comentario.texto}
                </li>
              )
            })
}

        </ul>
      </div>
    );
  }

}

class FotoAtualizacoes extends Component {
  render() {
    return (
      <section class="fotoAtualizacoes">
        <a href="#" class="fotoAtualizacoes-like">Likar</a>
        <form class="fotoAtualizacoes-form">
          <input
            type="text"
            placeholder="Adicione um comentário..."
            class="fotoAtualizacoes-form-campo"/>
          <input type="submit" value="Comentar!" class="fotoAtualizacoes-form-submit"/>
        </form>

      </section>
    );
  }
}

export default class FotoItem extends Component {
  render() {
    return (
      <div class="foto">
        <FotoHeader foto={this.props.foto}/>
        <img alt="foto" class="foto-src" src={this.props.foto.urlFoto}/>
        <FotoInfo foto={this.props.foto}/>
        <FotoAtualizacoes/>
      </div>
    );
  }
}