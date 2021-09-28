
import './ModalBottom.scss'

const ModalBottom = ({ link }) => {
    return (
        <div className={`ModalBottom`}>
            <ul className="ModalBottom-list">
                {
                    link.map(item => {
                        return <button className="ModalBottom-btn">{item}</button>
                    })
                }
            </ul>
        </div>
    )
}

export default ModalBottom;