import './experiencia.scss'

interface xpItem {
    nome: string,
    cargo: string,
    descricao: string,
    anoInicio: number,
    anoFim?: number,
}

export default function Experiencia() {
    /**
     * Lista de Experiências
     */
    const items: xpItem[] = [
        {
            nome: 'IPPUL - Instituto de Pesquisa e Planejamanto Urbano de Londrina', cargo: 'Estagiário', descricao: "Participei da construção do banco de dados de " +
                "informações geográficas para as leis específicas do Plano Diretor Municipal de Londrina (2018-2028).", anoInicio: 2018, anoFim: 2020
        },
        {
            nome: 'DRZ Consultoria e Tecnologia', cargo: 'Analista Ambiental', descricao: "Coleta, sistematização de dados e escrita de produtos e relatórios para " +
                "o desenvolvimento de Planos Diretores Municipais.", anoInicio: 2024, anoFim: 2025
        },
        {
            nome: 'Maptriz Smart City', cargo: 'Desenvolvedor Fullstack', descricao: "Desenvolvimento de sistema WebGIS para gestão e analise espacial de " +
                "municípios brasileiros.", anoInicio: 2025
        },
    ]

    return <section id="xp">
        <div className="container">
            <h1>Trajetória Profissional</h1>
            <div className="xp-items">
                {items
                    .sort((xp1, xp2) => {
                        if (!xp1.anoFim && !xp2.anoFim) return 0
                        if (!xp1.anoFim) return -1
                        if (!xp2.anoFim) return 1

                        return xp2.anoFim - xp1.anoFim
                    })
                    .map((xp, index) => (
                        <div className="xp-item" key={index}>
                            <div className="ponto"></div>
                            <span className="tempo">{xp.anoInicio} - {xp.anoFim ?? 'PRESENTE'}</span>
                            <h3 className="nome">{xp.nome}</h3>
                            <span className="cargo">{xp.cargo}</span>
                            <p>{xp.descricao}</p>
                        </div>
                    ))}
            </div>
        </div>
    </section>
}