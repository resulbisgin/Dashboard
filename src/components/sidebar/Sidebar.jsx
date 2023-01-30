import './sidebar.css'
import { LineStyle ,Timeline,TrendingUp,Report, WorkOutline, Message,PermIdentity,DynamicFeed, Storefront,AttachMoney,BarChart,Markunread} from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active" >
                <LineStyle className='sidebarIcon'/>
                Home
              </li>
              <li className="sidebarListItem">
                <Timeline className='sidebarIcon'/>
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className='sidebarIcon'/>
                Sales
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <a className='link' href='./user'>
              <li className="sidebarListItem ">
                <PermIdentity className='sidebarIcon'/>
                Users
              </li>
              </a>
              <a className='link' href='./products'>
              <li className="sidebarListItem">
                <Storefront className='sidebarIcon'/>
                Products
              </li>
              </a>
              <li className="sidebarListItem">
                <AttachMoney className='sidebarIcon'/>
                Transactions
              </li>
              <li className="sidebarListItem">
                <BarChart className='sidebarIcon'/>
                Reports
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
                <Markunread className='sidebarIcon'/>
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className='sidebarIcon'/>
                Feedback
              </li>
              <li className="sidebarListItem">
                <Message className='sidebarIcon'/>
                Messages
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
                <WorkOutline className='sidebarIcon'/>
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className='sidebarIcon'/>
                Analytics
              </li>
              <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                Reports
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
