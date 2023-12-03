import Apresentacao from "./Apresentacao";
import Capa from "./Capa";
import "./home.css"

export default function HomeLayout() {
	return (
		<div className="container">
            <Capa/>
            <Apresentacao/>
        </div>
	);
}