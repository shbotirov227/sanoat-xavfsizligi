import { ArrowRight } from "../../assets/icons/icons";

import './InteractiveBtn.scss';

const InteractiveBtn = ({ title }) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            {
                title.map(item => {
                    return <button className="InteractiveBtn">
                                <h5 className="InteractiveBtn-title">{item}</h5>
                                <span className={`iconstyle`} style={{paddingTop: '5px', transition: 'all ease 0.5s'}}>{<ArrowRight />}</span>
                            </button>
                })
            }
        </div>
    )
}

export default InteractiveBtn;