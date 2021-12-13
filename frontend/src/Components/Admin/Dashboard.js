import React,{useEffect,useState} from 'react'
import CountUp from 'react-countup';
import {Bar,Pie,Line} from "react-chartjs-2"
import 'chart.js/auto';
import AdminNavbar from './Navbar';
import './admin.css'

const Dashboard = () => {
    const [Donors,setDonors] = useState([]);
    const [Donee,setDonee] = useState([]);
    const [Donation,setDonations] = useState([]);

    useEffect ( () => {
        getDonations()
        getDonee()
        getDonors()
    },[])


    const getDonors = async () => {
        const response = await fetch ("http://localhost:5000/api/donor/register")
        const result = await response.json ()
        setDonors(result)
    }
    const getDonee = async () => {
        const response = await fetch ("http://localhost:5000/api/donee/register")
        const result = await response.json ()
        setDonee(result)
    }
    const getDonations = async () => {
        const response = await fetch ("http://localhost:5000/api/admin/donations")
        const result = await response.json ()
        setDonations(result)
    }
    return (
        <div>
            <AdminNavbar/>
             <div className="container charts">
            <div className="row padding">
                <div className="col-sm-12 col-lg-4 col-md-12">
                    <div className="card count">
                        <h5>Donors Registered</h5>
                        <h6>
                        <CountUp
                            start={0}
                            end={Donors.length}
                            duration={2.75}
                            separator=" "
                            decimal=","
                        />
                        </h6>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="card count">
                        <h5>Donees Registered</h5>
                        <h6>
                        <CountUp
                            start={0}
                            end={Donee.length}
                            duration={2.75}
                            separator=" "
                            decimal=","
                        />
                        </h6>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="card count">
                        <h5>Donations Made</h5>
                        <h6>
                        <CountUp
                            start={0}
                            end={Donation.length}
                            duration={2.75}
                            separator=" "
                            decimal=","
                        />
                        </h6>
                    </div>
                </div>
            </div>
            <div className="row padding">
                <div className="col-lg-4 col-sm-12 col-md-12">
                    <div className="card graph">
                    <Bar
                        height={400}
                        width={500}
                        data= {{
                            labels: ['Donors', 'Donees','Donations'],
                            datasets: [{
                                label: 'Registered donees, donors and donations made',
                                data: [Donors.length,Donee.length,Donation.length],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor:[
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        }}
                        options= {{
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            },
                            maintainAspectRatio:false
                        }}

                    />
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="card graph">
                <Pie
                    height={400}
                    width={500}
                    data= {{
                        labels: ['Donors', 'Donees','Donations'],
                        datasets: [{
                            data: [Donors.length,Donee.length,Donation.length],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor:[
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }}
                    options= {{
                    
                        maintainAspectRatio:false
                    }}
                />
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="card graph">
                <Line
                height={400}
                width={500} 
                    data = {
                        {
                            labels: ['Donors', 'Donees','Donations'],
                            datasets: [
                              {
                                label: 'Registered donors,donees and donations made',
                                data: [Donors.length,Donee.length,Donation.length],
                                fill: false,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                              },
                            ],
                          }
                    }
                    options= {{
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        maintainAspectRatio:false
                    }}

                />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard
