import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../image/Logo.png';
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
// import {BrowserRouter as Router, Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs={12} col-md">
                    <img src={Logo}/>
                        <ul className='list-unstyled'>
                            <span><FaFacebook /></span>
                        </ul>
                    </div>

                    <div className="col-xs={12} col-md">
                        <h5>เกี่ยวกับเรา</h5>
                        <ul className='list-unstyled'>
                            <li>เว็ปไซต์ค้นหาร้านอาหารบริเวณ ทมร.ธัญบุรี จัดทำขึ้นมาเพื่อให้ผู้ที่อาศัยอยู่แถวคลองหกได้ใช้ เพื่อความสะดวกในการหาร้านอาหาร</li>
                        </ul>
                    </div>

                    <div className="col-xs={12} col-md">
                        <h5>ช่วยเหลือ</h5>
                        <ul className='list-unstyled'>
                            <li href="#">แจ้งปัญหา</li>
                            {/* <Router>
                            <Link style={{textDecoration: 'none'}} to="/">
                                Home
                            </Link>
                            </Router> */}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-sm copyright'>
                        &copy;{new Date().getFullYear()} FINDFOODFAST, ALL RIGHT RESERVED
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;