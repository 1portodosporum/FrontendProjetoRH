function About() {
  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '5%',
          padding: '20px',
        }}>
        <div
          style={{
            width: '80vw',
            maxWidth: '70%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
          <h2
            style={{
              marginTop: '0',
              marginBottom: '10px',
            }}>
            Sobre nós!
          </h2>
          <p>
            Somos uma empresa dedicada a facilitar e otimizar a gestão de pessoas e processos em sua
            organização. Nosso sistema de RH foi desenvolvido para economizar tempo, melhorar a eficiência e
            criar uma experiência mais ágil para sua equipe.
          </p>
          <p>
            Nosso objetivo é transformar a maneira como você gerencia talentos, desde o recrutamento até o
            desenvolvimento contínuo, oferecendo ferramentas simples e inteligentes para ajudar seu negócio a
            prosperar.
          </p>
        </div>

        <div
          style={{
            width: '80vw',
            maxWidth: '70%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            position: 'relative',
          }}>
          <h3
            style={{
              marginTop: '0',
              marginBottom: '10px',
            }}>
            Desenvolvedores do Projeto
          </h3>
          <ul
            style={{
              margin: '0',
              paddingLeft: '20px',
              listStyleType: 'disc',
            }}>
            <li>Aline Silva</li>
            <li>Bruna Artioli</li>
            <li>Gabriel Alves</li>
            <li>Rodrigo Santos</li>
            <li>Rute Souza</li>
            <li>Vinicius Souza</li>
            <li>Sansão Viera</li>
            <li>Vivian Rosana</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
