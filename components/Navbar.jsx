import Link from "next/link"
import {ShoppingCart, Lightbulb, LightbulbFilament, List} from "phosphor-react"



export default function Navbar(props) {
    const {theme, onButtonClick} = props;

    return (
        <div className="flex justify-between p-5">
            <button><List size={32} /></button>
            <h1 className="text-2xl"><Link href="/">kinnowear</Link></h1>
            <ul className="flex">
                <li className="px-2"><button onClick={onButtonClick}>{theme === "dark" ? <LightbulbFilament size={32} /> : <Lightbulb size={32} />}</button></li>
                <li className="px-2"><Link href="/cart"><ShoppingCart size={32} /></Link></li>
            </ul>
        </div>
    )
}