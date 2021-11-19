import React, { useState } from "react";
import './App.css';
import { FaRegHandPointRight} from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import{Link} from "react-router-dom"



const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar fontSize={"40px"} color={selected ? "yellow" : "grey"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];



export default function Home({ totalStars = 5 }) {
  const [selectedStars] = useState(Math.floor(Math.random() * 10 % 6));
  const [selectedStars1] = useState(Math.floor(Math.random() *10 % 6));
  const [selectedStars2] = useState(Math.floor(Math.random() *10 % 6));
  const [selectedStars3] = useState(Math.floor(Math.random() *10 % 6));
  const [selectedStars4] = useState(Math.floor(Math.random() *10 % 6));
  const [selectedStars5] = useState(Math.floor(Math.random() *10 % 6));
  const [selectedStars6] = useState(Math.floor(Math.random() *10 % 6));

  return (
    <div className="App" >
      <div className="Container" >
        <h3>내 일주일은? </h3>
        <div className="days" >
          <span>월</span>
          {createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars > i} />))}
          <Link to="/start"><FaRegHandPointRight className="Btn"/></Link>
        </div>
        <div className="days">
          <span>화</span>
          {createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars1 >  i} />))}
          <Link to="/tues"><FaRegHandPointRight className="Btn"/></Link>
        </div>
        <div className="days">
          <span>수</span>
          {createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars2 > i} />))}
          <Link to="/wednes"><FaRegHandPointRight className="Btn"/></Link>
        </div>
        <div className="days">
          <span>목</span>
          {createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars3 > i} />))}
          <Link to="/thurs"><FaRegHandPointRight className="Btn"/></Link>
        </div>
        <div className="days">
          <span>금</span>
          {createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars4 > i} />))}
          <Link to="/friday"><FaRegHandPointRight className="Btn"/></Link>
        </div>
        <div className="days">
          <span>토</span>
          {createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars5 > i} />))}
          <Link to="/satur"><FaRegHandPointRight className="Btn"/></Link>
        </div>
        <div className="days">
          <span>일</span>
          {createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars6 > i} />))}
          <Link to="/sun"><FaRegHandPointRight className="Btn"/></Link>
        </div>
      </div>
    </div>
  );
}



