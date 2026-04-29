import React from 'react'
import classes from '../../Styles/main.module.css';
import config from '../../Config/config.json';

function NavBarTop() {
  return (
    <div className={classes.main_Top}>
      <img alt='x-ico' src={config.img_path + "savingcost.png"} className={classes.icons}/>
      <label className={classes.heading}>Saving Cost Management</label>
    </div>
  )
}

export default NavBarTop
