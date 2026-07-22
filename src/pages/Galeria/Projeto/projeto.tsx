import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './projeto.scss'
import Image from '../../../components/Image/image'
import Modal from '../../../components/Modal/modal'

export interface ProjetoItem {
    prefix: string,
    label: string,
    imgUrl: string,
    subtitulo: string,
    skills?: string[],
    descricao?: string,
    link?: string
}

interface ProjetoProps {
    item: ProjetoItem
}

/**
 * Componente da seção `Projeto` da página `Galeria`.
 * 
 * @param item Dados do projeto.
 */
export default function Projeto({ item }: ProjetoProps) {
    /**
     * Controle de abertura de modal de Projeto.
     */
    const [openProj, setOpenProj] = useState(false)

    /**
     * Controle de internacionalização.
     */
    const { t } = useTranslation()

    /**
     * Modal de exibição de Projeto.
     */
    const modal = (
        <Modal className="proj-modal" isOpen={openProj} onClose={() => setOpenProj(false)}>
            <div className="proj-img">
                <Image src={item.imgUrl} alt={t(`${item.prefix}.${item.label}`)} />
            </div>
            <div className="proj-content">
                <span className="sub">{t(`${item.prefix}.${item.subtitulo}`)}</span>
                <h2>{t(`${item.prefix}.${item.label}`)}</h2>
                <p>{item.descricao && t(`${item.prefix}.${item.descricao}`)}</p>
                {(item.skills && item.skills?.length != 0) && (
                    <div className="skill-list">
                        <h3>
                            <i className="bi bi-stack"></i>
                            {t('projetos.modal.skills')}
                        </h3>
                        {item.skills.map((sk, id) => (
                            <span className="skill" key={id}>{t(`projetos.skills.${sk}`)}</span>
                        ))}
                    </div>
                )}
                {item.link &&
                    <span className="link-repo">
                        <i className="bi bi-github"></i>
                        <a href={item.link} target="_blank">
                            {t('projetos.modal.repositorio')}
                        </a>
                    </span>
                }
            </div>
        </Modal>
    )

    return (
        <article>
            <div className="proj-capa" onClick={() => (item.prefix != 'projetos.mapas') && setOpenProj(true)}>
                <span className="expand">
                    <i className="bi bi-arrows-angle-expand"></i>
                </span>
                {(item.prefix != 'projetos.mapas') ?
                    <img src={item.imgUrl} alt={t(`${item.prefix}.${item.label}`)} /> :
                    <Image src={item.imgUrl} alt={t(`${item.prefix}.${item.label}`)} />
                }
            </div>
            {(item.prefix != 'projetos.mapas') &&
                <div className="proj-content">
                    <h3>{t(`${item.prefix}.${item.label}`)}</h3>
                    <p>{t(`${item.prefix}.${item.subtitulo}`)}</p>
                </div>
            }
            {modal}
        </article>
    )
}