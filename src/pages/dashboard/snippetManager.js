import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddSnippetForm from "../../components/AddSnippetForm";
import UpdateSnippetForm from "../../components/UpdateSnippetForm";
import DeleteSnippetForm from "../../components/DeleteSnippetForm";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}{...other}>
            {value === index && (<Box sx={{ p: 3 }}> <Typography>{children}</Typography></Box>)}
        </div>
    );
}

TabPanel.propTypes = { children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired, };

function a11yProps(index) {
    return { id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`, };
}




export default function SnippetManager() {


    const [tabValue, setTabValue] = useState(0);


    return (
        <Container sx={{ mt: 1, mb: 10 }}>
            <Card sx={{ maxWidth: 950 }}>
                <CardContent>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tabValue} onChange={(event, newValue) => setTabValue(newValue)} aria-label="Language mode selector">
                            <Tab label="Add snippet" {...a11yProps(0)} />
                            <Tab label="Update Snippet" {...a11yProps(1)} />
                            <Tab label="Delete Snippet" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={tabValue} index={0}>
                        <AddSnippetForm />
                    </TabPanel>

                    <TabPanel value={tabValue} index={1}>
                        <UpdateSnippetForm />
                    </TabPanel>

                    <TabPanel value={tabValue} index={2}>
                        <DeleteSnippetForm />
                    </TabPanel>

                </CardContent>
            </Card>
        </Container>
    )
}