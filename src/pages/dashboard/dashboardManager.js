import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';


export default function DashboardManager() {

    useEffect(() => { getIssues(); getTotalSnippets() }, []);


    const [totalSnippets, setTotalSnippet] = useState(0)
    const [repoIssues, setRepoIssues] = useState([]);
    const [errorLog, setErrorLog] = useState();

    const [isTSLoading, setTSIsLoading] = useState(false)

    const [isReportLoading, setReportIsLoading] = useState(false)




    const getIssues = () => {
        setReportIsLoading(true)
        axios.get('https://api.github.com/repos/polynomica/service-snippetsauce/issues')
            .then((response) => { console.log(response.data); setRepoIssues(response.data); setReportIsLoading(false) })
            .catch((error) => { setErrorLog(error.message); setReportIsLoading(false) })
    }

    const getTotalSnippets = () => {
        setTSIsLoading(true)
        axios.get('https://snippetsauce.herokuapp.com/api/total')
            .then((response) => { setTotalSnippet(response.data.total_snippets); setTSIsLoading(false) })
            .catch((error) => { console.log(error.message); setTSIsLoading(false) })
    }


    return (
        <Container sx={{ mt: 1, mb: 10 }}>

            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <Card sx={{ minWidth: 100, m: 1 }}>
                    <CardContent>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>Total Snippets</Typography>
                        <Typography component="p" variant="h4">
                            {!isTSLoading ? totalSnippets : <CircularProgress size={25} />}
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 100, m: 1 }}>
                    <CardContent>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>Total Reports</Typography>
                        <Typography component="p" variant="h4">
                            {!isReportLoading ? repoIssues.length : <CircularProgress size={25} />}
                        </Typography>
                    </CardContent>
                </Card>
                {/* 
                <Card sx={{ minWidth: 100, m: 1 }}>
                    <CardContent>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>Total Snippets</Typography>
                        <Typography component="p" variant="h4">200</Typography>
                    </CardContent>
                </Card> */}
            </div>
            <Card sx={{ minWidth: 950, mt: 2 }}>
                <CardContent>
                    <Typography component="h2" variant="h6" align='left' color="primary" gutterBottom>Reports</Typography>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Username</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Comment</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align="right">Visit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                !isReportLoading ?
                                    repoIssues.length !== 0 ? repoIssues.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.updated_at.split('T')[0]}</TableCell>
                                            <TableCell>{item.user.login}</TableCell>
                                            <TableCell>{item.labels.length !== 0 ? item.labels[0].name : "No Label"}</TableCell>
                                            <TableCell>{item.title}</TableCell>
                                            <TableCell align="right"><Link target={'_blank'} href={item.html_url} variant="body2">{"View"}</Link></TableCell>

                                        </TableRow>
                                    ))

                                        :
                                        <TableRow key={213}>
                                            <TableCell>Null</TableCell>
                                            <TableCell>Null</TableCell>
                                            <TableCell>Null</TableCell>
                                            <TableCell>Null</TableCell>
                                            <TableCell align="right"><Link href="#" variant="body2">{"View"}</Link></TableCell>

                                        </TableRow>

                                    :
                                    <TableRow key={213}>
                                        <TableCell><CircularProgress size={25} /></TableCell>
                                        <TableCell><CircularProgress size={25} /></TableCell>
                                        <TableCell><CircularProgress size={25} /></TableCell>
                                        <TableCell><CircularProgress size={25} /></TableCell>
                                        <TableCell align="right"><Link href="#" variant="body2"><CircularProgress size={25} /></Link></TableCell>

                                    </TableRow>


                            }



                        </TableBody>
                    </Table>


                </CardContent>

            </Card>

        </Container>
    )
}