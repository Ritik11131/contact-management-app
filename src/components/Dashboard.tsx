import axios from 'axios'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useQuery } from '@tanstack/react-query'
import { sumTotalCases } from '../helpers/sumTotalCases'
import { mergeAndAddAllValues } from '../helpers/mergeAndAddAllValues'


function Dashboard() {

    const getDataYearly = () => {
        return axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    }

    const dataYearly = useQuery({ queryKey: ['dataYearly'], queryFn: getDataYearly })
    const cases = dataYearly?.data?.data?.cases;
    const deaths = dataYearly?.data?.data?.deaths;
    const recovered = dataYearly?.data?.data?.recovered;

    const TotalCases = cases && mergeAndAddAllValues(sumTotalCases(cases))
    const TotalDeaths = deaths && mergeAndAddAllValues(sumTotalCases(deaths))
    const TotalRecovered = recovered && mergeAndAddAllValues(sumTotalCases(recovered))

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

    const donutSeries: any = [44, 55, 41, 17, 15]
    const donutOptions: any = {
        chart: {
            type: 'donut',
        },

    }


    return (
        <div className='p-4 sm:ml-64'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='flex justify-center items-center'>
                        <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={400} width={400} />
                    </div>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 min-h-full lg:grid-cols-2 h-96 mx-7'>
                        
                            <a href="#" className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Notewor </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest </p>
                            </a>
                            <a href="#" className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Notewor </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest </p>
                            </a>
                            <a href="#" className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Notewor </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest </p>
                            </a>
                            <a href="#" className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Notewor </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest </p>
                            </a>
                      
                
                       
                    </div>
                </div>
            </div>
            <div className='mt-10 '>
                <ReactApexChart options={options} series={series} type="line" height={350} />
            </div>
        </div>
    )
}

export default Dashboard