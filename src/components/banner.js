import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

import {
    AcademicCapIcon,
    WrenchScrewdriverIcon, 
    CodeBracketIcon, 
    UserIcon
} from '@heroicons/react/24/solid';

import '../static/styles/banner.css'
import Homepage from "./homepage";
import Education from "./education";
import Skills from "./skills";
import Projects from "./projects";

function Banner() {
    const data = [
        {
            label: "Home",
            value: "home",
            icon: UserIcon,
            desc: <Homepage />,
        },

        {
          label: "Education",
          value: "education",
          icon: AcademicCapIcon,
          desc: <Education />,
        },
        {
          label: "Skills",
          value: "skills",
          icon: WrenchScrewdriverIcon,
          desc: <Skills />
        },
        {
          label: "Projects",
          value: "projects",
          icon: CodeBracketIcon,
          desc: <Projects />,
        },
      ];
      return (
        <Tabs value="home">
          <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "bg-blue-800/20 shadow-none text-white"
          }}>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel class="flex justify-center font-comfortaa items-center"key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      );
}

export default Banner;