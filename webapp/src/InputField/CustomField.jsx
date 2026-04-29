import React from 'react'
import classes from '../Styles/field.module.css';
import config from '../Config/config.json';

const CustomField = ({ type, name, placeholder, pass, errmsg, onchange, value, label, onKeys, ref, ind, img }) => {
  return (
    <div className={`${classes.main}`}>
      <div className={classes.ip_fields}>
        <img alt='x-ico' src={img} />
        <input type={type} name={name} placeholder={placeholder} onChange={onchange} value={value} className={classes.inputs} required autoComplete='off' onKeyDown={(e) => onKeys(e, ind)} ref={(el) => ref.current[ind] = el} />
        <label className={value && value.length > 0 ? classes.labels_Selected : classes.labels} style={errmsg == "" ? { top: "-10px" } : { top: "-9px" }}>{label}</label>
        
      </div>
      <label className={classes.err}>{errmsg}</label>
    </div>
  )
}

export default CustomField
