import { CalendarTodayRounded,
     LocationSearching,
      MailOutline,
       PermIdentity,
        PhoneAndroid,
         Publish } from '@material-ui/icons'
import './user.css'

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <div className="userShowInfoTitle">annabeck44</div>
                    </div>
                    <div className="userShowInfo">
                    <CalendarTodayRounded className='userShowIcon'/>
                    <div className="userShowInfoTitle">11.09.2022</div>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <div className="userShowInfoTitle">+90 534 523 3652</div>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <div className="userShowInfoTitle">annabeck44@gmail.com</div>
                    </div>
                    <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <div className="userShowInfoTitle">Istanbul | Turkey</div>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form  className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input
                            type="text"
                            placeholder='annabeck99' 
                            className='userUpdateInput' />

                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input
                            type="text"
                            placeholder='Anna Becker' 
                            className='userUpdateInput' />
                            
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input
                            type="text"
                            placeholder='annabeck44@gmail.com' 
                            className='userUpdateInput' />
                            
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input
                            type="text"
                            placeholder='+90 534 523 3652' 
                            className='userUpdateInput' />
                            
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input
                            type="text"
                            placeholder='Istanbul | Turkey' 
                            className='userUpdateInput' />
                            
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='userUpdateImg'/>
                            <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="file" id='file' style={{display:'none'}} />
                        </div>
                        <button className="UpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
