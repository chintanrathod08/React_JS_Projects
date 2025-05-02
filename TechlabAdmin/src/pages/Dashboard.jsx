import React from 'react'
import Asiderbar from '../components/Asiderbar'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { PieChart } from '@mui/x-charts/PieChart';
import CountUp from 'react-countup';

function Dashboard() {

    const sidebarOpen = useSelector((state) => state.sidebarOpen);

    const data = [
        { id: 1, value: 20, label: 'Slice 1' },
        { id: 2, value: 30, label: 'Slice 2' },
        { id: 3, value: 50, label: 'Slice 3' },
    ];
    const series = [{ data }];
    const colorPalette = ['#3498db', '#e74c3c', '#2ecc71'];

    return (
        <>
            {/* MainConetent-Section */}
            <section className='w-full h-full flex'>
                <Asiderbar />

                <section className={`${sidebarOpen ? 'w-[84%] h-[100vh]  duration-300 transition-all' : 'w-[100%] h-[100vh]'}`}>
                    <Header />

                    {/*---- Conent-Section -----*/}
                    <section className='w-[100%] h-[89vh]  bg-[#F5F5F5] flex justify-center pt-5 pb-5 rounded-tl-[8px]'>

                        <section className='w-[90%] md:w-[95%] h-auto' id='content-sec' >

                            {/* ---------------sec-1----------------- */}

                            <section className='w-full h-auto  flex justify-between'>

                                {/* --------------------- */}

                                <div className='w-[550px] h-[240px] p-4 shadow-lg rounded-[8px] bg-[white] grid grid-cols-2 '>

                                    <div className='border-b border-[gray] flex justify-around items-center'>
                                        <CountUp className='font-bold'
                                            start={0}
                                            end={500}
                                            duration={2.5}
                                            separator=","
                                            decimals={2}
                                            prefix=""
                                            suffix=" units"
                                            onStart={() => console.log('Count started!')}
                                            onEnd={() => console.log('Count ended!')}
                                        />
                                        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmczMjA0IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiBjbGFzcz0iYXBleGNoYXJ0cy1zdmciIHhtbG5zOmRhdGE9IkFwZXhDaGFydHNOUyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiIHN0eWxlPSJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsiPjxnIGlkPSJTdmdqc0czMjA2IiBjbGFzcz0iYXBleGNoYXJ0cy1pbm5lciBhcGV4Y2hhcnRzLWdyYXBoaWNhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjxkZWZzIGlkPSJTdmdqc0RlZnMzMjA1Ij48Y2xpcFBhdGggaWQ9ImdyaWRSZWN0TWFza3llM3MxNmc1Ij48cmVjdCBpZD0iU3ZnanNSZWN0MzIxMSIgd2lkdGg9IjEwNyIgaGVpZ2h0PSI1MyIgeD0iLTMuNSIgeT0iLTEuNSIgcng9IjAiIHJ5PSIwIiBvcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgZmlsbD0iI2ZmZiI+PC9yZWN0PjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJncmlkUmVjdE1hcmtlck1hc2t5ZTNzMTZnNSI+PHJlY3QgaWQ9IlN2Z2pzUmVjdDMyMTIiIHdpZHRoPSIxMDQiIGhlaWdodD0iNTQiIHg9Ii0yIiB5PSItMiIgcng9IjAiIHJ5PSIwIiBvcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgZmlsbD0iI2ZmZiI+PC9yZWN0PjwvY2xpcFBhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJTdmdqc0xpbmVhckdyYWRpZW50MzIxNyIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPjxzdG9wIGlkPSJTdmdqc1N0b3AzMjE4IiBzdG9wLW9wYWNpdHk9IjEiIHN0b3AtY29sb3I9IiMzMzg1ZDYiIG9mZnNldD0iMCI+PC9zdG9wPjxzdG9wIGlkPSJTdmdqc1N0b3AzMjE5IiBzdG9wLW9wYWNpdHk9IjAuNCIgc3RvcC1jb2xvcj0iIzMzODVkNiIgb2Zmc2V0PSIwLjAwMyI+PC9zdG9wPjxzdG9wIGlkPSJTdmdqc1N0b3AzMjIwIiBzdG9wLW9wYWNpdHk9IjAiIHN0b3AtY29sb3I9IiMzMzg1ZDYiIG9mZnNldD0iMSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxsaW5lIGlkPSJTdmdqc0xpbmUzMjEwIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iNTAiIHN0cm9rZT0iI2I2YjZiNiIgc3Ryb2tlLWRhc2hhcnJheT0iMyIgY2xhc3M9ImFwZXhjaGFydHMteGNyb3NzaGFpcnMiIHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjUwIiBmaWxsPSIjYjFiOWM0IiBmaWx0ZXI9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMC45IiBzdHJva2Utd2lkdGg9IjEiPjwvbGluZT48ZyBpZD0iU3ZnanNHMzIyMyIgY2xhc3M9ImFwZXhjaGFydHMteGF4aXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDApIj48ZyBpZD0iU3ZnanNHMzIyNCIgY2xhc3M9ImFwZXhjaGFydHMteGF4aXMtdGV4dHMtZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgLTQpIj48L2c+PC9nPjxnIGlkPSJTdmdqc0czMjMyIiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkIj48ZyBpZD0iU3ZnanNHMzIzMyIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmVzLWhvcml6b250YWwiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PGxpbmUgaWQ9IlN2Z2pzTGluZTMyMzUiIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCIgeTI9IjAiIHN0cm9rZT0iI2VlZWVlZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmUiPjwvbGluZT48bGluZSBpZD0iU3ZnanNMaW5lMzIzNiIgeDE9IjAiIHkxPSIxMCIgeDI9IjEwMCIgeTI9IjEwIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGNsYXNzPSJhcGV4Y2hhcnRzLWdyaWRsaW5lIj48L2xpbmU+PGxpbmUgaWQ9IlN2Z2pzTGluZTMyMzciIHgxPSIwIiB5MT0iMjAiIHgyPSIxMDAiIHkyPSIyMCIgc3Ryb2tlPSIjZWVlZWVlIiBzdHJva2UtZGFzaGFycmF5PSIwIiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkbGluZSI+PC9saW5lPjxsaW5lIGlkPSJTdmdqc0xpbmUzMjM4IiB4MT0iMCIgeTE9IjMwIiB4Mj0iMTAwIiB5Mj0iMzAiIHN0cm9rZT0iI2VlZWVlZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmUiPjwvbGluZT48bGluZSBpZD0iU3ZnanNMaW5lMzIzOSIgeDE9IjAiIHkxPSI0MCIgeDI9IjEwMCIgeTI9IjQwIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGNsYXNzPSJhcGV4Y2hhcnRzLWdyaWRsaW5lIj48L2xpbmU+PGxpbmUgaWQ9IlN2Z2pzTGluZTMyNDAiIHgxPSIwIiB5MT0iNTAiIHgyPSIxMDAiIHkyPSI1MCIgc3Ryb2tlPSIjZWVlZWVlIiBzdHJva2UtZGFzaGFycmF5PSIwIiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkbGluZSI+PC9saW5lPjwvZz48ZyBpZD0iU3ZnanNHMzIzNCIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmVzLXZlcnRpY2FsIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPjwvZz48bGluZSBpZD0iU3ZnanNMaW5lMzI0MiIgeDE9IjAiIHkxPSI1MCIgeDI9IjEwMCIgeTI9IjUwIiBzdHJva2U9InRyYW5zcGFyZW50IiBzdHJva2UtZGFzaGFycmF5PSIwIj48L2xpbmU+PGxpbmUgaWQ9IlN2Z2pzTGluZTMyNDEiIHgxPSIwIiB5MT0iMSIgeDI9IjAiIHkyPSI1MCIgc3Ryb2tlPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLWRhc2hhcnJheT0iMCI+PC9saW5lPjwvZz48ZyBpZD0iU3ZnanNHMzIxMyIgY2xhc3M9ImFwZXhjaGFydHMtYXJlYS1zZXJpZXMgYXBleGNoYXJ0cy1wbG90LXNlcmllcyI+PGcgaWQ9IlN2Z2pzRzMyMTQiIGNsYXNzPSJhcGV4Y2hhcnRzLXNlcmllcyIgc2VyaWVzTmFtZT0iTmV0eFByb2ZpdCIgZGF0YTpsb25nZXN0U2VyaWVzPSJ0cnVlIiByZWw9IjEiIGRhdGE6cmVhbEluZGV4PSIwIj48cGF0aCBpZD0iU3ZnanNQYXRoMzIyMSIgZD0iTSAwIDUwTCAwIDQ3LjVDIDcgNDcuNSAxMyAzNSAyMCAzNUMgMjcgMzUgMzMgNDcuNSA0MCA0Ny41QyA0NyA0Ny41IDUzIDIyLjUgNjAgMjIuNUMgNjcgMjIuNSA3MyAzNSA4MCAzNUMgODcgMzUgOTMgMTAgMTAwIDEwQyAxMDAgMTAgMTAwIDEwIDEwMCA1ME0gMTAwIDEweiIgZmlsbD0idXJsKCNTdmdqc0xpbmVhckdyYWRpZW50MzIxNykiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGNsYXNzPSJhcGV4Y2hhcnRzLWFyZWEiIGluZGV4PSIwIiBjbGlwLXBhdGg9InVybCgjZ3JpZFJlY3RNYXNreWUzczE2ZzUpIiBwYXRoVG89Ik0gMCA1MEwgMCA0Ny41QyA3IDQ3LjUgMTMgMzUgMjAgMzVDIDI3IDM1IDMzIDQ3LjUgNDAgNDcuNUMgNDcgNDcuNSA1MyAyMi41IDYwIDIyLjVDIDY3IDIyLjUgNzMgMzUgODAgMzVDIDg3IDM1IDkzIDEwIDEwMCAxMEMgMTAwIDEwIDEwMCAxMCAxMDAgNTBNIDEwMCAxMHoiIHBhdGhGcm9tPSJNIC0xIDYwTCAtMSA2MEwgMjAgNjBMIDQwIDYwTCA2MCA2MEwgODAgNjBMIDEwMCA2MCI+PC9wYXRoPjxwYXRoIGlkPSJTdmdqc1BhdGgzMjIyIiBkPSJNIDAgNDcuNUMgNyA0Ny41IDEzIDM1IDIwIDM1QyAyNyAzNSAzMyA0Ny41IDQwIDQ3LjVDIDQ3IDQ3LjUgNTMgMjIuNSA2MCAyMi41QyA2NyAyMi41IDczIDM1IDgwIDM1QyA4NyAzNSA5MyAxMCAxMDAgMTAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMzM4NWQ2IiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtYXJlYSIgaW5kZXg9IjAiIGNsaXAtcGF0aD0idXJsKCNncmlkUmVjdE1hc2t5ZTNzMTZnNSkiIHBhdGhUbz0iTSAwIDQ3LjVDIDcgNDcuNSAxMyAzNSAyMCAzNUMgMjcgMzUgMzMgNDcuNSA0MCA0Ny41QyA0NyA0Ny41IDUzIDIyLjUgNjAgMjIuNUMgNjcgMjIuNSA3MyAzNSA4MCAzNUMgODcgMzUgOTMgMTAgMTAwIDEwIiBwYXRoRnJvbT0iTSAtMSA2MEwgLTEgNjBMIDIwIDYwTCA0MCA2MEwgNjAgNjBMIDgwIDYwTCAxMDAgNjAiPjwvcGF0aD48ZyBpZD0iU3ZnanNHMzIxNSIgY2xhc3M9ImFwZXhjaGFydHMtc2VyaWVzLW1hcmtlcnMtd3JhcCIgZGF0YTpyZWFsSW5kZXg9IjAiPjwvZz48L2c+PGcgaWQ9IlN2Z2pzRzMyMTYiIGNsYXNzPSJhcGV4Y2hhcnRzLWRhdGFsYWJlbHMiIGRhdGE6cmVhbEluZGV4PSIwIj48L2c+PC9nPjxsaW5lIGlkPSJTdmdqc0xpbmUzMjQzIiB4MT0iMCIgeTE9IjAiIHgyPSIxMDAiIHkyPSIwIiBzdHJva2U9IiNiNmI2YjYiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIHN0cm9rZS13aWR0aD0iMSIgY2xhc3M9ImFwZXhjaGFydHMteWNyb3NzaGFpcnMiPjwvbGluZT48bGluZSBpZD0iU3ZnanNMaW5lMzI0NCIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMCIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgc3Ryb2tlLXdpZHRoPSIwIiBjbGFzcz0iYXBleGNoYXJ0cy15Y3Jvc3NoYWlycy1oaWRkZW4iPjwvbGluZT48ZyBpZD0iU3ZnanNHMzI0NSIgY2xhc3M9ImFwZXhjaGFydHMteWF4aXMtYW5ub3RhdGlvbnMiPjwvZz48ZyBpZD0iU3ZnanNHMzI0NiIgY2xhc3M9ImFwZXhjaGFydHMteGF4aXMtYW5ub3RhdGlvbnMiPjwvZz48ZyBpZD0iU3ZnanNHMzI0NyIgY2xhc3M9ImFwZXhjaGFydHMtcG9pbnQtYW5ub3RhdGlvbnMiPjwvZz48L2c+PHJlY3QgaWQ9IlN2Z2pzUmVjdDMyMDkiIHdpZHRoPSIwIiBoZWlnaHQ9IjAiIHg9IjAiIHk9IjAiIHJ4PSIwIiByeT0iMCIgb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGZpbGw9IiNmZWZlZmUiPjwvcmVjdD48ZyBpZD0iU3ZnanNHMzIzMSIgY2xhc3M9ImFwZXhjaGFydHMteWF4aXMiIHJlbD0iMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4LCAwKSI+PC9nPjxnIGlkPSJTdmdqc0czMjA3IiBjbGFzcz0iYXBleGNoYXJ0cy1hbm5vdGF0aW9ucyI+PC9nPjwvc3ZnPg" alt="" />
                                    </div>

                                    <div className='border-l border-b border-[gray] border-[gray] flex justify-around items-center'>
                                        <CountUp className='font-bold'
                                            start={0}
                                            end={300}
                                            duration={2.5}
                                            separator=","
                                            decimals={2}
                                            prefix=""
                                            suffix=" units"
                                            onStart={() => console.log('Count started!')}
                                            onEnd={() => console.log('Count ended!')}
                                        />
                                        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmczMTYwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiBjbGFzcz0iYXBleGNoYXJ0cy1zdmciIHhtbG5zOmRhdGE9IkFwZXhDaGFydHNOUyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiIHN0eWxlPSJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsiPjxnIGlkPSJTdmdqc0czMTYyIiBjbGFzcz0iYXBleGNoYXJ0cy1pbm5lciBhcGV4Y2hhcnRzLWdyYXBoaWNhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjxkZWZzIGlkPSJTdmdqc0RlZnMzMTYxIj48Y2xpcFBhdGggaWQ9ImdyaWRSZWN0TWFza3k1aGQya3c3aCI+PHJlY3QgaWQ9IlN2Z2pzUmVjdDMxNjciIHdpZHRoPSIxMDciIGhlaWdodD0iNTMiIHg9Ii0zLjUiIHk9Ii0xLjUiIHJ4PSIwIiByeT0iMCIgb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGZpbGw9IiNmZmYiPjwvcmVjdD48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iZ3JpZFJlY3RNYXJrZXJNYXNreTVoZDJrdzdoIj48cmVjdCBpZD0iU3ZnanNSZWN0MzE2OCIgd2lkdGg9IjEwNCIgaGVpZ2h0PSI1NCIgeD0iLTIiIHk9Ii0yIiByeD0iMCIgcnk9IjAiIG9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSJub25lIiBzdHJva2UtZGFzaGFycmF5PSIwIiBmaWxsPSIjZmZmIj48L3JlY3Q+PC9jbGlwUGF0aD48bGluZWFyR3JhZGllbnQgaWQ9IlN2Z2pzTGluZWFyR3JhZGllbnQzMTczIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3AgaWQ9IlN2Z2pzU3RvcDMxNzQiIHN0b3Atb3BhY2l0eT0iMSIgc3RvcC1jb2xvcj0iIzBlOGE3NCIgb2Zmc2V0PSIwIj48L3N0b3A+PHN0b3AgaWQ9IlN2Z2pzU3RvcDMxNzUiIHN0b3Atb3BhY2l0eT0iMC40IiBzdG9wLWNvbG9yPSIjMGU4YTc0IiBvZmZzZXQ9IjAuMDAzIj48L3N0b3A+PHN0b3AgaWQ9IlN2Z2pzU3RvcDMxNzYiIHN0b3Atb3BhY2l0eT0iMCIgc3RvcC1jb2xvcj0iIzBlOGE3NCIgb2Zmc2V0PSIxIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGxpbmUgaWQ9IlN2Z2pzTGluZTMxNjYiIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSI1MCIgc3Ryb2tlPSIjYjZiNmI2IiBzdHJva2UtZGFzaGFycmF5PSIzIiBjbGFzcz0iYXBleGNoYXJ0cy14Y3Jvc3NoYWlycyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iNTAiIGZpbGw9IiNiMWI5YzQiIGZpbHRlcj0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjkiIHN0cm9rZS13aWR0aD0iMSI+PC9saW5lPjxnIGlkPSJTdmdqc0czMTc5IiBjbGFzcz0iYXBleGNoYXJ0cy14YXhpcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjxnIGlkPSJTdmdqc0czMTgwIiBjbGFzcz0iYXBleGNoYXJ0cy14YXhpcy10ZXh0cy1nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAtNCkiPjwvZz48L2c+PGcgaWQ9IlN2Z2pzRzMxODgiIGNsYXNzPSJhcGV4Y2hhcnRzLWdyaWQiPjxnIGlkPSJTdmdqc0czMTg5IiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkbGluZXMtaG9yaXpvbnRhbCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48bGluZSBpZD0iU3ZnanNMaW5lMzE5MSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMCIgc3Ryb2tlPSIjZWVlZWVlIiBzdHJva2UtZGFzaGFycmF5PSIwIiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkbGluZSI+PC9saW5lPjxsaW5lIGlkPSJTdmdqc0xpbmUzMTkyIiB4MT0iMCIgeTE9IjEwIiB4Mj0iMTAwIiB5Mj0iMTAiIHN0cm9rZT0iI2VlZWVlZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmUiPjwvbGluZT48bGluZSBpZD0iU3ZnanNMaW5lMzE5MyIgeDE9IjAiIHkxPSIyMCIgeDI9IjEwMCIgeTI9IjIwIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGNsYXNzPSJhcGV4Y2hhcnRzLWdyaWRsaW5lIj48L2xpbmU+PGxpbmUgaWQ9IlN2Z2pzTGluZTMxOTQiIHgxPSIwIiB5MT0iMzAiIHgyPSIxMDAiIHkyPSIzMCIgc3Ryb2tlPSIjZWVlZWVlIiBzdHJva2UtZGFzaGFycmF5PSIwIiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkbGluZSI+PC9saW5lPjxsaW5lIGlkPSJTdmdqc0xpbmUzMTk1IiB4MT0iMCIgeTE9IjQwIiB4Mj0iMTAwIiB5Mj0iNDAiIHN0cm9rZT0iI2VlZWVlZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmUiPjwvbGluZT48bGluZSBpZD0iU3ZnanNMaW5lMzE5NiIgeDE9IjAiIHkxPSI1MCIgeDI9IjEwMCIgeTI9IjUwIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGNsYXNzPSJhcGV4Y2hhcnRzLWdyaWRsaW5lIj48L2xpbmU+PC9nPjxnIGlkPSJTdmdqc0czMTkwIiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkbGluZXMtdmVydGljYWwiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PC9nPjxsaW5lIGlkPSJTdmdqc0xpbmUzMTk4IiB4MT0iMCIgeTE9IjUwIiB4Mj0iMTAwIiB5Mj0iNTAiIHN0cm9rZT0idHJhbnNwYXJlbnQiIHN0cm9rZS1kYXNoYXJyYXk9IjAiPjwvbGluZT48bGluZSBpZD0iU3ZnanNMaW5lMzE5NyIgeDE9IjAiIHkxPSIxIiB4Mj0iMCIgeTI9IjUwIiBzdHJva2U9InRyYW5zcGFyZW50IiBzdHJva2UtZGFzaGFycmF5PSIwIj48L2xpbmU+PC9nPjxnIGlkPSJTdmdqc0czMTY5IiBjbGFzcz0iYXBleGNoYXJ0cy1hcmVhLXNlcmllcyBhcGV4Y2hhcnRzLXBsb3Qtc2VyaWVzIj48ZyBpZD0iU3ZnanNHMzE3MCIgY2xhc3M9ImFwZXhjaGFydHMtc2VyaWVzIiBzZXJpZXNOYW1lPSJOZXR4UHJvZml0IiBkYXRhOmxvbmdlc3RTZXJpZXM9InRydWUiIHJlbD0iMSIgZGF0YTpyZWFsSW5kZXg9IjAiPjxwYXRoIGlkPSJTdmdqc1BhdGgzMTc3IiBkPSJNIDAgNTBMIDAgNDcuNUMgNyA0Ny41IDEzIDIyLjUgMjAgMjIuNUMgMjcgMjIuNSAzMyAzNSA0MCAzNUMgNDcgMzUgNTMgMTAgNjAgMTBDIDY3IDEwIDczIDQ3LjUgODAgNDcuNUMgODcgNDcuNSA5MyAxMCAxMDAgMTBDIDEwMCAxMCAxMDAgMTAgMTAwIDUwTSAxMDAgMTB6IiBmaWxsPSJ1cmwoI1N2Z2pzTGluZWFyR3JhZGllbnQzMTczKSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtYXJlYSIgaW5kZXg9IjAiIGNsaXAtcGF0aD0idXJsKCNncmlkUmVjdE1hc2t5NWhkMmt3N2gpIiBwYXRoVG89Ik0gMCA1MEwgMCA0Ny41QyA3IDQ3LjUgMTMgMjIuNSAyMCAyMi41QyAyNyAyMi41IDMzIDM1IDQwIDM1QyA0NyAzNSA1MyAxMCA2MCAxMEMgNjcgMTAgNzMgNDcuNSA4MCA0Ny41QyA4NyA0Ny41IDkzIDEwIDEwMCAxMEMgMTAwIDEwIDEwMCAxMCAxMDAgNTBNIDEwMCAxMHoiIHBhdGhGcm9tPSJNIC0xIDYwTCAtMSA2MEwgMjAgNjBMIDQwIDYwTCA2MCA2MEwgODAgNjBMIDEwMCA2MCI+PC9wYXRoPjxwYXRoIGlkPSJTdmdqc1BhdGgzMTc4IiBkPSJNIDAgNDcuNUMgNyA0Ny41IDEzIDIyLjUgMjAgMjIuNUMgMjcgMjIuNSAzMyAzNSA0MCAzNUMgNDcgMzUgNTMgMTAgNjAgMTBDIDY3IDEwIDczIDQ3LjUgODAgNDcuNUMgODcgNDcuNSA5MyAxMCAxMDAgMTAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTQ1NjUwIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtYXJlYSIgaW5kZXg9IjAiIGNsaXAtcGF0aD0idXJsKCNncmlkUmVjdE1hc2t5NWhkMmt3N2gpIiBwYXRoVG89Ik0gMCA0Ny41QyA3IDQ3LjUgMTMgMjIuNSAyMCAyMi41QyAyNyAyMi41IDMzIDM1IDQwIDM1QyA0NyAzNSA1MyAxMCA2MCAxMEMgNjcgMTAgNzMgNDcuNSA4MCA0Ny41QyA4NyA0Ny41IDkzIDEwIDEwMCAxMCIgcGF0aEZyb209Ik0gLTEgNjBMIC0xIDYwTCAyMCA2MEwgNDAgNjBMIDYwIDYwTCA4MCA2MEwgMTAwIDYwIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzMxNzEiIGNsYXNzPSJhcGV4Y2hhcnRzLXNlcmllcy1tYXJrZXJzLXdyYXAiIGRhdGE6cmVhbEluZGV4PSIwIj48L2c+PC9nPjxnIGlkPSJTdmdqc0czMTcyIiBjbGFzcz0iYXBleGNoYXJ0cy1kYXRhbGFiZWxzIiBkYXRhOnJlYWxJbmRleD0iMCI+PC9nPjwvZz48bGluZSBpZD0iU3ZnanNMaW5lMzE5OSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMCIgc3Ryb2tlPSIjYjZiNmI2IiBzdHJva2UtZGFzaGFycmF5PSIwIiBzdHJva2Utd2lkdGg9IjEiIGNsYXNzPSJhcGV4Y2hhcnRzLXljcm9zc2hhaXJzIj48L2xpbmU+PGxpbmUgaWQ9IlN2Z2pzTGluZTMyMDAiIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCIgeTI9IjAiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIHN0cm9rZS13aWR0aD0iMCIgY2xhc3M9ImFwZXhjaGFydHMteWNyb3NzaGFpcnMtaGlkZGVuIj48L2xpbmU+PGcgaWQ9IlN2Z2pzRzMyMDEiIGNsYXNzPSJhcGV4Y2hhcnRzLXlheGlzLWFubm90YXRpb25zIj48L2c+PGcgaWQ9IlN2Z2pzRzMyMDIiIGNsYXNzPSJhcGV4Y2hhcnRzLXhheGlzLWFubm90YXRpb25zIj48L2c+PGcgaWQ9IlN2Z2pzRzMyMDMiIGNsYXNzPSJhcGV4Y2hhcnRzLXBvaW50LWFubm90YXRpb25zIj48L2c+PC9nPjxyZWN0IGlkPSJTdmdqc1JlY3QzMTY1IiB3aWR0aD0iMCIgaGVpZ2h0PSIwIiB4PSIwIiB5PSIwIiByeD0iMCIgcnk9IjAiIG9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSJub25lIiBzdHJva2UtZGFzaGFycmF5PSIwIiBmaWxsPSIjZmVmZWZlIj48L3JlY3Q+PGcgaWQ9IlN2Z2pzRzMxODciIGNsYXNzPSJhcGV4Y2hhcnRzLXlheGlzIiByZWw9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOCwgMCkiPjwvZz48ZyBpZD0iU3ZnanNHMzE2MyIgY2xhc3M9ImFwZXhjaGFydHMtYW5ub3RhdGlvbnMiPjwvZz48L3N2Zz4=" alt="" />
                                    </div>

                                    <div className='flex justify-around items-center'>
                                        <CountUp className='font-bold'
                                            start={0}
                                            end={200}
                                            duration={2.5}
                                            separator=","
                                            decimals={2}
                                            prefix=""
                                            suffix=" units"
                                            onStart={() => console.log('Count started!')}
                                            onEnd={() => console.log('Count ended!')}
                                        />
                                        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmczMjQ4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiBjbGFzcz0iYXBleGNoYXJ0cy1zdmciIHhtbG5zOmRhdGE9IkFwZXhDaGFydHNOUyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiIHN0eWxlPSJiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsiPjxnIGlkPSJTdmdqc0czMjUwIiBjbGFzcz0iYXBleGNoYXJ0cy1pbm5lciBhcGV4Y2hhcnRzLWdyYXBoaWNhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjxkZWZzIGlkPSJTdmdqc0RlZnMzMjQ5Ij48Y2xpcFBhdGggaWQ9ImdyaWRSZWN0TWFza2diN2I4MGdqIj48cmVjdCBpZD0iU3ZnanNSZWN0MzI1NSIgd2lkdGg9IjEwNyIgaGVpZ2h0PSI1MyIgeD0iLTMuNSIgeT0iLTEuNSIgcng9IjAiIHJ5PSIwIiBvcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgZmlsbD0iI2ZmZiI+PC9yZWN0PjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJncmlkUmVjdE1hcmtlck1hc2tnYjdiODBnaiI+PHJlY3QgaWQ9IlN2Z2pzUmVjdDMyNTYiIHdpZHRoPSIxMDQiIGhlaWdodD0iNTQiIHg9Ii0yIiB5PSItMiIgcng9IjAiIHJ5PSIwIiBvcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgZmlsbD0iI2ZmZiI+PC9yZWN0PjwvY2xpcFBhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJTdmdqc0xpbmVhckdyYWRpZW50MzI2MSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPjxzdG9wIGlkPSJTdmdqc1N0b3AzMjYyIiBzdG9wLW9wYWNpdHk9IjEiIHN0b3AtY29sb3I9IiNiNzIzYWQiIG9mZnNldD0iMCI+PC9zdG9wPjxzdG9wIGlkPSJTdmdqc1N0b3AzMjYzIiBzdG9wLW9wYWNpdHk9IjAuNCIgc3RvcC1jb2xvcj0iI2I3MjNhZCIgb2Zmc2V0PSIwLjAwMyI+PC9zdG9wPjxzdG9wIGlkPSJTdmdqc1N0b3AzMjY0IiBzdG9wLW9wYWNpdHk9IjAiIHN0b3AtY29sb3I9IiNiNzIzYWQiIG9mZnNldD0iMSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxsaW5lIGlkPSJTdmdqc0xpbmUzMjU0IiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iNTAiIHN0cm9rZT0iI2I2YjZiNiIgc3Ryb2tlLWRhc2hhcnJheT0iMyIgY2xhc3M9ImFwZXhjaGFydHMteGNyb3NzaGFpcnMiIHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjUwIiBmaWxsPSIjYjFiOWM0IiBmaWx0ZXI9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMC45IiBzdHJva2Utd2lkdGg9IjEiPjwvbGluZT48ZyBpZD0iU3ZnanNHMzI2NyIgY2xhc3M9ImFwZXhjaGFydHMteGF4aXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDApIj48ZyBpZD0iU3ZnanNHMzI2OCIgY2xhc3M9ImFwZXhjaGFydHMteGF4aXMtdGV4dHMtZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgLTQpIj48L2c+PC9nPjxnIGlkPSJTdmdqc0czMjc2IiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkIj48ZyBpZD0iU3ZnanNHMzI3NyIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmVzLWhvcml6b250YWwiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PGxpbmUgaWQ9IlN2Z2pzTGluZTMyNzkiIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCIgeTI9IjAiIHN0cm9rZT0iI2VlZWVlZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmUiPjwvbGluZT48bGluZSBpZD0iU3ZnanNMaW5lMzI4MCIgeDE9IjAiIHkxPSIxMCIgeDI9IjEwMCIgeTI9IjEwIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGNsYXNzPSJhcGV4Y2hhcnRzLWdyaWRsaW5lIj48L2xpbmU+PGxpbmUgaWQ9IlN2Z2pzTGluZTMyODEiIHgxPSIwIiB5MT0iMjAiIHgyPSIxMDAiIHkyPSIyMCIgc3Ryb2tlPSIjZWVlZWVlIiBzdHJva2UtZGFzaGFycmF5PSIwIiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkbGluZSI+PC9saW5lPjxsaW5lIGlkPSJTdmdqc0xpbmUzMjgyIiB4MT0iMCIgeTE9IjMwIiB4Mj0iMTAwIiB5Mj0iMzAiIHN0cm9rZT0iI2VlZWVlZSIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmUiPjwvbGluZT48bGluZSBpZD0iU3ZnanNMaW5lMzI4MyIgeDE9IjAiIHkxPSI0MCIgeDI9IjEwMCIgeTI9IjQwIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGNsYXNzPSJhcGV4Y2hhcnRzLWdyaWRsaW5lIj48L2xpbmU+PGxpbmUgaWQ9IlN2Z2pzTGluZTMyODQiIHgxPSIwIiB5MT0iNTAiIHgyPSIxMDAiIHkyPSI1MCIgc3Ryb2tlPSIjZWVlZWVlIiBzdHJva2UtZGFzaGFycmF5PSIwIiBjbGFzcz0iYXBleGNoYXJ0cy1ncmlkbGluZSI+PC9saW5lPjwvZz48ZyBpZD0iU3ZnanNHMzI3OCIgY2xhc3M9ImFwZXhjaGFydHMtZ3JpZGxpbmVzLXZlcnRpY2FsIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPjwvZz48bGluZSBpZD0iU3ZnanNMaW5lMzI4NiIgeDE9IjAiIHkxPSI1MCIgeDI9IjEwMCIgeTI9IjUwIiBzdHJva2U9InRyYW5zcGFyZW50IiBzdHJva2UtZGFzaGFycmF5PSIwIj48L2xpbmU+PGxpbmUgaWQ9IlN2Z2pzTGluZTMyODUiIHgxPSIwIiB5MT0iMSIgeDI9IjAiIHkyPSI1MCIgc3Ryb2tlPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLWRhc2hhcnJheT0iMCI+PC9saW5lPjwvZz48ZyBpZD0iU3ZnanNHMzI1NyIgY2xhc3M9ImFwZXhjaGFydHMtYXJlYS1zZXJpZXMgYXBleGNoYXJ0cy1wbG90LXNlcmllcyI+PGcgaWQ9IlN2Z2pzRzMyNTgiIGNsYXNzPSJhcGV4Y2hhcnRzLXNlcmllcyIgc2VyaWVzTmFtZT0iTmV0eFByb2ZpdCIgZGF0YTpsb25nZXN0U2VyaWVzPSJ0cnVlIiByZWw9IjEiIGRhdGE6cmVhbEluZGV4PSIwIj48cGF0aCBpZD0iU3ZnanNQYXRoMzI2NSIgZD0iTSAwIDUwTCAwIDQ3LjVDIDcgNDcuNSAxMyAzNSAyMCAzNUMgMjcgMzUgMzMgNDcuNSA0MCA0Ny41QyA0NyA0Ny41IDUzIDIyLjUgNjAgMjIuNUMgNjcgMjIuNSA3MyAzNSA4MCAzNUMgODcgMzUgOTMgMTAgMTAwIDEwQyAxMDAgMTAgMTAwIDEwIDEwMCA1ME0gMTAwIDEweiIgZmlsbD0idXJsKCNTdmdqc0xpbmVhckdyYWRpZW50MzI2MSkiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGNsYXNzPSJhcGV4Y2hhcnRzLWFyZWEiIGluZGV4PSIwIiBjbGlwLXBhdGg9InVybCgjZ3JpZFJlY3RNYXNrZ2I3YjgwZ2opIiBwYXRoVG89Ik0gMCA1MEwgMCA0Ny41QyA3IDQ3LjUgMTMgMzUgMjAgMzVDIDI3IDM1IDMzIDQ3LjUgNDAgNDcuNUMgNDcgNDcuNSA1MyAyMi41IDYwIDIyLjVDIDY3IDIyLjUgNzMgMzUgODAgMzVDIDg3IDM1IDkzIDEwIDEwMCAxMEMgMTAwIDEwIDEwMCAxMCAxMDAgNTBNIDEwMCAxMHoiIHBhdGhGcm9tPSJNIC0xIDYwTCAtMSA2MEwgMjAgNjBMIDQwIDYwTCA2MCA2MEwgODAgNjBMIDEwMCA2MCI+PC9wYXRoPjxwYXRoIGlkPSJTdmdqc1BhdGgzMjY2IiBkPSJNIDAgNDcuNUMgNyA0Ny41IDEzIDM1IDIwIDM1QyAyNyAzNSAzMyA0Ny41IDQwIDQ3LjVDIDQ3IDQ3LjUgNTMgMjIuNSA2MCAyMi41QyA2NyAyMi41IDczIDM1IDgwIDM1QyA4NyAzNSA5MyAxMCAxMDAgMTAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYjcyM2FkIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgY2xhc3M9ImFwZXhjaGFydHMtYXJlYSIgaW5kZXg9IjAiIGNsaXAtcGF0aD0idXJsKCNncmlkUmVjdE1hc2tnYjdiODBnaikiIHBhdGhUbz0iTSAwIDQ3LjVDIDcgNDcuNSAxMyAzNSAyMCAzNUMgMjcgMzUgMzMgNDcuNSA0MCA0Ny41QyA0NyA0Ny41IDUzIDIyLjUgNjAgMjIuNUMgNjcgMjIuNSA3MyAzNSA4MCAzNUMgODcgMzUgOTMgMTAgMTAwIDEwIiBwYXRoRnJvbT0iTSAtMSA2MEwgLTEgNjBMIDIwIDYwTCA0MCA2MEwgNjAgNjBMIDgwIDYwTCAxMDAgNjAiPjwvcGF0aD48ZyBpZD0iU3ZnanNHMzI1OSIgY2xhc3M9ImFwZXhjaGFydHMtc2VyaWVzLW1hcmtlcnMtd3JhcCIgZGF0YTpyZWFsSW5kZXg9IjAiPjwvZz48L2c+PGcgaWQ9IlN2Z2pzRzMyNjAiIGNsYXNzPSJhcGV4Y2hhcnRzLWRhdGFsYWJlbHMiIGRhdGE6cmVhbEluZGV4PSIwIj48L2c+PC9nPjxsaW5lIGlkPSJTdmdqc0xpbmUzMjg3IiB4MT0iMCIgeTE9IjAiIHgyPSIxMDAiIHkyPSIwIiBzdHJva2U9IiNiNmI2YjYiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIHN0cm9rZS13aWR0aD0iMSIgY2xhc3M9ImFwZXhjaGFydHMteWNyb3NzaGFpcnMiPjwvbGluZT48bGluZSBpZD0iU3ZnanNMaW5lMzI4OCIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMCIgc3Ryb2tlLWRhc2hhcnJheT0iMCIgc3Ryb2tlLXdpZHRoPSIwIiBjbGFzcz0iYXBleGNoYXJ0cy15Y3Jvc3NoYWlycy1oaWRkZW4iPjwvbGluZT48ZyBpZD0iU3ZnanNHMzI4OSIgY2xhc3M9ImFwZXhjaGFydHMteWF4aXMtYW5ub3RhdGlvbnMiPjwvZz48ZyBpZD0iU3ZnanNHMzI5MCIgY2xhc3M9ImFwZXhjaGFydHMteGF4aXMtYW5ub3RhdGlvbnMiPjwvZz48ZyBpZD0iU3ZnanNHMzI5MSIgY2xhc3M9ImFwZXhjaGFydHMtcG9pbnQtYW5ub3RhdGlvbnMiPjwvZz48L2c+PHJlY3QgaWQ9IlN2Z2pzUmVjdDMyNTMiIHdpZHRoPSIwIiBoZWlnaHQ9IjAiIHg9IjAiIHk9IjAiIHJ4PSIwIiByeT0iMCIgb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjAiIGZpbGw9IiNmZWZlZmUiPjwvcmVjdD48ZyBpZD0iU3ZnanNHMzI3NSIgY2xhc3M9ImFwZXhjaGFydHMteWF4aXMiIHJlbD0iMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4LCAwKSI+PC9nPjxnIGlkPSJTdmdqc0czMjUxIiBjbGFzcz0iYXBleGNoYXJ0cy1hbm5vdGF0aW9ucyI+PC9nPjwvc3ZnPg==" alt="" />
                                    </div>

                                    <div className='border-l border-[gray] flex justify-around items-center'>
                                        <CountUp className='font-bold'
                                            start={0}
                                            end={100}
                                            duration={2.5}
                                            separator=","
                                            decimals={2}
                                            prefix=""
                                            suffix=" units"
                                            onStart={() => console.log('Count started!')}
                                            onEnd={() => console.log('Count ended!')}
                                        />
                                        <img src="" alt="" />
                                    </div>

                                </div>

                                {/* --------------------- */}


                                <div className='shadow-lg rounded-[8px] bg-[white] h-[300px] w-[350px] flex items-center justify-center'>
                                    <PieChart
                                        series={series}
                                        colorPalette={colorPalette}
                                        width={250}
                                        height={300}
                                    />
                                </div>

                                {/* ----------------------*/}


                            </section>


                        </section>

                    </section>

                </section>

            </section>
        </>
    )
}

export default Dashboard
