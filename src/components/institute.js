import React from "react";
import { Typography } from "@material-tailwind/react";

function Institute(props) {
    return (
        <div>
            <Typography className="capitalize font-sans font-bold text-4xl text-center" color="black">{props.ins.inst_name}</Typography>
        </div>
    )
}

export default Institute;