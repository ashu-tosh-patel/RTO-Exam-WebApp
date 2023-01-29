import { useParams } from "react-router-dom"
import MyQns from "../data/questions.json"

export default function QnA() {

    const { id } = useParams()
    var curr = [];
    return (
        <div>
            hii this is set {id}
        </div>
    )
}
