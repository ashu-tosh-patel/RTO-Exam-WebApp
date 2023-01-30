
import { Link } from 'react-router-dom';
import './Questions.css'


export default function Questions() {
    var cards = ["पहला", "दूसरा", "तीसरा", "चौथा", "पांचवा", "छठा ", "सातवा", "आठवा", "नौवा", "दसवा", "ग्यारहवा", "बारहवा", "तेरहवा"];

    return (
        <>
            <h1 className="page-title">सभी परीक्षा सेट :- </h1>
            <div className="project-list">
                {cards.map((project, ind) => (
                    <Link to={`tests/${ind + 1}`} key={ind}>
                        <h4>{`परीक्षा सेट-${ind + 1}. ${project} श्रेणी`}</h4>
                        <p>कुल प्रश्न : 15</p>
                        <div className="assigned-to">
                            <ul>
                                <li>समय : 7:30 मिनट</li>
                            </ul>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
