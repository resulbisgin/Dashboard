import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredinfo.css"

export default function Featuredinfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
              -11.4<ArrowDownward className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,75</span>
            <span className="featuredMoneyRate">
              -4.1<ArrowDownward className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>

        
        <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$3,25</span>
            <span className="featuredMoneyRate">
              +9.1<ArrowUpward className="featuredIcon"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
