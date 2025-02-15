import React from "react";

const ButtonGeneral = ({
  title,
  onClick,
  className,
  icon,
  src,
  href,
  iconClassName,
  download,
  alt,
}) => {
  const style = {
    padding: "20px 10px",
    cursor: "pointer",
  };
  return (
    <>
      <span onClick={onClick} className={className} style={style}>
        {icon ? (
          <a href={href} target="_blank" rel="noreferrer" download={download} style={{display: "flex", textDecoration:"none", color:"black"}}>
            <img src={src} className={iconClassName} alt={alt} /> <span style={{marginLeft:"5px"}}>{title}</span>
          </a>
        ) : (
          title
        )}
      </span>
    </>
  );
};

export default ButtonGeneral;
