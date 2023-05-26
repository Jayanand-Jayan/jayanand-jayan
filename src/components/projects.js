import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Chip
} from '@material-tailwind/react';

function Projects() {

    const projects = [
        {
            pname: 'Recommendo',
            desc: 'A website application for recommending movies and books, using the concepts of Deep Learning, client-side scripting using ReactJS, server-side scripting using FastAPI and database MySQL.',
            tags: ['AI', 'Deep Learning', 'ReactJS', 'FastAPI', 'MySQL']
        },
        {
            pname: 'Hospital Administration System',
            desc: 'A basic demo-purpose hospital administrative system website, focusing on DBMS with the database SQLite3, backend using Django 3.2 and frontend using CSS, HTML and Bootstrap 4',
            tags: ['SQLite3', 'Django', 'CSS', 'HTML', 'Bootstrap']
        },
        {
            pname: 'Chrome extension for detection of malicious and phishing URLs',
            desc: 'An application of LSTM, CNNs and Convolutional LSTM concepts for detecting whether the current URL visited can be counted as malicious/phishing or not',
            tags: ['Deep Learning', 'LSTM', 'CNN', 'Convolutional LSTM']
        },
        {
            pname: 'TreSecura',
            desc: 'A proposed architecture for a three-layered authentication system, using FastAPI, HTML, CSS and JavaScript, clubbed with MySQL database.',
            tags: ['FastAPI', 'HTML', 'CSS', 'JavaScript', 'MySQL']
        },
        {
            pname: 'TapNShop',
            desc: 'A project dedicated to my own university of VIT, wherein a student scans their ID card for any purchase they make and the sales history of a day gets recorded onto the shopkeepers’ devices. At any point, they can view helpful plots aiding them in strategic decision making. Implemented using FastAPI, HTML, CSS and JavaScript clubbed with MySQL database.',
            tags: ['FastAPI', 'HTML', 'CSS', 'JavaScript']
        },
        {
            pname: 'FoodBI',
            desc: 'Implemented using FastAPI, HTML, CSS and JavaScript, this is a web application which can help make strategic business decisions for upcoming restaurants on Zomato. By filling in a few details, they can get an analysis of their chances of success via various analytical plots.',
            tags: ['FastAPI', 'HTML', 'CSS', 'JavaScript']
        }
    ]

    

    return (
        <div className="grid grid-row-6 gap-5 bg-blue-gray-50 py-10 rounded-lg w-full h-auto">
            {projects.map(({pname, desc, tags}, index) => (
                
                <Card className="bg-white w-11/12 mx-auto">
                    <CardHeader floated={false} className="w-fit p-4 mx-auto bg-blue-100 text-blue-700 font-ptserif text-xl font-bold">{pname}</CardHeader>
                    <CardBody className="text-lg font-comfortaa whitespace-break-spaces">
                        <div className="grid grid-flow-col auto-cols-max gap-2 justify-center">{tags.map((tag, index) => (
                            <Chip variant="outlined" className="w-fit mx-auto mb-2 rounded-full" value={tag}/>
                        ))}</div>
                        {desc}
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}

export default Projects;