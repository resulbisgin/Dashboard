import "./home.css"
import  Featuredinfo from "../../components/featuredInfo/Featuredinfo"
import Chart from "../../components/chart/Chart"
import { userData } from "../../dummuyData"
import WidgetSm from "../../widgetSm/WidgetSm"
import WidgetLg from "../../widgetLg/WidgetLg"
export default function Home() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart data={userData} title='User Analytics' grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
