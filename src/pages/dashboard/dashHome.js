import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '../../components/Appbar';
import LanguageManger from './languageManager';
import SnippetManager from './snippetManager';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashboardManager from './dashboardManager';

const theme = createTheme();

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, }}>
                    <Typography >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function DashHome() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <ThemeProvider theme={theme}>
            <ResponsiveAppBar />
            <Box
                sx={{ bgcolor: 'whitesmoke', display: 'flex', }}
            >
                <Tabs
                    orientation="vertical"
                    // variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, backgroundColor: 'white', borderColor: 'divider' }}
                >
                    <Tab label="Dashboard" {...a11yProps(0)} />
                    <Tab label="Snippet Manager" {...a11yProps(1)} />
                    <Tab label="Language Manager" {...a11yProps(2)} />

                </Tabs>
                <TabPanel value={value} index={0}>
                    <DashboardManager />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SnippetManager />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <LanguageManger />
                </TabPanel>

            </Box>
        </ThemeProvider>
    );
}

