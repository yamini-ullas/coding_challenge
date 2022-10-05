import { Fragment, ReactElement, useState } from "react";
//importing startups array
import startups from '../../mocks/startups.json';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";



export default function StartupList(): ReactElement {
  const [startupList, setStartupList] = useState(startups);
  
  return <Fragment>
    {startupList.map((startup) => (
      <List>
        <ListItem>
          <p className="startupName">{startup.name}</p>
          <div>
            <span>
              Founded:{startup.dateFounded.slice(0,4)} |
            </span>
            <span>
               {startup.employees} Employees |
            </span>
            <span>
              {startup.totalFunding} $ |
            </span>
            <span>
              {startup.currentInvestmentStage}
            </span>
          </div>
          <p>{startup.shortDescription}</p>
        </ListItem>
      </List>
    ))}
  </Fragment>;
}
