import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={process.env.PUBLIC_URL + '/eagle.jpg'} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">John Doe</span>
                    <span className="widgetSmUserTitle">Front-end Developer</span>
                </div>
                <button type="submit" className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
