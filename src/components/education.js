import React, {Fragment} from "react";
import {
  Card,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Typography,
  CardBody,
  CardFooter, 
  Chip,
  CardHeader,
  List, 
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { ArrowLongRightIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
function Education() {
    const gradesubjs = [{grade: "S", subjs: 11},{grade: "A", subjs: 20},{grade: "B", subjs: 11},{grade: "C", subjs: 1},
    {grade: "D", subjs: 1},{grade: "E", subjs: 0},{grade: "F", subjs: 0}]
    
    const semgpa = [{sem: "Fall Semester 2020-21", gpa: 8.95}, {sem: "Winter Semester 2020-21", gpa: 8.2},
                    {sem: "Fall Semester 2021-22", gpa: 9.3}, {sem: "Winter Semester 2021-22", gpa: 8.87},
                    {sem: "Fall Semester 2022-23", gpa: 8.41}, {sem: "Winter Semester 2022-23", gpa: 9.2},
                    {sem: "Fall Semester 2023-24", gpa: "Coming Soon..."}
                ]
    
    const subjs = [{sname: "Data Structures and Algorithms"}, {sname: "Design and Analysis of Algorithms"},
                    {sname: "Operating System"}, {sname: "Networking and Communication"}, {sname: "Internet and Web Programming"}, 
                    {sname: "Machine Learning Essentials"}, {sname: "Deep Learning: Principles and Practices"}]
    
    const courses = [{sname: "Andrew NG’s Machine Learning (via Coursera)"}, 
                    {sname: "Machine Learning Foundations: A Case Study Approach (By University of Washington via Coursera)"},
                    {sname: "Operating Systems and You: Becoming a Power User (By Google via Coursera)"},
                    {sname: "OWASP Top Ten Vulnerabilities (via TryHACKMe)"}]

    return (
        <Fragment> 
            <Accordion open='1'>
                <AccordionHeader>
                    <Typography className="capitalize font-ptserif font-bold text-4xl" color="black">
                        Vellore Institute of Technology, Chennai {'\n'}
                        <Typography className="capitalize font-ptserif font-bold whitespace-break-spaces" variant="h6" color="gray">
                            B. Tech in CSE with specialisation in Artificial Intelligence and Machine Learning      -       2020-2024
                        </Typography>
                    </Typography>
                </AccordionHeader>
                <AccordionBody className="w-full h-full max">
                    <div className="grid grid-cols-2 gap-2 w-full h-full"><Card className="flex bg-blue-gray-50 items-center justify-center w-full my-2">
                        <CardHeader floated={false} className="font-bold font-comfortaa text-xl p-2">Academic Performance</CardHeader>
                        <CardBody className="block mx-auto w-full">
                            <Chip variant="ghost" className="mx-auto mb-5 w-1/3 font-poppins text-center text-base" value="Overall CGPA: 8.84"/>
                            <Card className="block m-auto h-auto w-auto float-left">
                                <CardBody className="m-auto">
                                    <table className="w-full min-w-max table-auto text-left">
                                        <thead>
                                            <tr>
                                                <th key="grades" className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="medium"
                                                    color="blue-gray"
                                                    className="font-bold font-poppins leading-none opacity-70"
                                                    >
                                                    Grades
                                                </Typography>
                                                </th>
                                                <th key="subjs" className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="medium"
                                                    color="blue-gray"
                                                    className="font-bold font-poppins leading-none opacity-70"
                                                    >
                                                    No. of subjects
                                                </Typography>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {gradesubjs.map(({ grade, subjs }, index) => (
                                                <tr key={index}>
                                                <td className="p-4 border-b border-blue-gray-50">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {grade}
                                                    </Typography>
                                                    </td>
                                                    <td className="p-4 border-b border-blue-gray-50">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {subjs}
                                                    </Typography>
                                                    </td>
                                                </tr>
                                            ))}                                           
                                        </tbody>
                                    </table>
                                </CardBody>
                            </Card>
                            <Card className="block m-auto h-auto w-auto float-right">
                                <CardBody className="m-auto">
                                    <table className="w-full min-w-max table-auto text-left">
                                        <thead>
                                            <tr>
                                                <th key="sem" className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="medium"
                                                    color="blue-gray"
                                                    className="font-bold font-poppins leading-none opacity-70"
                                                    >
                                                    Semester
                                                </Typography>
                                                </th>
                                                <th key="gpa" className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="medium"
                                                    color="blue-gray"
                                                    className="font-bold font-poppins leading-none opacity-70"
                                                    >
                                                    GPA
                                                </Typography>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {semgpa.map(({ sem, gpa }, index) => (
                                                <tr key={index}>
                                                <td className="p-4 border-b border-blue-gray-50">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {sem}
                                                    </Typography>
                                                    </td>
                                                    <td className="p-4 border-b border-blue-gray-50">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {gpa}
                                                    </Typography>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>

                    <Card className="grid grid-cols-2 gap-2 bg-blue-gray-50 justify-center w-full my-2 p-5 float-right">
                        <Card>
                            <CardHeader floated={false} className="font-extrabold w-fit mx-auto font-comfortaa text-xl p-3">Areas of Interest</CardHeader>
                            <CardBody className="block m-auto w-full">
                                <List className="flex align-center justify-center">
                                    {subjs.map(({sname}) => (
                                        <ListItem className="flex align-start justify-start">
                                            <ListItemPrefix className="float-left">
                                                <CheckBadgeIcon className="w-5 h-5" fill="blue"/>
                                            </ListItemPrefix>
                                                <Typography variant="h6" className="font-poppins" color="blue-gray">{sname}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader floated={false} className="font-bold w-fit mx-auto font-comfortaa text-xl p-3">Certifications</CardHeader>
                            <CardBody className="block m-auto w-full">
                                <List className="flex align-center justify-center">
                                    {courses.map(({sname}) => (
                                        <ListItem className="flex align-start justify-start">
                                            <ListItemPrefix className="float-left">
                                                <CheckBadgeIcon className="w-5 h-5" fill="blue"/>
                                            </ListItemPrefix>
                                                <Typography variant="h6" className="font-poppins" color="blue-gray">{sname}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardBody>
                        </Card>
                    </Card>
                    </div>
                    {'\n'}
                    <Card className="flex bg-blue-gray-50 items-center justify-center w-full h-screen">
                        <CardBody className="w-5/6 h-full">
                        <iframe title="VIT Chennai" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040785932439!2d80.15085337494116!3d12.84064098746282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1684240122117!5m2!1sen!2sin" 
                style={{ border: 0, borderRadius: 8+'px'}} allowfullscreen="" 
                loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-full"/>
                        </CardBody>
                        <CardFooter>
                            <a href="https://chennai.vit.ac.in" className="inline-block">
                                <Button size="lg" variant="text" className="flex items-center gap-2">
                                    Visit Website 
                                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                </AccordionBody>
            </Accordion>
            <Accordion open='1'>
                <AccordionHeader>
                <Typography className="capitalize font-ptserif font-bold text-4xl" color="black">
                    PACE Jr. Science College, Dadar {'\n'}
                    <Typography className="capitalize font-ptserif font-bold whitespace-break-spaces" variant="h6" color="gray">
                            Higher Secondary Education      -       2018-2020
                    </Typography>
                </Typography>
                </AccordionHeader>
                <AccordionBody className="w-full h-full">
                <Card className="flex items-center bg-blue-gray-50 justify-center w-full h-screen">
                    <CardBody className="w-5/6 h-full">
                        <iframe title="PACE" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120706.3255880845!2d72.6846737972656!3d19.016519000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf23fa154141%3A0x4b1a85b3aebc567c!2sPACE%20IIT%20%26%20Medical!5e0!3m2!1sen!2sin!4v1684302492121!5m2!1sen!2sin"
                        style={{ border: 0, borderRadius: 8+'px'}} allowfullscreen="" 
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-full" />
                    </CardBody>
                </Card>
                </AccordionBody>
            </Accordion>
        </Fragment>
    )
}

export default Education;