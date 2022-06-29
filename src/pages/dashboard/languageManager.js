import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddLangForm from '../../components/AddLangForm';
import UpdateLangForm from '../../components/UpdateLangForm';

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


export default function LanguageManger() {


    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newValue) => { setTabValue(newValue); };

    return (
        <Container sx={{ mt: 1, mb: 10 }}>

            <Card sx={{ maxWidth: 950 }}>
                <CardContent>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tabValue} onChange={handleTabChange} aria-label="Language mode selector">
                            <Tab label="Add Language" {...a11yProps(0)} />
                            <Tab label="Update Language" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={tabValue} index={0}>
                        <AddLangForm />
                    </TabPanel>

                    <TabPanel value={tabValue} index={1}>
                        <UpdateLangForm />
                    </TabPanel>
                </CardContent>

            </Card>

        </Container>
    )
}