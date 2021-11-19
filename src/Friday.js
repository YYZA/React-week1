import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLinux } from 'react-icons/fa';
import{Link} from "react-router-dom"
import './App.css';

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar cursor={"pointer"} fontSize={"40px"} color={selected ? "yellow" : "grey"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div>
      <div className="Container">
      <h3 className="head"><span className="focus">금요일</span> 평점 남기기</h3>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <div>
          <Link to="/"><button className="send" >평점 전송!</button></Link>
      </div>
      <FaLinux className="imoge"/>  
      </div>
    </div>
  );
}
