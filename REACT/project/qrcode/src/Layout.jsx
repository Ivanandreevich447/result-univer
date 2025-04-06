import QrCodeGeneration from "./components/Generate/QrCodeGeneration";
import QRCodeScanner from "./components/Scan/QRCodeScanner";
import Navigation from './components/Navigation/Navigation'
import { Routes, Route} from "react-router-dom";
import GenerateHistory from "./components/GenerateHistory/GenerateHistory";
import ScanHistory from "./components/ScanHistory/ScanHistory";




const Layout = () => {


    return (

<div>
    
<Navigation

/>



<Routes>
        <Route path="/generate" element={<QrCodeGeneration />} />
        <Route path="/scan" element={<QRCodeScanner />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
        <Route path="scanHistory/" element={<ScanHistory />} />
     
      </Routes>

</div>

    )
}

export default Layout;