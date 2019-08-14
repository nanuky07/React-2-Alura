import React from 'react';

function App() {
  return (
    <div id="root">
      <div class="main">

        <header class="header container">
          <h1 class="header-logo">
            Instalura
          </h1>
          <form class="header-busca">
            <input type="text" name="search" placeholder="Pesquisa" class="header-busca-campo"/>
              <input type="submit" value="Buscar" class="header-busca-submit"/>
          </form>
          <nav>
            <ul class="header-nav">
              <li class="header-nav-item">
                <a href="#">
                  ♡
                  {/*                ♥-->*/}
                  {/*Quem deu like nas minhas fotos?*/}
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div class="fotos container">
          <div class="foto">
            <header class="foto-header">
              <figure class="foto-usuario">
                <img src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-19/11199408_569104449895751_1837574990_a.jpg" alt="foto do usuario"/>
                <figcaption class="foto-usuario">
                  <a href="#">
                    alots
                  </a>  
                </figcaption>
              </figure>
              <time class="foto-data">03/10/2016 20:13</time>
            </header>

            <img alt="foto" class="foto-src" src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-15/e35/14482111_1635089460122802_8984023070045896704_n.jpg?ig_cache_key=MTM1MzEzNjM4NzAxMjIwODUyMw%3D%3D.2"/>

            <div class="foto-info">
              <div class="foto-info-likes">

                <a href="#">
                  alots_ssa
                </a>

                ,

                <a href="#">
                  rafael_rollo
                </a> 

                 curtiram
             
              </div>

              <p class="foto-info-legenda">
                <a class="foto-info-autor">autor </a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
              </p>

              <ul class="foto-info-comentarios">
                <li class="comentario">
                  <a class="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                </li>
                <li class="comentario">
                  <a class="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
                </li>
                <li class="comentario">
                  <a class="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
                </li>
              </ul>
            </div>
            <section class="fotoAtualizacoes">
              <a href="#" class="fotoAtualizacoes-like">Likar</a>
              <form class="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." class="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" class="fotoAtualizacoes-form-submit"/>
              </form>

            </section>
          </div> {/*fim .foto*/}

        </div>
      </div> {/*fim .main*/}
    </div> 
  );
}

export default App;
