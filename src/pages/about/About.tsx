function About() {
  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '75vh',
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
            Cultura da Nossa Empresa
          </h2>
          <p>
            Aqui, acreditamos que as pessoas são o coração de tudo o que fazemos. Nossa cultura é guiada pela colaboração, inovação e respeito mútuo, criando um ambiente onde todos podem crescer e contribuir com ideias que fazem a diferença.

          </p>
          <p>
            Valorizamos a diversidade de pensamentos e experiências, pois sabemos que isso é essencial para criar soluções verdadeiramente impactantes. Buscamos sempre o equilíbrio entre produtividade e bem-estar, promovendo um espaço saudável e acolhedor para nossa equipe.
          </p>

          <p>
            Além disso, incentivamos a aprendizagem contínua, a criatividade e a busca por excelência. Nosso propósito é não apenas transformar a gestão de pessoas, mas também inspirar o mercado com práticas que reforçam a importância da empatia e da inclusão.
          </p>

          <p>
            Juntos, construímos uma empresa que cresce ao lado de seus colaboradores, clientes e parceiros, com a certeza de que o sucesso está nas conexões que criamos e nos valores que vivemos.
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
