
import { FaChevronDown } from "react-icons/fa";
export default function Promo() {
  return (
    <div className="promo">
        <div className="content">
            <div className="empty"></div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, adipisci.</p>
                <a href="#">Shop now</a>
            </div>
            <div className="lang">
                <span>English</span>
                <FaChevronDown className="icon" />
            </div>
        </div>
    </div>
  )
}
