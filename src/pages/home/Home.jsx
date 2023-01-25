import "./home.css"
import  Featuredinfo from "../../components/featuredInfo/Featuredinfo"
import Chart from "../../components/chart/Chart"
import { userData } from "../../dummuyData"
export default function Home() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart data={userData} title='User Analytics' grid dataKey="Active User"/>
    </div>
  )
}
