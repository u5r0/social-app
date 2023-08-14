import './rightbar.scss'
import { Avatar } from '../../assets'

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="menu">
          <span>Suggestions For You</span>

          <div className="user">
            <div className="user-info">
              <img src={Avatar} alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={Avatar} alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="menu">
          <span>Last Activities</span>

          <div className="user">
            <div className="user-info">
              <img src={Avatar} alt="" />
              <p>
                John Doe <span>changed their cover photo</span>
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={Avatar} alt="" />
              <p>
                John Doe <span>liked a post</span>
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className="user-info">
              <img src={Avatar} alt="" />
              <p>
                John Doe <span>liked a comment</span>
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className="user-info">
              <img src={Avatar} alt="" />
              <p>
                John Doe <span>posted</span>
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="menu">
          <span>Online Friends</span>

          <div className="user">
            <div className="user-info">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={Avatar} alt="" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar