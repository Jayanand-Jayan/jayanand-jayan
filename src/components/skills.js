import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Chip, 
    Typography
} from "@material-tailwind/react";
import Python from '../static/images/Python.png'
import Cpp from '../static/images/Cpp.jpg'
import C from '../static/images/C.png'
import Java from '../static/images/Java.png'
import JavaScript from '../static/images/JavaScript.png';
import CSS from '../static/images/CSS.png'
import ReactJs from '../static/images/logo192.png'
import JQuery from '../static/images/JQuery.png'
import Flask from '../static/images/Flask.png'
import Django from '../static/images/Django.png'
import FastAPI from '../static/images/FastAPI.png'
import TensorFlow from '../static/images/TensorFlow.png'
import Keras from '../static/images/Keras.png'
import PyTorch from '../static/images/PyTorch.png'
import Pandas from '../static/images/Pandas.png'
import Numpy from '../static/images/Numpy.png'
import Seaborn from '../static/images/Seaborn.png'
import Matplotlib from '../static/images/Matplotlib.png'
import Scikit from '../static/images/Scikit.png'
import Plotly from '../static/images/Plotly.png'
import VSCode from '../static/images/VSCode.png'
import Atom from '../static/images/Atom.png'
import NetBeans from '../static/images/NetBeans.png'
import JupyterNotebook from '../static/images/JupyterNotebook.jpg'
import R from '../static/images/R.png'
import MSExcel from '../static/images/MSExcel.png'

function Skills() {
    return (
        <div className="grid grid-cols-1 gap-5">
            <Card className="block m-auto w-3/4 h-auto bg-blue-gray-50">
                <CardHeader className="block mx-auto mt-5 w-fit">
                    <Chip variant="gradient" value="PROGRAMMING LANGUAGES" color="indigo" className="w-full font-ptserif text-xl text-center"/>
                </CardHeader>
                <CardBody className="grid grid-cols-6 gap-5">
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Python} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Python
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Cpp} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            C++
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={C} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            C
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Java} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Java
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={JavaScript} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            JavaScript
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={CSS} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            CSS
                        </Typography>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>

            <Card className="block m-auto w-3/4 h-auto bg-blue-gray-50">
                <CardHeader className="block mx-auto mt-5 w-fit">
                    <Chip variant="gradient" value="FRAMEWORKS" color="indigo" className="w-full font-ptserif text-xl text-center"/>
                </CardHeader>
                <CardBody className="grid grid-cols-6 gap-5 ">
                    <Card className="block w-full h-full mx-auto">
                        <CardHeader floated={false} color="white" className="mx-auto h-auto w-3/4">
                            <img src={ReactJs} alt="Python" layout="fill" className="w-full h-full"/>
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            ReactJS
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="mx-auto h-3/4 w-3/4">
                            <img src={JQuery} alt="Python" layout="fill" className="w-full h-full"/>
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            JQuery
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="mx-auto h-3/4 w-3/4">
                            <img src={Flask} alt="Python" layout="fill" className="w-full h-full"/>
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Flask
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="mx-auto h-3/4 w-3/4">
                            <img src={Django} alt="Python" layout="fill" className="w-full h-full"/>
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Django
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="mx-auto h-3/4 w-3/4">
                            <img src={FastAPI} alt="Python" layout="fill" className="w-full h-full"/>
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            FastAPI
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="mx-auto h-3/4 w-3/4">
                            <img src={TensorFlow} alt="Python" layout="fill" className="w-full h-full"/>
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2 font-poppins text-center">
                            TensorFlow
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full col-start-3">
                        <CardHeader floated={false} color="white" className="mx-auto h-3/4 w-3/4">
                            <img src={Keras} alt="Python" layout="fill" className="w-full h-full"/>
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Keras
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full col-start-4">
                        <CardHeader floated={false} color="white" className="mx-auto h-3/4 w-3/4">
                            <img src={PyTorch} alt="Python" layout="fill" className="w-full h-full"/>
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            PyTorch
                        </Typography>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>

            <Card className="block m-auto w-3/4 h-auto bg-blue-gray-50">
                <CardHeader className="block mx-auto mt-5 w-fit">
                    <Chip variant="gradient" value="LIBRARIES" color="indigo" className="w-full font-ptserif text-xl text-center"/>
                </CardHeader>
                <CardBody className="grid grid-cols-6 gap-5">
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Pandas} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins text-center">
                            Pandas
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Numpy} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Numpy
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Matplotlib} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Matplotlib
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Scikit} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Scikit
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Seaborn} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Seaborn
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Plotly} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Plotly
                        </Typography>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>

            <Card className="block m-auto w-3/4 h-auto bg-blue-gray-50">
                <CardHeader className="block mx-auto mt-5 w-fit">
                    <Chip variant="gradient" value="EDITORS" color="indigo" className="w-full font-ptserif text-xl text-center"/>
                </CardHeader>
                <CardBody className="grid grid-cols-6 gap-5">
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={VSCode} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            VSCode
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={Atom} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Atom
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={NetBeans} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            NetBeans
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={JupyterNotebook} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            Jupyter Notebook
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={R} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            R Studio
                        </Typography>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full">
                        <CardHeader floated={false} color="white" className="flex justify-center align-center h-5/6 w-5/6">
                            <img src={MSExcel} alt="Python" layout="fill" />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 font-poppins  text-center">
                            MS Excel
                        </Typography>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
        </div>
    )
}

export default Skills;