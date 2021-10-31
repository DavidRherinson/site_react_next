import Head from 'next/head';
import GithubCorner from 'react-github-corner';
import Script from 'next/script';

function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
        <title>Site</title>
      </Head>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <GithubCorner
              href="https://github.com/DavidRherinson"
              bannerColor="#fff"
              octoColor="#000"
              size={90}
              direction="left"
            />

            <a href="#top" id="logo"> Rherinson</a>
            <div id="text">Desenvolvedor Full Stack</div>
          </div>
          <ul className="menu">
            <li> <a href="#top" className="menu-btn">Home</a> </li>
            <li> <a href="#services" className="menu-btn">Serviços</a> </li>
            <li> <a href="#contact" className="menu-btn">Contato</a> </li>
          </ul>
          <div className="menu-btn">
             <i className="fas fa-bars"></i> 
          </div>
        </div>
      </nav>

      <section className="top" id="top">
    <div className="max-width">
      <div className="top-container">
        <div className="text-1">Temos a solução</div>
        <div className="text-2">que a sua empresa precisa </div>
        <div className="text-3">Podemos ajudar a sua empresa</div>
        <a href="#contact">Entrar em contato</a>
      </div>
    </div>
  </section>
  <section className="services" id="services">
    <div className="max-width">
      <h1 className="title">Serviços</h1>
      <div className="serv-content">
        <div className="card">
          <div className="box">
            <i className="fas fa-laptop-code"></i>
            <div className="text">
              Serviço 1
            </div>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore debitis, voluptatum deleniti neque
              eveniet in asperiores, repellat enim fugiat consectetur ipsum, nihil repellendus similique ab dolor fugit
              excepturi quo maxime. </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <i className="fas fa-laptop-code"></i>
            <div className="text">
              Serviço 2
            </div>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore debitis, voluptatum deleniti neque
              eveniet in asperiores, repellat enim fugiat consectetur ipsum, nihil repellendus similique ab dolor fugit
              excepturi quo maxime. </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <i className="fas fa-laptop-code"></i>
            <div className="text">
              Serviço 1
            </div>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore debitis, voluptatum deleniti neque
              eveniet in asperiores, repellat enim fugiat consectetur ipsum, nihil repellendus similique ab dolor fugit
              excepturi quo maxime. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact" id="contact">
    <div className="max-width">
      <h2 className="title">Contato</h2>
      <div className="contact-content">
        <div className="column left">
          <p>Aliquam facilisis vitae ante eu consequat. Nullam a mi vel metus tristique commodo id quis diam.</p>
          <div className="icons">
            <div className="row">
              <i className="fas fa-user"></i>
              <div className="info">
                <div className="head">Empresa</div>
                <div className="sub-title">Rherinson</div>
              </div>
            </div>

            <div className="row">
              <i className="fas fa-map-marker-alt"></i>
              <div className="info">
                <div className="head">Endereço</div>
                <div className="sub-title">Avenida Winston Churchill</div>
              </div>
            </div>

            <div className="row">
              <i className="fas fa-envelope"></i>
              <div className="info">
                <div className="head">E-mail</div>
                <div className="sub-title">davidrherinson@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="column right">
          <div className="text">Mensagem de Contato</div>
          <form>
            <div className="fields">
              <div className="field name">
                <input type="text" placeholder="Digite o nome" required />
              </div>
              <div className="field email">
                <input type="email" placeholder="Digite o e-mail" required />
              </div>
            </div>

            <div className="field">
              <input type="text" placeholder="Digite o assunto" required />
            </div>

            <div className="field textarea">
              <textarea cols="30" rows="10" placeholder="Digite o conteúdo" required></textarea>
            </div>

            <div className="button-area">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <spam>Criado por <a href="#">David</a></spam>
  </footer>
  
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
      <Script src="custom.js" strategy="afterInteractive" />
    </div>
  )
}


export default Home