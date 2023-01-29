
import { Link } from 'react-router-dom';
import './Questions.css'


export default function Questions() {
    var cards = ["पहला", "दूसरा", "तीसरा", "चौथा", "पांचवा", "छठा ", "सातवा", "आठवा", "नौवा", "दसवा", "ग्यारहवा", "बारहवा", "तेरहवा", "चौदहवा", "पन्द्रहवा"];

    return (
        <>
            <h2 className="page-title">Questions</h2>
            <div className="project-list">
                {cards.map((project, ind) => (
                    <Link to={`projects/${ind + 1}`} key={ind}>
                        <h4>{`सेट-${ind + 1}. ${project} श्रेणी`}</h4>
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
