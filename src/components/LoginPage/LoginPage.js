import React, { Component } from 'react';
import '../LoginPage/LoginPage.css'
import insta_image from '../../images/cel-insta.png';
import insta_logo from '../../images/logoinsta.png';
import slider_1 from '../../images/slider-1.png';
import slider_2 from '../../images/slider-2.png';
import slider_3 from '../../images/slider-3.png';
import slider_4 from '../../images/slider-4.png';
import appstore from '../../images/microsoft.png';
import playstore from '../../images/playstore.png';




class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }


    render() { 
        return ( 
           <div className='container'> 
                <div className='insta-login-area'>
                    <div className='insta-device-section'>
                        <img src={insta_image} alt='imagem instagram celular'/>
                        <div className='slider'>
                         <img src={slider_1} alt=''/>
                        </div>
                    </div>
                    <div className='insta-login-section'>
                        <div className='login-container'>
                            <img className='img-logo' src={insta_logo} alt='logo instagram'/>
                            <div className='insta-login-form'>
                                <div className='insta-input-field'>
                                    <label for=''></label>
                                    <input type='text' placeholder='Phone number, username or email'/>
                                </div>
                            <div className='insta-input-field'>
                                <label for=''></label>
                                <input type='password' placeholder='password'/>
                            </div>

                            <button className='insta-login-button'>Log in</button>

                        </div>

                        <div className='login-divider'>
                            <span className='left-divider'></span>
                            <span className='divider-text'>OR</span>
                            <span className='right-divider'></span>
                        </div>

                        <div className='login-social'>
                            <a href=''><i class='bx bxl-facebook-square'></i>Login with Facebook</a>
                        </div>

                        <div className='insta-forget-password'>
                            <a href='#'>Forget password?</a>
                        </div>
                    </div>
                    

                    <div className='insta-signup'>
                        <p>Don't have an account? <a href='#'>Sign up</a></p>
                    </div>

                    <div className='insta-get-app'>
                        <p>Get the app</p>

                        <div className='insta-get-app-store'>
                        <a href='#'><img src={playstore} alt='logo appstore'/></a>
                        <a href='#'><img src={appstore} alt='logo Google Playstore'/></a>
                    </div>
                    </div>
                </div>

            </div>

                <div className='insta-footer'>
                    <div className='insta-footer-links-1'>
                        <a href=''>Meta</a>
                        <a href='#'>About</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Jobs</a>
                        <a href='#'>Help</a>
                        <a href='#'>API</a>
                        <a href='#'>Privacy</a>
                        <a href='#'>Terms</a>
                        <a href='#'>Top accounts</a>
                        <a href='#'>Hashtag</a>
                        <a href='#'>Locations</a>
                        <a href='#'>Instagram Lite</a>
                        <a href='#'>Contact uploading & Non-users</a>
                    </div>

                    <div className='insta-footer-links-2'>
                        <select name='' id=''>
                            <option value=''>English</option>
                            <option value=''>Spanish</option>
                            <option value=''>Português Brasil</option>


                        </select>
                        <p>&#169; 2023 Instagram Clone by Marcos Barbosa</p>
                    </div>


                </div>
            </div>


           
        );
    }
}
 
export default LoginPage;