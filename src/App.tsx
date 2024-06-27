import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './shared/assets/header';
import Footer from './shared/assets/footer';

import TableroApp from './tablero';

//import { saveToken } from './libraries/auth';

import './App.css';

function App() {
    //saveToken();

    return (
        <BrowserRouter>
            <Box>
                <Header />
                <Container maxWidth="xl" sx={{ mt: 2 }}>
                    <Routes>
                        <Route path="/*" element={<TableroApp />} />
                    </Routes>
                </Container>
                <Footer />
            </Box>
        </BrowserRouter>
    );
}

export default App;
