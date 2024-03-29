import React from 'react';
import java from '../assets/java.svg';
import python from '../assets/python.svg';
import javascript from '../assets/javascript.png';
import cpp from '../assets/cpp.svg';
import mysql from '../assets/mysql.svg';
import oracle from '../assets/oracle.svg';
import mssql from '../assets/mssql.svg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import reactImage from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import springboot from '../assets/springboot.svg';
import django from '../assets/django.svg';
import github from '../assets/github.svg';
import aws from '../assets/aws.svg';
import node from '../assets/node.png';
import mongo from '../assets/mongodb-icon.svg';
import hadoop from '../assets/apache_hadoop-icon.svg';
import spark from '../assets/apache_spark-ar21.svg';

const Skills = () => {

    const techs = [
        {
            id: 1,
            src: java,
            title: "Java",
            style: "shadow-yellow-500"
        },
        {
            id: 2,
            src: python,
            title: "Python",
            style: "shadow-blue-300"
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-600"
        },
        {
            id: 4,
            src: cpp,
            title: "C++",
            style: "shadow-blue-500"
        },
        {
            id: 5,
            src: mysql,
            title: "MySQL",
            style: "shadow-blue-500"
        },
        {
            id: 6,
            src: oracle,
            title: "Oracle",
            style: "shadow-red-500"
        },
        {
            id: 7,
            src: mssql,
            title: "Microsoft SQL Server",
            style: "shadow-red-300"
        },
        {
            id: 8,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 9,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        
        {
            id: 10,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 11,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 12,
            src: springboot,
            title: "Spring boot",
            style: "shadow-green-400"
        },
        {
            id: 13,
            src: django,
            title: "Django",
            style: "shadow-green-900"
        },
        {
            id: 14,
            src: github,
            title: "GitHub",
            style: "shadow-gray-900"
        },
        {
            id: 15,
            src: aws,
            title: "AWS",
            style: "shadow-yellow-500"
        },
        {
            id: 16,
            src: node,
            title: "Node",
            style: "shadow-green-200"
        },
        {
            id: 17,
            src: hadoop,
            title: "Hadoop",
            style: "shadow-blue-500"
        },
        {
            id: 18,
            src: mongo,
            title: "Mongo DB",
            style: "shadow-green-500"
        },
        {
            id: 19,
            src: spark,
            title: "Apache Spark",
            style: "shadow-orange-500"
        },
        
    ] 
  return (
    <div>
        <div name="skills" className="mx-auto p-16 sm:p-24 lg:p-48 bg-bgColor w-full min-h-[content-height] h-auto">
        <div className="max-w-screen-lg mx-auto">
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-text_color">Skills</p>
                <p className="py-6 text-text_color">These are the technologies I mainly work with</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center mt-5">
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={src} className="w-16 mx-auto mb-2" />
                            <p className="text-sm sm:text-base">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;
