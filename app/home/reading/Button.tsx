import React, { useState } from "react";

function Button() {

  const [word, setword] = useState<string[]>([]);



  function selected(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.target.classList.toggle('active')
    setword((prev) => [...prev, e.target.value]);
    console.log(word);
    
  }


  return <button value="hey" className="m-4" value="hey" onClick={selected}></button>;
}

export default Button;
