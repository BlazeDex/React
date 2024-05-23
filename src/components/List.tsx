import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (e: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(0);
  const handleClick = (e: string, i: number) => {
    setIndex(i);
    onSelect?.(e);
  }
  return (
    <ul className="list-group">
      {data.map((element, i) => (
          <li 
            onClick={ () => handleClick(element, i) } 
            key={ element } 
            className={`list-group-item ${index === i ? 'active' : ''}`}
          >
            { element }
          </li>
        ))
      }      
    </ul>
  );
}

export default List;