import axios from 'axios'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useQuery } from '@tanstack/react-query'
import { sumTotalCases } from '../helpers/sumTotalCases'
import { mergeAndAddAllValues } from '../helpers/mergeAndAddAllValues'
import Map from './Map'
import CovidCards from './CovidCards'


function Dashboard() {

    const getDataYearly = () => {
        return axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    }

    const getTotalCases = () => {
        return axios.get("https://disease.sh/v3/covid-19/all")
    }

    const dataYearly = useQuery({ queryKey: ['dataYearly'], queryFn: getDataYearly })
    const toatlCases = useQuery({ queryKey: ['toatlCases'], queryFn: getTotalCases })


    const casesCountObj = toatlCases && toatlCases?.data?.data;
    const cases = dataYearly?.data?.data?.cases;
    const deaths = dataYearly?.data?.data?.deaths;
    const recovered = dataYearly?.data?.data?.recovered;

    const TotalCases = cases && mergeAndAddAllValues(sumTotalCases(cases));
    const TotalDeaths = deaths && mergeAndAddAllValues(sumTotalCases(deaths));
    const TotalRecovered = recovered && mergeAndAddAllValues(sumTotalCases(recovered));

    const keys_cases = cases && Object.keys(TotalCases)
    const values_cases = cases && Object.values(TotalCases)


    const keys_deaths = deaths && Object.keys(TotalCases)
    const values_deaths = deaths && Object.values(TotalDeaths)

    const keys_recovered = recovered && Object.keys(TotalCases)
    const values_recovered = recovered && Object.values(TotalRecovered)

    const all_keys = cases && [...new Set(keys_cases.concat(keys_deaths, keys_recovered))];



    const series: any = [
        {
            name: "Cases",
            data: values_cases
        },
        {
            name: "Death",
            data: values_deaths
        },
        {
            name: "Recovered",
            data: values_recovered
        }
    ]

    const options: any = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Monthly Cases',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: all_keys
        },

    }

    const donutSeries: any = [casesCountObj?.cases, casesCountObj?.deaths, casesCountObj?.recovered, casesCountObj?.active]
    const donutOptions: any = {
        chart: {
            type: 'donut',
        },
        labels: ['Today Cases', 'Today Deaths', 'Today Recovered', 'Active Cases'],
        legend: {
            labels: {
                colors: ['#fff'],
            },
        },

    }

    return (
        <div className='mt-16 sm:ml-64 sm:p-8'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='flex p-28 sm:p-2 justify-center items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={450} width={450} />
                    </div>
                    <CovidCards casesCountObj={casesCountObj}/>
                </div>
            </div>
            <div className='mt-36 mb-60'>
                <ReactApexChart options={options} series={series} type="line" height={350} />
            </div>
            <div className='mt-36 mb-40'>
                <Map/> 
            </div>
        </div>
    )
}

export default Dashboard;