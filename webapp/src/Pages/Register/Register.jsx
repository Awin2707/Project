import React, { useEffect, useState, useRef } from 'react'
import CustomField from '../../InputField/CustomField'
import classes from '../../Styles/main.module.css';
import NavBarTop from '../NavBar/NavBarTop';
import config from '../../Config/config.json';
import { NavLink } from 'react-router-dom';
function Register() {
  const [inputdata, setinputdata] = useState([]);
  const ref = useRef([]);
  const [input, setinput] = useState({});

  useEffect(() => {
    let objs = [
      { type: "text", name: "name", placeholder: "Enter your name", pass: false, errmsg: "", label: "Your name", img: config.img_path + "user.svg" },
      { type: "email", name: "email", placeholder: "Enter your Email id", pass: false, errmsg: "", label: "Email id", img: config.img_path + "mail.svg" },
      { type: "pass", name: "pass", placeholder: "Create your password", pass: true, errmsg: "", label: "Password", img: config.img_path + "password.svg"},
    ]
    setinputdata(objs);
  }, []);

  const onChangeValue = (e) => {
    let { name, value } = e.target;
    let objs = {
      ...input,
      [name]: value
    }
    setinput(objs);
  }

  const onkeyChange = (e, ind) => {
    let keys = e.key;
    if (keys === "Enter") {
      ref.current[ind + 1]?.focus();
    }
  }

  return (
    <div className={classes.main} style={{ backgroundImage: `url(${config.img_path}background.png)` }}>
      <NavBarTop />
      <div className={classes.subMain}>
        <div className={classes.left}>
          <div className={classes.leftmessage}>
            <label className={classes.left_heading}>Start your <br/> savings journey today !</label>
            <label className={classes.left_subHeading}>Create a account and take <br/> control of your savings</label>
          </div>
            <img alt='x-ico' src={config.img_path + "money_wallet.png"} className={classes.ico}/>
        </div>
        <div className={classes.right}>
          <form className={classes.forms}>
            <label className={classes.headings}>Craete Your Account</label>
            <label className={classes.subheading}>Sign up to enjoy your savings !</label>
            <div className="mt-4"></div>
            {
              inputdata.map((val, ind) => {
                return (
                  <CustomField key={ind} ind={ind} type={val.type} name={val.name} placeholder={val.placeholder} pass={val.pass} errmsg={val.errmsg} onchange={onChangeValue} value={input[val.name]} label={val.label} onKeys={(e) => onkeyChange(e, ind)} ref={ref} img={val.img} />
                );
              })
            }
            <div className={'mt-3'}>
              <input type='checkbox' />
              <label className={"px-2"}>I have agree all the <span style={{ color: "#367AFF", cursor: "pointer" }}>terms</span> and <span style={{ color: "#367AFF", cursor: "pointer" }}>conditions</span></label>
            </div>
            <button className={classes.btns}>Sign up</button>
            <div className={classes.divs}>
              <label className={classes.newsub}>Already have an account ? </label>
              <NavLink to={"/login"}>Log in</NavLink>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Register
