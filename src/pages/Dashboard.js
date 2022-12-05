import React, { useState, useEffect, useContext } from "react";

import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from "@windmill/react-ui";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";
import { AppContext } from "../context/AppContext";

function Dashboard() {
  const {profileCompleted,setProfileCompleted} = useContext(AppContext)
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  useEffect(() => {
    let calue = false

    const profile =  JSON.parse(localStorage.getItem("userProfile"));
    console.log(profile);

    if (profile.profile !== null) {
      setProfileCompleted(true)
      setData(profile)
    }else{
      setProfileCompleted(false)
    }
   // console.log(profile)
  
    return () => {
      calue = true
    }
  }, [])
  

  return (
    <>
      <div className="container px-10 mx-auto grid">
        <div className="w-full px-8 py-8 bg-green-50 rounded my-6 mx-auto">
          <div className=" items-center gap-3 md:flex ">
            <div className="w-2/5">
              <img
                className="object-cover  rounded-full"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
                style={{ width: "200px ", height: "200px" }}
              />
            </div>
            <div className="w-3/5">
              <h4>Hello welcome</h4>
              <h3 className="text-green-600 text-2xl font-bold ">{data.username}</h3>
              <div className="flex items center">
                <div className="mr-4 block">
                  <small className="block">NUIT No.</small>
                  <small className="block">Account No.</small>
                </div>
                <div className="block">
                  <small className="block">
                 : {data.profile?.client_nuib}
                  </small>
                  <small className="block">: 2546890716</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <ChartCard title="Revenue">
            <Doughnut {...doughnutOptions} />
            <ChartLegend legends={doughnutLegends} />
          </ChartCard>
          <div className="min-w-0  bg-white ">
              <div className="w-full mb-4 p-4 py-6 bg-green-50 rounded-lg shadow-xs flex justify-between">
                <div>
                  <h3 className="text-xl">Amount Due</h3>
                  <h3 className="text-2xl text-grey-200" style={{color:"#8A8E8E"}}>MZN 5 493.7</h3>
                  <small>On May 26, 2022</small>

                </div>
                

              </div>
              <div className="w-full mb-4 p-4 py-6 bg-green-50 rounded-lg shadow-xs flex justify-between">
                <div>
                  <h3 className="text-xl">Interest</h3>
                  <h3 className="text-2xl text-grey-200" style={{color:"#8A8E8E"}}>33.33%</h3>
                  <small>Annual Interest rate</small>

                </div>
              

              </div>
              <div className="w-full mb-4 p-4 py-6 bg-green-50 rounded-lg shadow-xs flex justify-between">
                <div>
                  <h3 className="text-xl">Period</h3>
                  <h3 className="text-2xl text-grey-200" style={{color:"#8A8E8E"}}>24 Months</h3>
                  <small>19 Months left</small>

                </div>
               

              </div>
              
            </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
