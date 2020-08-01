import React from 'react';
import { MDBTooltip } from "mdbreact";

import html from './images/icons/HTML5.svg';
import css from './images/icons/CSS3.svg';
import jquery from './images/icons/jquery.svg';
import js from './images/icons/JS.png';
import mongodb from './images/icons/mongodb.svg';
import nodejs from './images/icons/nodejs.svg';
import postgresql from './images/icons/postgresql.svg';
import react from './images/icons/react.svg';
import redux from './images/icons/redux.svg';
import sqlite from './images/icons/sqlite.svg';

const skills = [
    {image: html, tooltip: 'HTML5'},
    {image: css, tooltip: 'CSS3'},
    {image: js, tooltip: 'JavaScript/ES6'},
    {image: jquery, tooltip: 'jQuery'},
    {image: nodejs, tooltip: 'NodeJS + Express'},
    {image: react, tooltip: 'React'},
    {image: redux, tooltip: 'Redux'},
    {image: mongodb, tooltip: 'mongoDB'},
    {image: sqlite, tooltip: 'SQLite'},
    {image: postgresql, tooltip: 'PostgreSQL'},
];



const TechSkills = ({bounds}) => {
    console.log(bounds);

    const insertStyleSheetRule = (ruleText) => {
        {
            let sheets = document.styleSheets;
        
            if(sheets.length == 0)
            {
                let style = document.createElement('style');
                style.appendChild(document.createTextNode(""));
                document.head.appendChild(style);
            }
        
            let sheet = sheets[sheets.length - 1];
            sheet.insertRule(ruleText, sheet.rules ? sheet.rules.length : sheet.cssRules.length);
        }
    }
    
    const renderIcons = () => {
        if(!bounds.rect)
            return null;
            
        return (
            skills.map((skill, index) => {
                let idx = index + 1;
                let radius = bounds.width / 2;
                let n = skills.length;
                let x = Math.round((radius*Math.cos(2*Math.PI*idx/n)));
                let y = Math.round((radius*Math.sin(2*Math.PI*idx/n)));
                insertStyleSheetRule(`@keyframes orbit${idx} { 
                    from { 	transform: rotate(0deg) translateX(${x}px) translateY(${y}px) rotate(0deg); }
                    to   {  transform: rotate(360deg) translateX(${x}px) translateY(${y}px) rotate(-360deg); } }`);
                
                let style = {
                    left: `${bounds.rect.left - bounds.margin + (bounds.width / 2) - 20}px`,  //(bounds.width + bounds.rect.left) / 2 - 20
                    position: 'absolute',
                    top: `${bounds.height / 2 - 20}px`,
                    animation: `orbit${idx} 40s linear infinite`
                };
                return (
                    <span style={style}>
                        <MDBTooltip
                            domElement
                            tag="span"
                            placement="top"
                        >
                            <img className="tech-icon" src={skill.image} alt={skill.tooltip}/>
                            <span>{skill.tooltip}</span>
                        </MDBTooltip>
                    </span>
                );
            })
        );
    }
    return (
        <div className="tech-icon-container">
            {renderIcons()}
        </div>
    );
}

export default TechSkills;