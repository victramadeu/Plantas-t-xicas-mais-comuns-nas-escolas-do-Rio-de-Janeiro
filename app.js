function pesquisar(){

    // Obtém uma referência ao elemento HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de entrada onde o usuário digita a palavra-chave
    let campoPesquisa = document.getElementById("campo-pesquisa").value


    // Verifica se o usuário digitou alguma palavra-chave. Se não, exibe uma mensagem indicando que nenhum resultado foi encontrado.
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa escrever o nome da planta ou sintoma.</p>"
        return
    }

    // Normalizando a pesquisa
    campoPesquisa = campoPesquisa.toLowerCase()

    // string vazia que será preenchida com os resultados da pesquisa
    let resultados = "";
    let planta = "";
    let familia = ""
    let nomeCientifico = ""
    let outrosNomesPopulares = ""
    let principioAtivo = ""
    let parteToxica = ""
    let sintomas = "";
    let tags = "";

    // para cada dado dentro da lista de plantasToxicas
    for (let dado of plantasToxicas) {
        // Normalizando os dados
        planta = dado.planta.toLowerCase()
        familia = dado.familia.toLowerCase()
        nomeCientifico = dado.nomeCientifico.toLowerCase()
        outrosNomesPopulares = dado.outrosNomesPopulares.toLowerCase().toLowerCase()
        principioAtivo = dado.principioAtivo.toLowerCase()
        parteToxica = dado.parteToxica.toLowerCase()
        sintomas = dado.sintomas.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        // Verifica se a palavra-chave digitada pelo usuário está presente em qualquer um dos campos da planta (nome, família, nome científico, etc.).
        // Se a palavra-chave for encontrada, o código adiciona uma nova div com as informações da planta à variável resultados
        if ( planta.includes(campoPesquisa) || familia.includes(campoPesquisa) || nomeCientifico.includes(campoPesquisa) || outrosNomesPopulares.includes(campoPesquisa) || principioAtivo.includes(campoPesquisa) ||  parteToxica.includes(campoPesquisa) || sintomas.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
            resultados += `
        <div class="item-resultado">
            <div class="item-texts">
                <h2>${dado.planta}</h2>
                <h3>
                    Outros nomes: ${dado.outrosNomesPopulares}
                </h3>
                <h3>
                    Nome científico: ${dado.nomeCientifico}
                </h3>
                 <p>
                    Sintomas: ${dado.sintomas}</p>
                <p>
                    Parte tóxica: ${dado.parteToxica}</p>
                  
            </div>
            
                
            <div class="item-img">
                    <img src="${dado.imagem}" alt="" />
            </div> 
            
            <div class="item-texts">    
                    <a href= ${dado.link} target="_blank">Mais informações</a>
                    <p></p>
            </div>
        </div>
        `
            
        }

    }

    if (!resultados) {
        section.innerHTML = "<p>Nada foi encontrado.</p>"
        return;
    }

    // Adiciona um ouvinte de eventos ao campo de entrada para detectar quando a tecla Enter é pressionada. 
    // Quando a tecla Enter é pressionada, a função pesquisar() é chamada novamente.
    document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            pesquisar();
        }
    });

    // Atribui o conteúdo da variável resultados ao elemento section, atualizando a página com os resultados da pesquisa.
    section.innerHTML = resultados;
}



